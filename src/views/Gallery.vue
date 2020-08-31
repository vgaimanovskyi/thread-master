<template>
  <div class="page">
    <Modal v-if="modal" @closeModal="modal = !modal" :product="product" />
    <div class="mainer">
      <ul class="categories">
        <li
          class="categories__block"
          :class="{'categories__block--active': activeCatId === category.id}"
          v-for="category in categories"
          :key="category.id"
          @click="changeCategory(category.id)"
        >{{category.name}}</li>
      </ul>
      <stack
        class="stack"
        style="transition: height 0.5s"
        :column-min-width="320"
        :gutter-width="20"
        :gutter-height="20"
        monitor-images-loaded
      >
        <div class="grid">
          <stack-item
            class="stack__item"
            style="transition: transform 1s"
            v-for="img in products"
            :key="img.id"
          >
            <img
              class="gallery-img"
              :src="require('../images/products/' + img.id + '/poster.jpg')"
              :title="img.name"
              :alt="img.name"
              @click="openModal(img.id)"
            />
          </stack-item>
        </div>
      </stack>
      <button
        type="button"
        class="btn btn--width"
        @click="morePhotos()"
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
import { Stack, StackItem } from "vue-stack-grid";
import Aside from "../components/aside";
import Modal from "../components/modal";

export default {
  components: { Stack, StackItem, Aside, Modal },
  data() {
    return {
      products: [],
      activeCatId: "",
      modal: false,
      product: {},
      btnDisabled: false,
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
  methods: {
    /* imageProgress(instance, image) {
      const result = image.isLoaded ? "loaded" : "broken";
      console.log("image is " + result + " for " + image.img.src);
    }, */
    changeCategory(catId) {
      this.btnDisabled = false;
      this.activeCatId = catId;
      this.$store.commit("productsByCategory", this.activeCatId);
      this.getProducts();
    },
    getProducts() {
      this.products = this.$store.getters.sliceProducts(0);
    },
    morePhotos() {
      const oldProducts = this.products;
      const newProducts = this.$store.getters.sliceProducts(oldProducts.length);
      this.products = oldProducts.concat(newProducts);
      this.btnDisabled = this.products.length === oldProducts.length;
    },
    openModal(mId) {
      this.product = this.products.find((product) => product.id === mId);
      this.modal = true;
    },
  },
  created() {
    this.changeCategory(this.categories[0].id);
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.page {
  min-height: calc(100vh - 110px - 84px - 83px);
}
.stack {
  margin-bottom: 50px;
}
.categories {
  list-style: none;
  padding: 0;
  margin: 0 0 90px 0;
  display: flex;
  justify-content: center;

  &__block {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    color: $colorTextMain;
    margin: 0 8px;
    cursor: pointer;

    &::first-letter {
      text-transform: uppercase;
    }
    &--active {
      color: $colorBrend;
    }
  }
}
.gallery-img {
  width: 100%;
  display: block;
  border-radius: 8px;
  cursor: pointer;
}
.btn {
  margin: 0 auto;
}
.svg {
  position: absolute;
  z-index: -1;

  &--turtle {
    top: 168px;
    left: 108px;
    stroke: $colorTextMain;
    width: 379px;
    height: 198px;
    stroke-dasharray: 600;
    stroke-dashoffset: 620;
    animation: svgShow 15s linear 2s infinite alternate;
  }
  &--bgheart {
    left: 62px;
    bottom: 32px;
    stroke: $colorTextMain;
    width: 231px;
    height: 237px;
    stroke-dasharray: 140;
    stroke-dashoffset: 160;
    animation: svgShow 10s linear 4s infinite alternate;
  }
  &--pineapple {
    right: -28px;
    bottom: 190px;
    stroke: $colorTextMain;
    width: 126px;
    height: 272px;
    stroke-dasharray: 400;
    stroke-dashoffset: 420;
    animation: svgShow 10s linear 6s infinite alternate;
  }
}
@keyframes svgShow {
  to {
    stroke-dashoffset: 0;
  }
}
</style>