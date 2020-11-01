<template>
  <div class="modal" @click.self="toShop">
    <div class="modal-body">
      <button type="button" class="btn-remove" @click="toShop">
        <svg v-if="!ie" class="svg-remove">
          <use xlink:href="../images/svg/sprite.svg#remove" />
        </svg>
        <img
          v-else
          class="svg-remove"
          src="../images/png/removeModal.png"
          alt="remove"
        />
      </button>
      <div class="text">
        <h2 class="text__caption">Статус заказа</h2>
        Ваш заказ успешно создан. <br />
        Скоро наш менеджер свяжется с вами для подтверждения заказа.
      </div>
      <button type="button" class="btn btn--width" @click="toShop">
        Вернуться в магазин
      </button>
      <svg class="svg svg--crab">
        <use xlink:href="../images/svg/sprite.svg#crab" />
      </svg>
      <svg class="svg svg--owl">
        <use xlink:href="../images/svg/sprite.svg#owl" />
      </svg>
    </div>
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
    toShop() {
      this.$router.push("/shop");
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
  max-width: 700px;
  width: 100%;
  min-height: 194px;
  background-color: $colorBrend;
  text-align: center;
  padding: 20px 30px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 575px) {
    max-width: 375px;
    height: 100%;
    padding: 20px 35px;
  }
  .text {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    line-height: 32px;
    color: $colorBackground;
    text-align: center;
    margin-bottom: 30px;
    width: 100%;

    &__caption {
      font-family: inherit;
      font-size: 24px;
      font-weight: 500;
      color: inherit;
      margin: 10px 0 30px 0;
    }
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

  &--crab {
    top: 8px;
    right: 12px;
    stroke: $colorBackground;
    width: 168px;
    height: 117px;
    stroke-dasharray: 170;
    stroke-dashoffset: 180;
    animation: svgShow 5s linear 1s infinite alternate;
  }
  &--owl {
    left: 0;
    bottom: 0;
    transform: scaleX(-1);
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
  &:active {
    background-color: lighten($colorBackground, 5);
  }
}
@keyframes svgShow {
  to {
    stroke-dashoffset: 0;
  }
}
</style>