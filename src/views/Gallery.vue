<template>
  <div
    class="page"
    :style="{ height: modalHeight, 'overflow-y': 'hidden' }"
    v-if="!loading"
  >
    <router-view @modalHeight="changeHeight($event)"></router-view>
    <Video v-if="video" :product="product" @closeModal="video = !video" />
    <div class="mainer">
      <ul class="categories">
        <li
          class="categories__block"
          :class="{ 'categories__block--active': activeCatId === category.id }"
          v-for="category in categories"
          :key="category.id"
          @click="changeCategory(category.id)"
        >
          {{ category.name }}
        </li>
      </ul>
      <stack
        class="stack"
        :column-min-width="stackWidth"
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
            <div class="video-block" v-if="img.catId[1] === '09'">
              <div
                class="video-block__btn"
                :class="{ 'video-block__btn--animate': !ie }"
                @click="openVideo(img.id)"
              >
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="0,0 20,10 0,20"></polygon>
                </svg>
              </div>
              <img
                class="gallery-img"
                :src="
                  'https://img.youtube.com/vi/' + img.video + '/mqdefault.jpg'
                "
                :alt="img.name"
                @click="openVideo(img.id)"
              />
            </div>
            <img
              v-else
              class="gallery-img"
              :src="img.urlPoster"
              :alt="img.name"
              @click="openModal(img.id)"
            />
          </stack-item>
        </div>
      </stack>
      <button
        type="button"
        class="btn btn--width"
        ref="morePhotosBtn"
        @click="morePhotos()"
        :disabled="btnDisabled"
      >
        Смотреть еще
      </button>
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
  <div v-else class="page page--center">
    <Loader />
  </div>
</template>

<script>
import { Stack, StackItem } from "vue-stack-grid";
import Aside from "../components/aside";
import Video from "../components/video";
import Loader from "../components/loader";

export default {
  components: { Stack, StackItem, Aside, Video, Loader },
  metaInfo: {
    title: "Галерея",
  },
  data() {
    return {
      products: [],
      activeCatId: "",
      video: false,
      product: {},
      btnDisabled: false,
      modalHeight: "auto",
    };
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    },
    loading() {
      return this.$store.getters.getLoading;
    },
    stackWidth() {
      if (window.innerWidth < 700 && window.innerWidth >= 480) {
        return 210;
      }
      if (window.innerWidth < 480) {
        return 150;
      }
      return 310;
    },
    ie() {
      return !!window.MSInputMethodContext && !!document.documentMode;
    },
  },
  methods: {
    async changeCategory(catId) {
      this.btnDisabled = false;
      this.activeCatId = catId;
      this.$store.dispatch("getProductsByCategory", this.activeCatId);
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
      this.$refs["morePhotosBtn"].blur();
    },
    openModal(mId) {
      this.$router.push("/gallery/" + mId);
    },
    openVideo(mId) {
      this.product = this.products.find((product) => product.id === mId);
      this.video = true;
    },
    changeHeight(heigth) {
      if (heigth === "auto") {
        this.modalHeight = heigth;
      } else {
        this.modalHeight = heigth + "px";
      }
    },
  },
  async created() {
    await this.$store.dispatch("fetchAllVideos");
    this.changeCategory(this.categories[0].id);
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.page {
  min-height: calc(100vh - 110px - 85px - 83px);

  @media screen and (max-width: 991px) {
    min-height: calc(100vh - 20px - 85px - 83px);
  }
  @media screen and (max-width: 767px) {
    min-height: calc(100vh - 20px - 65px - 53px);
  }
}
.stack {
  transition: height 0.5s;
  margin-bottom: 50px;
}
.categories {
  list-style: none;
  padding: 0;
  margin-bottom: 90px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 991px) {
    justify-content: flex-start;
    margin-bottom: 40px;
    overflow-y: scroll;
  }
  &__block {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    color: $colorTextMain;
    margin: 0 8px;
    white-space: nowrap;
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
.video-block {
  position: relative;

  &__btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: linear-gradient(#ff0000, #900606);
    width: 85px;
    height: 55px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & svg {
      display: block;
      width: 20px;
      height: 20px;
      fill: #fff;
    }
  }
  &:hover {
    .video-block__btn--animate {
      animation: youtubeBtn 0.7s linear infinite;
    }
  }
}
.btn {
  margin: 0 auto 70px auto;
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

    @media screen and (max-width: 1100px) {
      top: 100px;
      left: auto;
      right: 10px;
    }
    @media screen and (max-width: 767px) {
      top: 60px;
      width: 178px;
      height: 93px;
    }
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

    @media screen and (max-width: 767px) {
      width: 150px;
      height: 150px;
    }
    @media screen and (max-width: 575px) {
      left: 0;
      bottom: 0;
      width: 90px;
      height: 90px;
    }
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

    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
}
@keyframes svgShow {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes youtubeBtn {
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }
  25% {
    transform: translate(-50%, -50%) rotate(15deg);
  }
  50% {
    transform: translate(-50%, -50%) rotate(0);
  }
  75% {
    transform: translate(-50%, -50%) rotate(-15deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(0);
  }
}
</style>