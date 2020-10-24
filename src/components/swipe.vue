<template>
  <div class="modal" v-touch:swipe.right="closeModal">
    <svg class="logo-svg">
      <use xlink:href="../images/svg/sprite.svg#logo" />
    </svg>
    <div class="swipe-block">
      <svg
        class="swipe-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="138"
        height="50"
        viewBox="0 0 138 50"
        fill="none"
      >
        <path class="swipe-svg__path" d="M113 5L133 25L113 45" />
        <path class="swipe-svg__path" d="M86 5L106 25L86 45" />
        <path class="swipe-svg__path" d="M59 5L79 25L59 45" />
        <path class="swipe-svg__path" d="M32 5L52 25L32 45" />
        <path class="swipe-svg__path" d="M5 5L25 25L5 45" />
      </svg>
      <ul class="swipe-text">
        <li class="swipe-text__item">s</li>
        <li class="swipe-text__item">w</li>
        <li class="swipe-text__item">i</li>
        <li class="swipe-text__item">p</li>
        <li class="swipe-text__item">e</li>
      </ul>
      <ul class="swipe-text">
        <li class="swipe-text__item">r</li>
        <li class="swipe-text__item">i</li>
        <li class="swipe-text__item">g</li>
        <li class="swipe-text__item">h</li>
        <li class="swipe-text__item">t</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: $colorBackground;
  z-index: 9999;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logo-svg {
  width: 100%;
  height: 100%;
  stroke-dasharray: 100;
  animation: logoAnimate 30s linear infinite;
  margin: 50px;
}
.swipe-block {
  display: flex;
  flex-wrap: wrap;
  width: 242px;
  margin-bottom: 30px;

  & .swipe-svg {
    display: block;
    flex-grow: 1;
    margin-bottom: 8px;

    &__path {
      stroke: $colorTextMain;
      stroke-opacity: 0.5;
      stroke-width: 10px;
      stroke-linecap: round;
      stroke-linejoin: round;
      animation: swipe 1s ease-in-out infinite alternate;

      &:nth-child(2) {
        animation-delay: 0.8s;
      }
      &:nth-child(3) {
        animation-delay: 0.6s;
      }
      &:nth-child(4) {
        animation-delay: 0.4s;
      }
      &:nth-child(5) {
        animation-delay: 0.2s;
      }
    }
  }
  & .swipe-text {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 50%;
    text-align: center;

    &__item {
      display: inline;
      font-family: "Rubik Mono One", sans-serif;
      font-size: 20px;
      line-height: 25px;
      color: $colorTextMain;
      text-transform: uppercase;
      opacity: 0.5;
      animation: swipe 1s ease-in-out infinite alternate;

      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      &:nth-child(3) {
        animation-delay: 0.4s;
      }
      &:nth-child(4) {
        animation-delay: 0.6s;
      }
      &:nth-child(5) {
        animation-delay: 0.8s;
      }
    }
  }
}
@keyframes logoAnimate {
  to {
    stroke-dashoffset: 1000;
  }
}
@keyframes swipe {
  0% {
    opacity: 1;
    stroke-opacity: 1;
  }
  75% {
    opacity: 0.5;
    stroke-opacity: 0.5;
  }
  100% {
    opacity: 0.5;
    stroke-opacity: 0.5;
  }
}
</style>