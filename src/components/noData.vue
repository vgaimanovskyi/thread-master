<template>
  <div class="modal">
    <div class="modal-body">
      <button type="button" class="btn-remove" @click="closeModal">
        <svg class="svg-remove">
          <use xlink:href="../images/svg/sprite.svg#remove" />
        </svg>
      </button>
      <div class="text">{{text}}</div>
      <button type="button" class="btn btn--width" @click="toShop">Вернуться в магазин</button>
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
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    toShop() {
      if (this.$route.path !== "/shop") {
        this.$router.push("/shop");
      }
      this.closeModal();
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
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
    border: none;
    padding: 0;
    background-color: transparent;
    top: 15px;
    right: 15px;
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

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    box-shadow: 0 0 15px $colorBackground;
  }
}
@keyframes svgShow {
  to {
    stroke-dashoffset: 0;
  }
}
</style>