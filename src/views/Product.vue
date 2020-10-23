<template>
  <div class="page">
    <div class="mainer">
      <Photo
        v-if="modal"
        @closeModal="modal = !modal"
        :resizePath="resizePath"
      />
      <Share
        v-if="share"
        :link="link"
        :description="product.description"
        :name="product.name"
        :media="media"
        @closeShare="share = false"
      />
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
                <div class="btn-conteiner">
                  <router-link
                    tag="svg"
                    class="svg-btn svg-btn--back"
                    title="Назад"
                    to="/shop"
                  >
                    <use xlink:href="../images/svg/sprite.svg#arrowTop" />
                  </router-link>
                  <svg
                    class="svg-btn"
                    title="Поделиться"
                    @click="openShare(img)"
                  >
                    <use xlink:href="../images/svg/sprite.svg#share" />
                  </svg>
                </div>

                <div
                  class="btn-conteiner btn-conteiner--right"
                  title="Увеличить"
                  @click="resizePhoto(index)"
                >
                  <svg class="svg-btn">
                    <use xlink:href="../images/svg/sprite.svg#resize" />
                  </svg>
                </div>
                <div class="img-block">
                  <img
                    class="img-block__photo"
                    :alt="product.name"
                    :src="img"
                  />
                </div>
              </div>
            </slide>
          </carousel>
        </div>
        <div class="col col--width">
          <div class="product">
            <div class="product__available">
              <span v-if="product.available">Есть в наличии</span>
              <span v-else>Под заказ</span>
            </div>
            <h1 class="product__name">{{ product.name }}</h1>
            <div class="product__price">
              {{ product.price - (product.price * product.discount) / 100 }} $
              <s class="product__old-price" v-if="product.discount > 0"
                >{{ product.price }} $</s
              >
            </div>
            <div class="accordion">
              <div class="accordion-tabs">
                <span
                  class="accordion-tabs__tab"
                  :class="{ active: accordionTabDesc }"
                  @click="
                    accordionTabDesc = true;
                    accordionTabParams = false;
                  "
                  >Описание</span
                >
                <span
                  class="accordion-tabs__tab"
                  :class="{ active: accordionTabParams }"
                  @click="
                    accordionTabDesc = false;
                    accordionTabParams = true;
                  "
                  >Характеристики</span
                >
              </div>
              <div class="accordion-info" v-show="accordionTabDesc">
                {{ product.description }}
              </div>
              <div class="accordion-info" v-show="accordionTabParams">
                <span class="accordion-info__parameters">
                  <b>Размер:</b>
                  {{ product.size }}
                </span>
                <span class="accordion-info__parameters">
                  <b>Материал:</b>
                  {{ product.material }}
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
                >
                  -
                </button>
                <span class="counter__number">{{ counter }}</span>
                <button
                  type="button"
                  class="counter__btn"
                  @click="counter++"
                  :disabled="counter === 5"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                class="btn btn--width"
                :disabled="counter === 0"
                @click="addToCart"
              >
                Добавить в корзину
              </button>
              <button
                type="button"
                class="btn"
                @click="toggleFavourites(product.id)"
              >
                <svg class="svg-btn" :class="{ favourite: isFavourite > -1 }">
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
        :perPage="perPage"
        :loop="true"
        :mouseDrag="mouseDrag"
        :paginationEnabled="false"
        :navigationEnabled="navEnabled"
        :navigationClickTargetSize="0"
        :navigationPrevLabel="prevBtn"
        :navigationNextLabel="nextBtn"
      >
        <slide v-for="simProd in similarProducts" :key="simProd.id">
          <div class="similar-slide">
            <router-link
              tag="div"
              :to="'/product/' + simProd.id"
              class="img-container"
            >
              <div class="tag tag--discount" v-if="simProd.discount > 0">
                -{{ simProd.discount }}%
              </div>
              <div class="tag tag--new" v-if="simProd.new">Новинка</div>
              <img class="img" :src="simProd.urlPoster" :alt="simProd.name" />
            </router-link>
            <h3 class="name">
              <span>{{ simProd.name }}</span>
            </h3>
            <div class="size">Размер: {{ simProd.size }}</div>
            <div class="price">
              {{ simProd.price - (simProd.price * simProd.discount) / 100 }} $
              <s class="old-price" v-if="simProd.discount > 0"
                >{{ simProd.price }} $</s
              >
            </div>
          </div>
        </slide>
      </carousel>
    </div>
    <Aside />
    <Cart v-if="cart" @closeModal="cart = false" />
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
import btnNext from "../images/svg/btnNext.svg";
import btnPrev from "../images/svg/btnPrev.svg";
import Photo from "../components/photo";
import Aside from "../components/aside";
import Cart from "../components/cart";
import { Carousel, Slide } from "vue-carousel";
import Share from "../components/share";

export default {
  components: { Photo, Aside, Cart, Carousel, Slide, Share },
  metaInfo: {
    title: "Товар",
  },
  data() {
    return {
      id: this.$route.params["id"],
      counter: 1,
      accordionTabDesc: true,
      accordionTabParams: false,
      modal: false,
      resizePath: "",
      cart: false,
      share: false,
      media: "",
      link: window.location.href,
      autoplay: false,
    };
  },
  computed: {
    product() {
      return this.$store.getters.getProductById;
    },
    similarProducts() {
      return this.$store.getters.sliceProducts(0);
    },
    favouriteList() {
      return this.$store.getters.getFavList;
    },
    isFavourite() {
      return this.favouriteList.indexOf(this.id);
    },
    nextBtn() {
      return `<img src="${btnNext}"/>`;
    },
    prevBtn() {
      return `<img src="${btnPrev}"/>`;
    },
    mouseDrag() {
      if (window.innerWidth < 992) {
        return true;
      }
      return false;
    },
    navEnabled() {
      if (window.innerWidth < 480) {
        return true;
      } else if (window.innerWidth < 992) {
        return false;
      }
      return true;
    },
    perPage() {
      if (window.innerWidth < 480) {
        return 1;
      } else if (window.innerWidth < 768) {
        return 2;
      }
      return 3;
    },
  },
  methods: {
    resizePhoto(idx) {
      this.resizePath = this.product.urlGallery[idx];
      this.modal = true;
    },
    toggleFavourites(prodId) {
      if (this.isFavourite > -1) {
        this.favouriteList.splice(this.isFavourite, 1);
        this.$store.dispatch("toggleMyFavourite", this.favouriteList);
      } else {
        if (this.favouriteList) {
          this.favouriteList.push(prodId);
          this.$store.dispatch("toggleMyFavourite", this.favouriteList);
        } else {
          this.$store.dispatch("toggleMyFavourite", [prodId]);
        }
      }
    },
    addToCart() {
      const price =
        this.product.price - (this.product.price * this.product.discount) / 100;
      const cart = {
        id: this.product.id,
        name: this.product.name,
        urlPoster: this.product.urlPoster,
        price: price,
        count: this.counter,
      };
      this.$store.dispatch("addToCart", cart);
      this.cart = true;
      this.counter = 1;
    },
    openShare(img) {
      this.media = img;
      this.share = true;
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  async created() {
    if (this.$store.getters.noProducts) {
      await this.$store.dispatch("fetchAllProducts");
    }
    this.$store.dispatch("getProductById", this.id);
    const catId = this.product.catId[1];
    this.$store.dispatch("getProductsByCategory", catId);
    this.scrollTop();
  },
  watch: {
    $route(toR) {
      this.id = toR.params["id"];
      this.$store.dispatch("getProductById", this.id);
      this.scrollTop();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.row {
  display: flex;
  margin: 40px -50px 180px -50px;

  @media screen and (max-width: 1199px) {
    margin-left: -20px;
    margin-right: -20px;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  .col {
    max-width: 561px;
    flex-grow: 1;
    padding: 0 50px;

    @media screen and (max-width: 1199px) {
      width: 40%;
      flex-grow: 0;
      padding: 0 20px;
      box-sizing: border-box;

      &--width {
        flex-grow: 1;
      }
    }
    @media screen and (max-width: 767px) {
      width: 100%;
      flex-grow: 1;
    }
  }
}
.product {
  margin-top: 20px;

  @media screen and (max-width: 991px) {
    margin-top: 0;
  }
  &__available {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    color: $colorBrend;
    margin-bottom: 20px;

    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  &__name {
    font-family: "Montserrat", sans-serif;
    font-size: 28px;
    font-weight: 600;
    line-height: 34px;
    color: $colorTextMain;
    margin-bottom: 25px;

    @media screen and (max-width: 991px) {
      font-size: 20px;
      line-height: 26px;
    }
    @media screen and (max-width: 767px) {
      line-height: 24px;
      margin-bottom: 10px;
    }
  }
  &__price {
    font-family: "Montserrat", sans-serif;
    font-size: 44px;
    font-weight: 600;
    line-height: 54px;
    color: $colorBrend;
    margin-bottom: 55px;

    @media screen and (max-width: 1199px) {
      margin-bottom: 35px;
    }
    @media screen and (max-width: 991px) {
      font-size: 34px;
      line-height: 40px;
      margin-bottom: 20px;
    }
  }
  &__old-price {
    font-size: 34px;
    color: $colorTextSecondary;
    margin-left: 8px;
    vertical-align: bottom;

    @media screen and (max-width: 991px) {
      font-size: 28px;
    }
  }
}
.carousel {
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
}
.slide-block {
  position: relative;
  height: 561px;

  @media screen and (max-width: 1199px) {
    max-height: 450px;
    height: 100%;
  }
  @media screen and (max-width: 991px) {
    max-height: 400px;
  }
  @media screen and (max-width: 767px) {
    max-height: 561px;
  }
  .btn-conteiner {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0 0 8px 0;
    z-index: 1000;

    &--right {
      left: auto;
      right: 0;
      border-radius: 0 0 0 8px;

      @media screen and (max-width: 767px) {
        display: none;
      }
    }
    .svg-btn {
      display: inline-block;
      width: 18px;
      height: 18px;
      fill: $colorTextMain;
      padding: 20px;
      transition-duration: 0.3s;
      cursor: pointer;

      &--back {
        display: none;
        transform: rotate(-90deg);

        @media screen and (max-width: 767px) {
          display: inline-block;
        }
      }
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

  @media screen and (max-width: 1199px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 30px;
  }
  & .accordion-tabs {
    margin-bottom: 30px;

    @media screen and (max-width: 991px) {
      margin-bottom: 20px;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 12px;
    }
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

      @media screen and (max-width: 991px) {
        font-size: 16px;
        line-height: 20px;
      }
      @media screen and (max-width: 767px) {
        font-size: 18px;
        margin-right: 24px;
      }
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

    @media screen and (max-width: 991px) {
      font-size: 14px;
      line-height: 20px;
    }
    @media screen and (max-width: 767px) {
      font-size: 15px;
      line-height: 24px;
    }
    @media screen and (max-width: 374px) {
      font-size: 13px;
      line-height: 20px;
    }
    &__parameters {
      display: block;
    }
  }
}
.controls {
  display: flex;

  @media screen and (max-width: 1199px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
  .counter {
    display: flex;
    align-items: center;

    @media screen and (max-width: 1199px) {
      width: 100%;
      margin-bottom: 40px;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 30px;
    }
    &__btn {
      width: 19px;
      line-height: 16px;
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
      display: block;
      margin: 0 auto;
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

      @media screen and (max-width: 1199px) {
        margin-left: 0;
      }
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

  @media screen and (max-width: 991px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 575px) {
    font-size: 20px;
    line-height: 24px;
  }
}
.similar-carousel {
  max-width: 1114px;
  margin: 0 auto 40px auto;

  @media screen and (max-width: 1199px) {
    max-width: calc(100% - 25px - 25px);
  }
  @media screen and (max-width: 991px) {
    max-width: 100%;
  }
  @media screen and (max-width: 479px) {
    max-width: calc(100% - 25px - 25px);
  }
}
.similar-slide {
  max-width: 330px;
  margin: 0 auto;

  @media screen and (max-width: 1199px) {
    max-width: 260px;
  }
  @media screen and (max-width: 991px) {
    width: 225px;
  }
  @media screen and (max-width: 767px) {
    width: 215px;
  }
  @media screen and (max-width: 575px) {
    width: 210px;
  }
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

    @media screen and (max-width: 1199px) {
      height: 260px;
    }
    @media screen and (max-width: 991px) {
      height: 225px;
      margin-bottom: 10px;
    }
    @media screen and (max-width: 767px) {
      height: 215px;
    }
    @media screen and (max-width: 575px) {
      height: 210px;
    }
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
      left: 0;
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
        background-color: $colorImportant;
      }
      &--new {
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
    margin-bottom: 2px;
    white-space: nowrap;
    overflow: hidden;

    @media screen and (max-width: 1199px) {
      font-size: 16px;
      line-height: 26px;
    }
    @media screen and (max-width: 575px) {
      font-size: 13px;
      line-height: 21px;
    }
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
    margin-bottom: 5px;

    @media screen and (max-width: 1199px) {
      font-size: 13px;
      line-height: 21px;
    }
    @media screen and (max-width: 575px) {
      font-size: 12px;
      line-height: 19px;
    }
  }
  .price {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    color: $colorBrend;

    @media screen and (max-width: 1199px) {
      font-size: 22px;
      line-height: 26px;
    }
    @media screen and (max-width: 575px) {
      font-size: 18px;
      line-height: 22px;
    }
  }
  .old-price {
    font-size: 18px;
    color: $colorTextSecondary;
    margin-left: 8px;

    @media screen and (max-width: 1199px) {
      font-size: 17px;
    }
    @media screen and (max-width: 575px) {
      font-size: 14px;
    }
  }
}
.link-back {
  display: inline-block;
  width: 40px;
  height: 3px;
  background-color: $colorBrend;
  position: relative;

  @media screen and (max-width: 767px) {
    display: none;
  }
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

    @media screen and (max-width: 767px) {
      top: 42%;
      right: 20%;
    }
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

    @media screen and (max-width: 991px) {
      transform: scaleX(-1) translate(-50%, -50%);
    }
    @media screen and (max-width: 991px) {
      display: none;
    }
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

    @media screen and (max-width: 767px) {
      left: 0;
      bottom: 0;
    }
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