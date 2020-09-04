<template>
  <div class="page">
    <div class="mainer">
      <div class="filter-block">
        <div class="filter">
          <div class="filter__name" @click="filterListOpen = !filterListOpen">
            {{filterName}}
            <svg
              class="filter__svg"
              :class="{'filter__svg--rotate': filterListOpen}"
            >
              <use xlink:href="../images/svg/sprite.svg#arrowSelect" />
            </svg>
          </div>
          <div class="filter__list" v-show="filterListOpen">
            <input
              type="radio"
              value="rating"
              id="rating"
              v-model="filterValue"
              @change="useFilter"
            />
            <label for="rating">По рейтингу</label>
            <input type="radio" value="cheap" id="cheap" v-model="filterValue" @change="useFilter" />
            <label for="cheap">От дешевых к дорогим</label>
            <input
              type="radio"
              value="expensive"
              id="expensive"
              v-model="filterValue"
              @change="useFilter"
            />
            <label for="expensive">От дорогих к дешевым</label>
            <input
              type="radio"
              value="popular"
              id="popular"
              v-model="filterValue"
              @change="useFilter"
            />
            <label for="popular">Популярные</label>
            <input type="radio" value="new" id="new" v-model="filterValue" @change="useFilter" />
            <label for="new">Новинки</label>
            <input type="radio" value="promo" id="promo" v-model="filterValue" @change="useFilter" />
            <label for="promo">Акционные</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col" v-for="product in products" :key="product.id">
          <router-link tag="div" :to="'/product/' + product.id" class="img-container">
            <div class="tag tag--discount" v-if="product.discount > 0">-{{product.discount}}%</div>
            <div class="tag tag--new" v-if="product.new">Новинка</div>
            <img
              class="img"
              :src="require('../images/products/' + product.id + '/poster.jpg')"
              :alt="product.name"
            />
          </router-link>
          <h3 class="name">
            <span>{{product.name}}</span>
          </h3>
          <div class="size">Размер: {{product.size}}</div>
          <div class="price">
            {{product.price - (product.price*product.discount/100)}} $
            <s
              class="old-price"
              v-if="product.discount > 0"
            >{{product.price}} $</s>
          </div>
        </div>
        <div class="col empty"></div>
        <div class="col empty"></div>
      </div>
      <button
        type="button"
        class="btn btn--width"
        @click="moreProducts()"
        :disabled="btnDisabled"
      >Смотреть еще</button>
    </div>
    <Aside />
    <svg class="svg svg--turtle">
      <use xlink:href="../images/svg/sprite.svg#turtle" />
    </svg>
    <svg class="svg svg--whale">
      <use xlink:href="../images/svg/sprite.svg#whale" />
    </svg>
    <svg class="svg svg--faces">
      <use xlink:href="../images/svg/sprite.svg#faces" />
    </svg>
  </div>
</template>

<script>
import Aside from "../components/aside";

export default {
  components: { Aside },
  data() {
    return {
      products: [],
      filterName: "Фильтр",
      filterValue: "",
      filterListOpen: false,
      btnDisabled: false,
    };
  },
  methods: {
    getProducts() {
      this.products = this.$store.getters.sliceProducts(0);
      console.log(this.products.length);
    },
    useFilter() {
      switch (this.filterValue) {
        case "rating":
          this.filterName = "По рейтингу";
          alert("rating нет данных");
          break;
        case "cheap":
          this.filterName = "От дешевых к дорогим";
          this.products.sort(function (a, b) {
            const A = a.price - (a.price * a.discount) / 100;
            const B = b.price - (b.price * b.discount) / 100;
            return A - B;
          });
          break;
        case "expensive":
          this.filterName = "От дорогих к дешевым";
          this.products.sort(function (a, b) {
            const A = a.price - (a.price * a.discount) / 100;
            const B = b.price - (b.price * b.discount) / 100;
            return B - A;
          });
          break;
        case "popular":
          this.filterName = "Популярные";
          alert("popular нет данных");
          break;
        case "new":
          this.filterName = "Новинки";
          this.products.sort((a, b) => b.new - a.new);
          break;
        case "promo":
          this.filterName = "Акционные";
          this.products.sort((a, b) => b.discount - a.discount);
          break;
        default:
          this.filterName = "Фильтр";
          this.products.sort((a, b) => a.id - b.id);
      }
      this.filterListOpen = false;
    },
    moreProducts() {
      const oldProducts = this.products;
      const newProducts = this.$store.getters.sliceProducts(oldProducts.length);
      this.products = oldProducts.concat(newProducts);
      this.btnDisabled = this.products.length === oldProducts.length;
      this.useFilter();
    },
  },
  created() {
    this.$store.commit("productsByCategory", "00");
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.filter-block {
  position: relative;
  width: 213px;
  height: 35px;
}
.filter {
  position: relative;
  width: inherit;
  border: 1px solid $colorBrend;
  border-radius: 8px;
  background-color: $colorBackground;
  z-index: 2;
  overflow: hidden;

  &__name,
  label {
    position: relative;
    display: block;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    line-height: 35px;
    color: $colorTextMain;
    padding: 0 30px 0 10px;
    cursor: pointer;
  }
  &__svg {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%) rotateX(180deg);
    width: 15px;
    height: 8px;
    stroke: $colorTextMain;
    transition-duration: 0.3s;

    &--rotate {
      transform: translateY(-50%);
    }
  }
  &__list {
    border-top: 1px solid $colorBrend;

    & input[type="radio"] {
      position: absolute;
      opacity: 0;

      &:hover + label,
      &:focus + label,
      &:checked + label {
        color: $colorBackground;
        background-color: $colorBrend;
      }
    }
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  max-width: 1050px;
  margin: 50px auto 0 auto;

  .col {
    max-width: 330px;
    flex-grow: 1;
    padding: 0 10px;
    margin-bottom: 50px;

    &.empty {
      padding: 0;
    }
  }
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
  margin-bottom: 5px;
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
  vertical-align: bottom;
}
.btn {
  margin: 9px auto 70px auto;
}
.svg {
  position: absolute;
  z-index: -1;

  &--faces {
    top: 62px;
    right: 8px;
    stroke: $colorTextMain;
    width: 189px;
    height: 660px;
    stroke-dasharray: 200;
    stroke-dashoffset: 220;
    animation: svgShow 15s linear 0.5s infinite alternate;
  }
  &--whale {
    top: 580px;
    left: -115px;
    transform: rotate(60deg);
    stroke: $colorTextMain;
    width: 436px;
    height: 159px;
    stroke-dasharray: 360;
    stroke-dashoffset: 370;
    animation: svgShow 10s linear 2s infinite alternate;
  }
  &--turtle {
    left: 34px;
    bottom: 81px;
    stroke: $colorTextMain;
    width: 379px;
    height: 198px;
    stroke-dasharray: 600;
    stroke-dashoffset: 620;
    animation: svgShow 15s linear 4s infinite alternate;
  }
}
@keyframes svgShow {
  to {
    stroke-dashoffset: 0;
  }
}
</style>