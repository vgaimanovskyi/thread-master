<template>
  <div class="page">
    <div class="mainer">
      <h1 class="page__caption">Избранные товары</h1>
      <div class="row">
        <div class="col" v-for="product in favProducts" :key="product.id">
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
          <div class="btn-container">
            <button
              type="button"
              class="btn btn--width"
              @click="addToCart(product.id)"
            >Добавить в корзину</button>
            <button type="button" class="btn" @click="removeFromFavourites(product.id)">
              <svg class="svg-btn favourite">
                <use xlink:href="../images/svg/sprite.svg#heart" />
              </svg>
            </button>
          </div>
        </div>
        <div class="col empty"></div>
        <div class="col empty"></div>
      </div>
    </div>
    <Aside />
    <svg class="svg svg--balloon">
      <use xlink:href="../images/svg/sprite.svg#balloon" />
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
  computed: {
    favProducts() {
      return this.$store.getters.getFavProducts;
    },
    favouriteList() {
      return this.$store.getters.getFavList;
    },
  },
  methods: {
    removeFromFavourites(prodId) {
      const index = this.favouriteList.findIndex((favId) => favId === prodId);
      this.favouriteList.splice(index, 1);
      this.$store.dispatch("toggleMyFavourite", this.favouriteList);
    },
    addToCart(prodId) {
      const product = this.favProducts.find((product) => product.id === prodId);
      const price = product.price - (product.price * product.discount) / 100;
      const cart = {
        id: product.id,
        name: product.name,
        urlPotser: product.urlPotser,
        price: price,
        count: 1,
      };
      this.$store.dispatch("addToCart", cart);
      this.removeFromFavourites(prodId);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.page {
  min-height: calc(100vh - 110px - 84px - 83px);
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
  margin-bottom: 2px;
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
.btn-container {
  margin-top: 25px;
}
.btn {
  display: inline-block;
  vertical-align: middle;

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
    margin-right: 10px;
  }
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
    animation: svgShow 15s linear 1s infinite alternate;
  }
  &--balloon {
    left: 0;
    bottom: -80px;
    stroke: $colorTextMain;
    width: 184px;
    height: 360px;
    stroke-dasharray: 470;
    stroke-dashoffset: 480;
    animation: svgShow 10s linear 3s infinite alternate;
  }
}
@keyframes svgShow {
  to {
    stroke-dashoffset: 0;
  }
}
</style>