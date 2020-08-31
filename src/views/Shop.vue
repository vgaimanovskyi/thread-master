<template>
  <div class="page">
    <div class="mainer">
      <div class="filter">
        <div class="filter__name" @click="filterListOpen = !filterListOpen">
          {{filterName}}
          <svg class="filter__svg" :class="{'filter__svg--rotate': filterListOpen}">
            <use xlink:href="../images/svg/sprite.svg#arrowSelect" />
          </svg>
        </div>
        <div class="filter__list" v-show="filterListOpen">
          <input type="radio" value="rating" id="rating" v-model="filterValue" @change="useFilter" />
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
      <div class="row">
        <div class="col" v-for="product in products" :key="product.id">
          <div class="img-container">
            <div class="tag tag--discount" v-if="product.discount > 0">-{{product.discount}}%</div>
            <div class="tag tag--new" v-if="product.new">Новинка</div>
            <img
              class="img"
              :src="require('../images/products/' + product.id + '/poster.jpg')"
              :alt="product.name"
            />
          </div>
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
    <svg class="svg svg--pineapple">
      <use xlink:href="../images/svg/sprite.svg#pineapple" />
    </svg>
    <svg class="svg svg--bgheart">
      <use xlink:href="../images/svg/sprite.svg#bgheart" />
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
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.filter {
  position: relative;
  width: 213px;
  border: 1px solid $colorBrend;
  border-radius: 8px;
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
    padding: 0 10px;
    margin-bottom: 50px;

    &.empty {
      flex-grow: 1;
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
.btn {
  margin: 9px auto 0 auto;
}
</style>