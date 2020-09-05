<template>
  <div class="modal">
    <div class="modal-body">
      <button type="button" class="btn-remove" @click="closeModal">
        <svg class="svg-remove">
          <use xlink:href="../images/svg/sprite.svg#remove" />
        </svg>
      </button>
      <h1 class="caption">Корзина</h1>
      <div class="cart-products">
        <ul class="cart">
          <li class="cart__item" v-for="item in cartList" :key="item.id">
            <div class="photo-block">
              <img
                class="photo"
                :src="require('../images/products/' + item.id + '/poster.jpg')"
                :alt="item.name"
              />
            </div>
            <div class="controls">
              <h3 class="name">{{item.name}}</h3>
              <div class="counter">
                <button
                  type="button"
                  class="counter__btn"
                  @click="item.count--"
                  :disabled="item.count === 1"
                >-</button>
                <span class="counter__number">{{item.count}}</span>
                <button
                  type="button"
                  class="counter__btn"
                  @click="item.count++"
                  :disabled="item.count >= 5"
                >+</button>
              </div>
              <button type="button" class="remove-item" @click="removeFromCart(item.id)">Удалить</button>
            </div>
            <div class="summ">{{item.price * item.count}} $</div>
          </li>
        </ul>
        <div class="total">
          <span class="total__name">Общая стоимость</span>
          <span class="total__amount">{{amount}} $</span>
        </div>
      </div>
      <div class="buttons">
        <button
          type="button"
          class="btn btn--width btn--transparent"
          @click="toShop"
        >Продолжить покупки</button>
        <button type="button" class="btn btn--width btn--color" @click="toOrder">Оформить заказ</button>
      </div>

      <svg class="svg svg--hands">
        <use xlink:href="../images/svg/sprite.svg#hands" />
      </svg>
      <svg class="svg svg--fox">
        <use xlink:href="../images/svg/sprite.svg#fox" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartList() {
      return this.$store.getters.getCartList;
    },
    amount() {
      return this.cartList.reduce(
        (total, item) => total + item.price * item.count,
        0
      );
    },
  },
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
    toOrder() {
      if (this.$route.path !== "/order") {
        this.$router.push("/order");
      }
      this.closeModal();
    },
    removeFromCart(prodId) {
      console.log(this.cartList);
      this.$store.dispatch("removeFromCart", prodId);
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
  width: 1000px;
  min-height: 194px;
  background-color: $colorBrend;
  box-sizing: border-box;
  overflow: hidden;

  .caption {
    font-family: "Montserrat", sans-serif;
    font-size: 36px;
    font-weight: 500;
    color: $colorBackground;
    text-align: center;
    padding: 0 50px;
    margin: 50px 0;
  }
  .cart-products {
    max-height: 480px;
    padding: 50px 40px 20px 50px;
    border-top: 2px solid $colorBackground;
    border-bottom: 2px solid $colorBackground;
    overflow-y: auto;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
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
.cart {
  list-style: none;
  padding: 0;
  margin: 0;

  &__item {
    display: flex;
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 35px;
    }
  }
}
.photo-block {
  display: flex;
  align-items: center;
  width: 105px;
  height: 105px;
  overflow: hidden;
  margin-right: 30px;

  & .photo {
    display: block;
    width: 100%;
  }
}
.controls {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: $colorBackground;
}
.name {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 29px;
  color: inherit;
}
.counter {
  display: flex;
  align-items: center;

  &__btn {
    width: 19px;
    line-height: 16px;
    background-color: transparent;
    border: 1px solid;
    padding: 0;
    outline: none;
    cursor: pointer;

    &:hover,
    &:focus {
      border-color: $colorTextMain;
      color: $colorTextMain;
    }
    &:disabled {
      border-color: $colorTextSecondary;
      color: $colorTextSecondary;
      cursor: default;
    }
  }
  &__btn,
  &__number {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    color: inherit;
    text-align: center;
  }
  &__number {
    margin: 0 12px;
    width: 15px;
  }
}
.remove-item {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: inherit;
  background-color: transparent;
  padding: 0;
  border: none;
  border-bottom: 1px solid transparent;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    border-bottom-color: $colorBackground;
  }
}
.summ {
  min-width: 15%;
  align-self: center;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: $colorBackground;
}
/* .text {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    color: $colorBackground;
    text-align: center;
    max-width: 400px;
    margin: 30px auto;
  } */
.total {
  display: flex;
  align-items: flex-end;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: $colorBackground;

  &__name {
    font-size: 18px;
    flex-grow: 1;
  }
  &__amount {
    font-size: 22px;
    min-width: 15%;
  }
}
.svg {
  position: absolute;
  z-index: -1;

  &--hands {
    top: -25px;
    right: 0;
    stroke: $colorBackground;
    width: 539px;
    height: 221px;
    stroke-dasharray: 1500;
    stroke-dashoffset: 1600;
    animation: svgShow 20s linear 2s infinite alternate;
  }
  &--fox {
    left: 250px;
    bottom: -10px;
    stroke: $colorBackground;
    width: 103px;
    height: 108px;
    stroke-dasharray: 90;
    stroke-dashoffset: 100;
    animation: svgShow 5s linear 4s infinite alternate;
  }
}
.btn {
  margin: 50px;

  &--transparent {
    line-height: 1;
    border: 1px solid $colorBackground;

    &:not(:disabled):hover,
    &:not(:disabled):focus {
      box-shadow: 0 0 20px $colorBackground;
    }
    &:disabled {
      background-color: darken($colorBackground, 20);
    }
  }
}
@keyframes svgShow {
  to {
    stroke-dashoffset: 0;
  }
}
</style>