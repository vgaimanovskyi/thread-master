<template>
  <div class="aside-btn">
    <button type="button" @click="scrollTop" class="btn" ref="asideBtn">
      <svg v-if="!ie" class="svg-btn">
        <use xlink:href="../images/svg/sprite.svg#arrowTop" />
      </svg>
      <img
        v-else
        class="svg-btn"
        src="../images/png/arrowTop.png"
        alt="arrowTop"
      />
    </button>
    <router-link to="/contacts" tag="a" class="btn btn--toContacts"
      >Напишите нам, мы онлайн!</router-link
    >
  </div>
</template>

<script>
export default {
  computed: {
    ie() {
      return !!window.MSInputMethodContext && !!document.documentMode;
    },
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      this.$refs["asideBtn"].blur();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.aside-btn {
  position: fixed;
  right: 5px;
  bottom: 350px;
  transform: rotate(-90deg);
  transform-origin: 80% 50%;

  @media screen and (max-width: 1359px) {
    right: -26px;
  }
  @media screen and (max-width: 575px) {
    right: 15px;
    bottom: 135px;
  }
  & .btn {
    display: inline-block;
    width: 40px;
    height: 40px;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: $colorBackground;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
    padding: 2px;
    box-sizing: border-box;
    background-color: $colorBrend;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;

    &--toContacts {
      width: 240px;
      border-radius: 8px 31px 0 0;
      margin-left: 50px;

      @media screen and (max-width: 575px) {
        display: none;
      }
    }
    & .svg-btn {
      width: 12px;
      height: 18px;
      transform: translateY(3px) rotate(90deg);
    }
    &:hover,
    &:focus {
      box-shadow: 0 0 25px $colorBrend;
    }
    &:active {
      background-color: darken($colorBrend, 10);
    }
  }
}
</style>