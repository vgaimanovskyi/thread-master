<template>
  <div class="page">
    <div class="mainer">
      <Photo v-if="modal" @closeModal="modal = !modal" :prodId="id" :imgPath="resizeImg" />
      <router-link tag="a" to="/shop" title="Назад">
        <span class="link-back"></span>
      </router-link>
      <div class="row">
        <div class="col">
          <carousel
            class="carousel"
            :perPage="1"
            :paginationEnabled="true"
            :paginationActiveColor="'#FFC120'"
            :paginationColor="'rgba(255, 193, 32, 0.3)'"
            :paginationSize="15"
            :paginationPadding="5"
          >
            <slide v-for="(img, index) in product.urlShop" :key="index">
              <div class="slide-block">
                <div class="btn-conteiner" title="Увеличить" @click="resizePhoto(index)">
                  <svg class="svg-btn">
                    <use xlink:href="../images/svg/sprite.svg#resize" />
                  </svg>
                </div>
                <div class="img-block">
                  <img
                    class="img-block__photo"
                    :ref="`${product.id}`-`${index+1}`"
                    :src="require('../images/products/' + product.id + img)"
                  />
                </div>
              </div>
            </slide>
          </carousel>
        </div>
        <div class="col">
          <div class="product">
            <div class="product__available">
              <span v-if="product.available">Есть в наличии</span>
              <span v-else>Под заказ</span>
            </div>
            <h1 class="product__name">{{product.name}}</h1>
            <div class="product__price">
              {{product.price - (product.price*product.discount/100)}} $
              <s
                class="product__old-price"
                v-if="product.discount > 0"
              >{{product.price}} $</s>
            </div>
            <div class="accordion">
              <div class="accordion-tabs">
                <span
                  class="accordion-tabs__tab"
                  :class="{'active': accordionTabDesc}"
                  @click="accordionTabDesc = true; accordionTabParams = false"
                >Описание</span>
                <span
                  class="accordion-tabs__tab"
                  :class="{'active': accordionTabParams}"
                  @click="accordionTabDesc = false; accordionTabParams = true"
                >Характеристики</span>
              </div>
              <div class="accordion-info" v-show="accordionTabDesc">{{product.description}}</div>
              <div class="accordion-info" v-show="accordionTabParams">
                <span class="accordion-info__parameters">
                  <b>Размер:</b>
                  {{product.size}}
                </span>
                <span class="accordion-info__parameters">
                  <b>Материал:</b>
                  {{product.material}}
                </span>
              </div>
            </div>
            <div class="controls">
              <div class="counter">
                <button
                  type="button"
                  class="counter__btn"
                  @click="counter--"
                  :disabled="counter === 0"
                >-</button>
                <span class="counter__number">{{counter}}</span>
                <button
                  type="button"
                  class="counter__btn"
                  @click="counter++"
                  :disabled="counter === 5"
                >+</button>
              </div>
              <button
                type="button"
                class="btn btn--width"
                @click="addToBasket(product.id)"
              >Добавить в корзину</button>
              <button type="button" class="btn" @click="toggleFavourites(product.id)">
                <svg class="svg-btn" :class="{'favourite': isFavourite > -1}">
                  <use xlink:href="../images/svg/sprite.svg#heart" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 class="caption">Похожие продукты</h2>
      <carousel
        class="similar-carousel"
        :perPage="3"
        :loop="true"
        :mouseDrag="false"
        :paginationEnabled="false"
        :navigationEnabled="true"
        :navigationClickTargetSize="0"
        :navigationPrevLabel="`<span style='font-size: 100px; color: #fff; line-height: 20px;'>&#8249;</span>`"
        :navigationNextLabel="`<span style='font-size: 100px; color: #fff; line-height: 20px;'>&#8250;</span>`"
      >
        <slide v-for="simProd in similarProducts" :key="simProd.id">
          <div class="similar-slide">
            <router-link tag="div" :to="'/product/' + simProd.id" class="img-container">
              <div class="tag tag--discount" v-if="simProd.discount > 0">-{{simProd.discount}}%</div>
              <div class="tag tag--new" v-if="simProd.new">Новинка</div>
              <img
                class="img"
                :src="require('../images/products/' + simProd.id + '/poster.jpg')"
                :alt="simProd.name"
              />
            </router-link>
            <h3 class="name">
              <span>{{simProd.name}}</span>
            </h3>
            <div class="size">Размер: {{simProd.size}}</div>
            <div class="price">
              {{simProd.price - (simProd.price*simProd.discount/100)}} $
              <s
                class="old-price"
                v-if="simProd.discount > 0"
              >{{simProd.price}} $</s>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
    <Aside />
    <svg class="svg svg--bird">
      <use xlink:href="../images/svg/sprite.svg#bird" />
    </svg>
    <svg class="svg svg--whale">
      <use xlink:href="../images/svg/sprite.svg#whale" />
    </svg>
    <svg class="svg svg--pineapple">
      <use xlink:href="../images/svg/sprite.svg#pineapple" />
    </svg>
  </div>
</template>

<script>
import Photo from "../components/photo";
import Aside from "../components/aside";
import { Carousel, Slide } from "vue-carousel";

export default {
  components: { Photo, Aside, Carousel, Slide },
  data() {
    return {
      id: this.$route.params["id"],
      counter: 0,
      accordionTabDesc: true,
      accordionTabParams: false,
      modal: false,
      resizeImg: "",
      favouriteList: [],
    };
  },
  computed: {
    product() {
      return this.$store.getters.getProductById;
    },
    similarProducts() {
      return this.$store.getters.sliceProducts(0);
    },
    isFavourite() {
      return this.favouriteList.indexOf(this.id);
    },
  },
  methods: {
    resizePhoto(idx) {
      this.resizeImg = this.product.urlGallery[idx];
      this.modal = true;
    },
    toggleFavourites(prodId) {
      if (this.isFavourite > -1) {
        this.favouriteList.splice(this.isFavourite, 1);
        localStorage.setItem("favList", JSON.stringify(this.favouriteList));
      } else {
        if (this.favouriteList) {
          this.favouriteList.push(prodId);
          localStorage.setItem("favList", JSON.stringify(this.favouriteList));
        } else {
          localStorage.setItem("favList", JSON.stringify([prodId]));
        }
      }
    },
  },
  created() {
    this.$store.commit("productById", this.id);
    const catId = this.product.catId[1];
    this.$store.commit("productsByCategory", catId);
    this.favouriteList = JSON.parse(localStorage.getItem("favList")) || [];
  },
  watch: {
    $route(toR) {
      this.id = toR.params["id"];
      this.$store.commit("productById", this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.row {
  display: flex;
  margin: 40px -50px 180px -50px;

  .col {
    max-width: 561px;
    flex-grow: 1;
    padding: 0 50px;
  }
}
.product {
  margin-top: 20px;

  &__available {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    color: $colorBrend;
    margin-bottom: 20px;
  }
  &__name {
    font-family: "Montserrat", sans-serif;
    font-size: 28px;
    font-weight: 600;
    line-height: 34px;
    color: $colorTextMain;
    margin-bottom: 25px;
  }
  &__price {
    font-family: "Montserrat", sans-serif;
    font-size: 44px;
    font-weight: 600;
    line-height: 54px;
    color: $colorBrend;
    margin-bottom: 55px;
  }
  &__old-price {
    font-size: 34px;
    color: $colorTextSecondary;
    margin-left: 8px;
    vertical-align: bottom;
  }
}
.slide-block {
  position: relative;
  height: 561px;

  .btn-conteiner {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0 0 0 8px;
    z-index: 1000;

    .svg-btn {
      display: inline-block;
      width: 18px;
      height: 18px;
      fill: $colorTextMain;
      padding: 20px;
      transition-duration: 0.3s;
      cursor: pointer;

      &:hover,
      &:focus {
        fill: $colorBrend;
        box-shadow: inset 0 0 10px $colorBrend;
      }
    }
  }
}
.img-block {
  height: 100%;
  display: flex;
  align-items: center;

  &__photo {
    display: block;
    width: 100%;
    border-radius: 8px;
    cursor: grab;
  }
}
.accordion {
  margin-bottom: 80px;

  & .accordion-tabs {
    margin-bottom: 30px;

    &__tab {
      font-family: "Montserrat", sans-serif;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      color: darken($colorTextSecondary, 15%);
      margin-right: 40px;
      cursor: pointer;
      position: relative;
      transition-duration: 0.3s;

      &::before {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -2px;
        height: 1px;
        width: 0;
        background-color: $colorBrend;
        transition-duration: inherit;
      }
      &:last-of-type {
        margin-right: 0;
      }
      &:hover,
      &:focus,
      &.active {
        color: $colorBrend;

        &::before {
          left: 0;
          width: 100%;
        }
      }
    }
  }
  & .accordion-info {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    color: $colorTextMain;
    letter-spacing: 1px;

    &__parameters {
      display: block;
    }
  }
}
.controls {
  display: flex;

  .counter {
    display: flex;
    align-items: center;

    &__btn {
      width: 19px;
      line-height: 17px;
      background-color: transparent;
      border: 1px solid $colorTextMain;
      padding: 0;
      outline: none;
      cursor: pointer;

      &:hover,
      &:focus {
        border-color: $colorBrend;
        color: $colorBrend;
      }
      &:disabled {
        border-color: $colorTextSecondary;
        color: $colorTextSecondary;
        cursor: default;
      }
    }
    &__btn,
    &__number {
      font-family: "Montserrat", sans-serif;
      font-size: 24px;
      color: $colorTextMain;
      text-align: center;
    }
    &__number {
      margin: 0 12px;
      width: 15px;
    }
  }
  .btn {
    margin-left: 21px;

    .svg-btn {
      width: 18px;
      height: 16px;
      stroke: $colorBackground;
      fill: none;

      &.favourite {
        fill: $colorBackground;
      }
    }
    &--width {
      margin-left: 30px;
    }
  }
}
.caption {
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  color: $colorTextMain;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 55px;
}
.similar-carousel {
  max-width: 1114px;
  margin: 0 auto 40px auto;
}
.similar-slide {
  max-width: 330px;
  margin: 0 auto;

  .img-container {
    position: relative;
    width: 100%;
    height: 330px;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin-bottom: 25px;
    border-radius: 8px;
    transition-duration: 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
    .img {
      display: block;
      width: 100%;
      border-radius: 8px;
    }
    .tag {
      position: absolute;
      top: 15px;
      min-width: 68px;
      font-family: "Montserrat", sans-serif;
      font-size: 11px;
      font-weight: 500;
      line-height: 23px;
      color: $colorTextMain;
      text-align: center;
      padding: 0 5px;
      box-sizing: border-box;

      &--discount {
        left: 0;
        background-color: $colorImportant;
      }
      &--new {
        right: 0;
        background-color: #eb00ff;
      }
    }
  }
  .name {
    position: relative;
    height: 29px;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 29px;
    color: $colorTextSecondary;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;

    span {
      min-width: 100%;
      position: absolute;
      top: 0;
      right: auto;
    }
    &:hover {
      span {
        right: 0;
      }
    }
  }
  .size {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    line-height: 24px;
    color: $colorTextSecondary;
    margin-bottom: 10px;
  }
  .price {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    color: $colorBrend;
  }
  .old-price {
    font-size: 18px;
    color: $colorTextSecondary;
    margin-left: 8px;
  }
}
.link-back {
  display: inline-block;
  width: 40px;
  height: 3px;
  background-color: $colorBrend;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: -3px;
    width: 15px;
    height: inherit;
    background-color: inherit;
  }
  &::before {
    top: -4px;
    transform: rotate(-45deg);
  }
  &::after {
    bottom: -4px;
    transform: rotate(45deg);
  }
  &:hover {
    animation: linkBack 1s linear infinite;
  }
}
.svg {
  position: absolute;
  z-index: -1;

  &--bird {
    top: 160px;
    right: -5px;
    stroke: $colorTextMain;
    width: 178px;
    height: 152px;
    transform: rotate(25deg);
    stroke-dasharray: 160;
    stroke-dashoffset: 170;
    animation: svgShow 10s linear 2s infinite alternate;
  }
  &--whale {
    top: 50%;
    left: 50%;
    transform: scaleX(-1) translate(-40%, -85%);
    stroke: $colorTextMain;
    width: 436px;
    height: 159px;
    stroke-dasharray: 360;
    stroke-dashoffset: 370;
    animation: svgShow 10s linear 4s infinite alternate;
  }

  &--pineapple {
    left: 111px;
    bottom: 30px;
    stroke: $colorTextMain;
    width: 126px;
    height: 272px;
    stroke-dasharray: 450;
    stroke-dashoffset: 460;
    animation: svgShow 10s linear 6s infinite alternate;
  }
}
@keyframes svgShow {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes linkBack {
  50% {
    transform: translateX(-20px);
  }
}
</style>