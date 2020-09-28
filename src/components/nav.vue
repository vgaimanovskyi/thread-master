<template>
  <header class="header">
    <router-link to="/" class="logo header--width">Thread Master</router-link>
    <ul class="nav">
      <router-link to="/" tag="li" exact active-class="active">
        <a href="#">Главная</a>
      </router-link>
      <router-link to="/gallery" tag="li" exact active-class="active">
        <a href="#">Галерея</a>
      </router-link>
      <router-link to="/shop" tag="li" exact active-class="active">
        <a href="#">Магазин</a>
      </router-link>
      <router-link to="/contacts" tag="li" exact active-class="active">
        <a href="#">Контакты</a>
      </router-link>
      <router-link to="/delivery" tag="li" exact active-class="active">
        <a href="#">Оплата и Доставка</a>
      </router-link>
    </ul>
    <ul class="options header--width">
      <!-- <li>
        <div class="filter">
          <div class="filter__name">
            {{ filterName }}
            <svg
              class="filter__svg"
              :class="{ 'filter__svg--rotate': filterListOpen }"
            >
              <use xlink:href="../images/svg/sprite.svg#arrowSelect" />
            </svg>
          </div>
          <div class="filter__list" v-show="filterListOpen">
            <input
              type="radio"
              value="ru"
              id="ru"
              v-model="filterValue"
              @change="useFilter"
            />
            <label for="ru">Русский</label>
            <input
              type="radio"
              value="ua"
              id="ua"
              v-model="filterValue"
              @change="useFilter"
            />
            <label for="ua">Українська</label>
            <input
              type="radio"
              value="en"
              id="en"
              v-model="filterValue"
              @change="useFilter"
            />
            <label for="en">English</label>
          </div>
        </div>
      </li> -->
      <li>
        <button type="button" class="options-icons" @click="favModalOpen">
          <svg class="svg svg--favourite">
            <use xlink:href="../images/svg/sprite.svg#heart" />
          </svg>
          <span class="options-icons__number" v-if="favouriteList.length">{{
            favouriteList.length
          }}</span>
        </button>
      </li>
      <li>
        <form class="search" @submit.prevent="useSearch">
          <input
            type="search"
            class="search__input"
            placeholder="Поиск"
            minlength="3"
            v-model="search"
          />
          <button type="submit" class="search__btn">
            <svg class="svg svg--search">
              <use xlink:href="../images/svg/sprite.svg#search" />
            </svg>
          </button>
        </form>
      </li>
      <li>
        <button type="button" class="options-icons" @click="cartModalOpen">
          <svg class="svg svg--cart">
            <use xlink:href="../images/svg/sprite.svg#cart" />
          </svg>
          <span class="options-icons__number" v-if="cartList.length">{{
            cartList.length
          }}</span>
        </button>
      </li>
    </ul>
    <noData
      v-if="noFavData"
      @closeModal="noFavData = false"
      :text="'В данный момент в избранном ничего нет'"
    />
    <noData
      v-if="noCartData"
      @closeModal="noCartData = false"
      :text="'Ваша корзина на данный момент пуста'"
    />
    <Cart v-if="cart" @closeModal="cart = false" />
  </header>
</template>

<script>
import noData from "../components/noData";
import Cart from "../components/cart";

export default {
  components: { noData, Cart },
  data() {
    return {
      filterName: "Русский",
      filterValue: "ru",
      filterListOpen: false,
      noCartData: false,
      noFavData: false,
      cart: false,
      search: "",
    };
  },
  computed: {
    favouriteList() {
      return this.$store.getters.getFavList;
    },
    cartList() {
      return this.$store.getters.getCartList;
    },
  },
  methods: {
    useFilter() {
      switch (this.filterValue) {
        case "ru":
          this.filterName = "Русский";
          break;
        case "ua":
          this.filterName = "Українська";
          break;
        case "en":
          this.filterName = "English";
          break;
        default:
          this.filterName = "Русский";
      }
      this.filterListOpen = false;
    },
    useSearch() {
      console.log(this.search);
      if (this.search.length >= 3) {
        this.$store.dispatch("useSearch", this.search);

        if (this.$route.path !== "/search") {
          this.$router.push("/search");
        }
      }
    },
    cartModalOpen() {
      if (this.cartList.length) {
        this.cart = true;
      } else {
        this.noCartData = true;
      }
    },
    favModalOpen() {
      if (this.favouriteList.length) {
        if (this.$route.path !== "/favourites") {
          this.$router.push("/favourites");
        }
      } else {
        this.noFavData = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

%navhover {
  color: $colorBrend;

  &::before {
    width: 100%;
  }
}

.header {
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  &--width {
    width: 25%;
  }
}
.logo {
  font-family: "Rubik", sans-serif;
  font-size: 20px;
  color: $colorBrend;
  text-decoration: none;
}
.nav {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  display: flex;
  justify-content: center;

  & li {
    margin: 0 20px;

    & a {
      font-family: "Open Sans", sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: $colorTextSecondary;
      position: relative;
      text-decoration: none;
      transition-duration: 0.3s;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        height: 1px;
        width: 0;
        background-color: $colorBrend;
        transition-duration: 0.3s;
      }
      &:hover,
      &:focus {
        @extend %navhover;
      }
    }
    &.active {
      & a {
        @extend %navhover;
      }
    }
  }
}
.filter {
  position: relative;

  &__name,
  label {
    position: relative;
    display: block;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 35px;
    color: $colorTextSecondary;
    padding: 0 30px 0 10px;
    cursor: pointer;
  }
  &__name {
    line-height: 24px;
    cursor: default;
  }
  &__svg {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%) rotateX(180deg);
    width: 15px;
    height: 8px;
    stroke: $colorTextMain;
    transition-duration: 0.3s;

    &--rotate {
      transform: translateY(-50%);
    }
  }
  &__list {
    position: absolute;
    top: 100%;

    & input[type="radio"] {
      position: absolute;
      opacity: 0;

      &:hover + label,
      &:focus + label,
      &:checked + label {
        color: $colorBackground;
        background-color: $colorBrend;
      }
    }
  }
}
.options {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & li {
    margin-right: 25px;

    &:last-child {
      margin-right: 0;
    }
  }
}
.options-icons {
  display: block;
  outline: none;
  border: none;
  padding: 0;
  background-color: transparent;
  position: relative;
  cursor: pointer;

  &__number {
    position: absolute;
    top: -8px;
    right: -5px;
    font-family: "Open Sans", sans-serif;
    font-size: 10px;
    color: $colorTextMain;
    text-align: center;
    background-color: $colorImportant;
    width: 14px;
    height: 14px;
    border-radius: 50%;
  }
}
.svg {
  display: block;
  fill: $colorTextSecondary;
  transition-duration: 0.3s;

  &--favourite {
    width: 21px;
    height: 19px;
    fill: transparent;
    stroke: $colorTextSecondary;
  }
  &--search {
    width: 19px;
    height: 19px;
    transition-duration: 0.3s;
  }
  &--cart {
    width: 18px;
    height: 19px;
    fill: none;
    stroke: $colorTextSecondary;
  }
}
.search {
  position: relative;
  text-align: right;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 1px;
    width: 100%;
    background-color: transparent;
    transition-duration: 0.3s;
  }
  &__input {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    color: $colorTextSecondary;
    width: 0;
    background-color: transparent;
    border: none;
    transition-duration: 0.3s;
  }
  &__btn {
    padding: 0;
    vertical-align: middle;
    background-color: transparent;
    border: none;
    outline: none;
  }
}
.search:hover,
.search:focus {
  &::before {
    background-color: $colorTextSecondary;
  }
  .search__input {
    width: calc(100% - 22px);
  }
  .search__btn {
    cursor: pointer;

    & .svg {
      transform: rotate(90deg);
    }
  }
}
</style>