<template>
  <div id="app" :class="{ 'app-overflow': overflow }">
    <Nav />
    <router-view />
    <template v-if="error">
      <div class="error-window">
        {{ error }}
        <button type="button" class="btn-remove" @click="closeError">
          <svg class="svg-remove">
            <use xlink:href="./images/svg/sprite.svg#remove" />
          </svg>
        </button>
      </div>
    </template>
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/nav";
import Footer from "./components/footer";

export default {
  components: { Nav, Footer },
  computed: {
    error() {
      return this.$store.getters.getError;
    },
    overflow() {
      return this.$store.getters.getOverflow;
    },
  },
  methods: {
    closeError() {
      this.$store.dispatch("clearError");
    },
  },
  async created() {
    await this.$store.dispatch("fetchAllProducts");
    this.$store.dispatch("getMyFavourites");
  },
};
</script>
<style lang="scss">
@import "./scss/style.scss";

#app {
  position: relative;
  overflow: hidden;
  overflow-anchor: none;
}
.app-overflow {
  height: 100vh;
}
.error-window {
  position: fixed;
  left: 20px;
  bottom: 20px;
  max-width: 500px;
  padding: 20px 25px 20px 20px;
  background-color: lighten($colorImportant, 5);
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  line-height: 24px;
  color: $colorBackground;
  box-sizing: border-box;
}
.btn-remove {
  position: absolute;
  top: 5px;
  right: 5px;
  display: block;
  border: none;
  padding: 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  & .svg-remove {
    width: 18px;
    height: 18px;
    stroke: $colorBackground;
  }
  &:hover,
  &:focus {
    & .svg-remove {
      stroke: $colorTextSecondary;
    }
  }
}
</style>
