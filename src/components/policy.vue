<template>
  <div class="modal" @click.self="closeModal">
    <div class="modal-body">
      <button type="button" class="btn-remove" @click="closeModal">
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
        <h2 class="text__caption">Политика конфиденциальности</h2>
        Мы серьезно относимся к вашей конфиденциальности и принимаем все меры
        для защиты вашей личной информации. <br />
        Любая полученная личная информация будет использоваться только для
        выполнения вашего заказа. Мы не будем продавать или распространять вашу
        информацию третьим лицам.
      </div>
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
  computed: {
    ie() {
      return !!window.MSInputMethodContext && !!document.documentMode;
    },
  },
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}
.modal-body {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 992px;
  width: 100%;
  min-height: 194px;
  background-color: $colorBrend;
  padding: 20px 45px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    padding: 20px;
  }
  @media screen and (max-width: 575px) {
    max-width: 375px;
    height: 100%;
  }
  .text {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    line-height: 21px;
    color: $colorBackground;
    width: 100%;

    @media screen and (max-width: 575px) {
      font-size: 14px;
    }
    &__caption {
      font-family: inherit;
      font-size: 24px;
      font-weight: 500;
      color: inherit;
      text-align: center;
      margin: 10px 0 30px 0;

      @media screen and (max-width: 575px) {
        font-size: 20px;
      }
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

    @media screen and (max-width: 575px) {
      top: 25px;
      right: 20px;
    }
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
    width: 77px;
    height: 90px;
    stroke-dasharray: 45;
    stroke-dashoffset: 50;
    animation: svgShow 5s linear 1s infinite alternate;

    @media screen and (max-width: 575px) {
      width: 109px;
      height: 127px;
    }
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

@keyframes svgShow {
  to {
    stroke-dashoffset: 0;
  }
}
</style>