<template>
  <div class="modal">
    <div class="modal-body">
      <router-link to="/shop" tag="a" class="btn-remove">
        <svg class="svg-remove">
          <use xlink:href="../images/svg/sprite.svg#remove" />
        </svg>
      </router-link>
      <div class="text">{{text}}</div>
      <router-link to="/shop" tag="a" class="btn btn--width">Вернуться в магазин</router-link>
      <svg class="svg svg--deer">
        <use xlink:href="../images/svg/sprite.svg#deer" />
      </svg>
      <svg class="svg svg--owl">
        <use xlink:href="../images/svg/sprite.svg#owl" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.modal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-body {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  min-height: 194px;
  background-color: $colorBrend;
  text-align: center;
  padding: 20px 45px;
  box-sizing: border-box;
  overflow: hidden;

  .text {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    color: $colorBackground;
    text-align: center;
    max-width: 400px;
    margin: 30px auto;
  }
  .btn-remove {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
    outline: none;

    & .svg-remove {
      width: 18px;
      height: 18px;
      stroke: $colorBackground;
    }
    &:hover,
    &:focus {
      & .svg-remove {
        stroke: $colorImportant;
      }
    }
  }
}
.svg {
  position: absolute;
  z-index: -1;

  &--deer {
    top: 8px;
    left: 12px;
    stroke: $colorBackground;
    width: 109px;
    height: 127px;
    stroke-dasharray: 45;
    stroke-dashoffset: 50;
    animation: svgShow 5s linear 1s infinite alternate;
  }
  &--owl {
    right: 0;
    bottom: 0;
    stroke: $colorBackground;
    width: 70px;
    height: 86px;
    stroke-dasharray: 120;
    stroke-dashoffset: 130;
    animation: svgShow 5s linear 2s infinite alternate;
  }
}
.btn {
  color: $colorTextMain;
  background-color: $colorBackground;
  margin: 0 auto 10px auto;

  &:hover,
  &:focus {
    box-shadow: 0 0 25px $colorBackground;
  }
}
@keyframes svgShow {
  to {
    stroke-dashoffset: 0;
  }
}
</style>