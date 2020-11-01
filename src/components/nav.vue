<template>
  <header class="header">
    <div class="hamburger" @click="toggleMobMenu">
      <div
        class="hamburger__line"
        :class="{ 'hamburger__line--open': burgerOpen }"
      ></div>
      <div
        class="hamburger__line"
        :class="{ 'hamburger__line--open': burgerOpen }"
      ></div>
      <div
        class="hamburger__line"
        :class="{ 'hamburger__line--open': burgerOpen }"
      ></div>
    </div>
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
      <li class="options-favourite">
        <button type="button" class="options-icons" @click="favModalOpen">
          <svg v-if="!ie" class="svg-nav svg-nav--favourite">
            <use xlink:href="../images/svg/sprite.svg#heart" />
          </svg>
          <img
            v-else
            class="svg-nav svg-nav--favourite"
            src="../images/png/heart.png"
            alt="favourite"
          />
          <span class="options-icons__number" v-if="favouriteList.length">{{
            favouriteList.length
          }}</span>
        </button>
      </li>
      <li class="options-search">
        <form class="search" @submit.prevent="useSearch">
          <input
            type="search"
            class="search__input"
            placeholder="Поиск"
            minlength="3"
            v-model="search"
          />
          <button type="submit" class="search__btn">
            <svg v-if="!ie" class="svg-nav svg-nav--search">
              <use xlink:href="../images/svg/sprite.svg#search" />
            </svg>
            <img
              v-else
              class="svg-nav svg-nav--search"
              src="../images/png/search.png"
              alt="search"
            />
          </button>
        </form>
      </li>
      <li class="options-cart">
        <button type="button" class="options-icons" @click="cartModalOpen">
          <svg v-if="!ie" class="svg-nav svg-nav--cart">
            <use xlink:href="../images/svg/sprite.svg#cart" />
          </svg>
          <img
            v-else
            class="svg-nav svg-nav--cart"
            src="../images/png/cart.png"
            alt="cart"
          />
          <span class="options-icons__number" v-if="cartList.length">{{
            cartList.length
          }}</span>
        </button>
      </li>
    </ul>
    <template v-if="burgerOpen">
      <div class="mobile" @click.self="searchOpen = false">
        <ul class="mobile-nav">
          <router-link
            to="/"
            tag="li"
            exact
            active-class="active"
            :class="{ hide: searchOpen }"
          >
            <svg v-if="!ie" class="svg-icon svg-icon--home">
              <use xlink:href="../images/svg/sprite.svg#home" />
            </svg>
            <img
              v-else
              class="svg-icon svg-icon--home"
              src="../images/png/home.png"
              alt="home"
            />
            <a @click="toggleMobMenu">Главная</a>
          </router-link>
          <router-link
            to="/gallery"
            tag="li"
            exact
            active-class="active"
            :class="{ hide: searchOpen }"
          >
            <svg v-if="!ie" class="svg-icon svg-icon--gallery">
              <use xlink:href="../images/svg/sprite.svg#gallery" />
            </svg>
            <img
              v-else
              class="svg-icon svg-icon--gallery"
              src="../images/png/gallery.png"
              alt="gallery"
            />
            <a @click="toggleMobMenu">Галерея</a>
          </router-link>
          <router-link to="/shop" tag="li" exact active-class="active">
            <svg v-if="!ie" class="svg-icon svg-icon--shop">
              <use xlink:href="../images/svg/sprite.svg#shop" />
            </svg>
            <img
              v-else
              class="svg-icon svg-icon--shop"
              src="../images/png/shop.png"
              alt="shop"
            />
            <a @click="toggleMobMenu">Магазин</a>
          </router-link>
          <router-link
            to="/contacts"
            tag="li"
            exact
            active-class="active"
            :class="{ hide: searchOpen }"
          >
            <svg v-if="!ie" class="svg-icon svg-icon--contacts">
              <use xlink:href="../images/svg/sprite.svg#contacts" />
            </svg>
            <img
              v-else
              class="svg-icon svg-icon--contacts"
              src="../images/png/contacts.png"
              alt="contacts"
            />
            <a @click="toggleMobMenu">Контакты</a>
          </router-link>
          <router-link
            to="/delivery"
            tag="li"
            exact
            active-class="active"
            :class="{ hide: searchOpen }"
          >
            <svg v-if="!ie" class="svg-icon svg-icon--delivery">
              <use xlink:href="../images/svg/sprite.svg#delivery" />
            </svg>
            <img
              v-else
              class="svg-icon svg-icon--delivery"
              src="../images/png/delivery.png"
              alt="delivery"
            />
            <a @click="toggleMobMenu">Оплата и Доставка</a>
          </router-link>
          <li :class="{ active: favActive, hide: searchOpen }">
            <div class="svg-container">
              <svg v-if="!ie" class="svg-icon svg-icon--favourite">
                <use xlink:href="../images/svg/sprite.svg#heart" />
              </svg>
              <img
                v-else
                class="svg-icon svg-icon--favourite"
                src="../images/png/heart.png"
                alt="favourite"
              />
              <span class="options-icons__number" v-if="favouriteList.length">
                {{ favouriteList.length }}
              </span>
            </div>
            <a @click="favModalOpen">Избранное</a>
          </li>
          <li>
            <svg v-if="!ie" class="svg-icon svg-icon--search">
              <use xlink:href="../images/svg/sprite.svg#search" />
            </svg>
            <img
              v-else
              class="svg-icon svg-icon--search"
              src="../images/png/search.png"
              alt="search"
            />
            <form
              class="mob-search"
              @submit.prevent="useSearch"
              v-if="searchOpen"
            >
              <input
                type="search"
                class="mob-search__input"
                placeholder="Поиск"
                minlength="3"
                v-model="search"
                ref="search-input"
              />
              <button type="submit" class="mob-search__btn">Искать</button>
            </form>
            <a @click="openSearch" v-show="!searchOpen">Поиск</a>
          </li>
        </ul>
        <svg class="svg svg--mountains">
          <use xlink:href="../images/svg/sprite.svg#mountains" />
        </svg>
        <svg class="svg svg--body">
          <use xlink:href="../images/svg/sprite.svg#body" />
        </svg>
        <Footer />
      </div>
    </template>
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
import Footer from "../components/footer";

export default {
  components: { noData, Cart, Footer },
  data() {
    return {
      filterName: "Русский",
      filterValue: "ru",
      filterListOpen: false,
      noCartData: false,
      noFavData: false,
      cart: false,
      search: "",
      burgerOpen: false,
      searchOpen: false,
    };
  },
  computed: {
    favouriteList() {
      return this.$store.getters.getFavList;
    },
    cartList() {
      return this.$store.getters.getCartList;
    },
    favActive() {
      return this.$route.path === "/favourites";
    },
    ie() {
      return !!window.MSInputMethodContext && !!document.documentMode;
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
        if (this.burgerOpen) {
          this.toggleMobMenu();
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
      if (this.burgerOpen) {
        this.toggleMobMenu();
      }
    },
    toggleMobMenu() {
      this.burgerOpen = !this.burgerOpen;
      this.searchOpen = false;
      this.$store.commit("PAGE_OVERFLOW", this.burgerOpen);
    },
    openSearch() {
      this.searchOpen = true;
      setTimeout(() => {
        this.$refs["search-input"].focus();
      }, 500);
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
    width: 20%;
  }
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
}
.hamburger {
  display: none;
  position: relative;
  width: 19px;
  height: 12px;

  @media screen and (max-width: 991px) {
    display: block;
  }
  &__line {
    position: absolute;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: $colorBrend;
    transition-duration: 0.3s;

    &:first-child {
      top: 0;
    }
    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
    }
    &:last-child {
      bottom: 0;
    }
    &--open {
      &:first-child {
        top: 50%;
        transform: translateY(-50%) rotate(-45deg);
      }
      &:nth-child(2) {
        transform: translate(-50%, -50%);
        opacity: 0;
      }
      &:last-child {
        top: 50%;
        bottom: auto;
        transform: translateY(-50%) rotate(45deg);
      }
    }
  }
}
.logo {
  display: block;
  width: 226px;
  font-family: "Rubik Mono One", sans-serif;
  font-size: 20px;
  color: $colorBrend;
  text-decoration: none;

  @media screen and (max-width: 991px) {
    width: auto;
    margin: 0 auto;
  }
}
.nav {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 991px) {
    display: none;
  }
  & li {
    margin: 0 20px;

    @media screen and (max-width: 1199px) {
      margin: 0 15px;
    }
    & a {
      display: block;
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
        display: block;
        width: 0;
        height: 1px;
        background-color: $colorBrend;
        transition-duration: 0.3s;
      }
      &:hover,
      &:focus {
        @extend %navhover;
      }
    }
    & button {
      font-family: "Open Sans", sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: $colorTextSecondary;
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
  @media screen and (max-width: 991px) {
    width: auto;

    & .options-favourite,
    & .options-search {
      display: none;
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
  overflow: visible;
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
.svg-nav {
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

    @media screen and (max-width: 991px) {
      stroke: $colorBrend;
    }
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
.mobile {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100vh - 60px);
  padding-top: 20px;
  z-index: 9999;
  background-color: $colorBackground;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .mobile-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    padding: 0 20px;

    & li {
      display: flex;
      align-items: center;
      margin-bottom: 40px;

      @media screen and (max-width: 767px) {
        margin-bottom: 20px;
      }
      &.hide {
        display: none;
      }
      & a {
        font-family: "Open Sans", sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: $colorTextSecondary;
        text-decoration: none;
      }
      & .svg-container {
        position: relative;
        display: inline-block;
        margin-right: 18px;
      }
      & .svg-icon {
        display: inline-block;
        margin-right: 18px;
        width: 20px;
        height: 20px;
        fill: $colorTextSecondary;

        /*
        &--home {
          width: 20px;
          height: 20px;
          fill: $colorTextSecondary;
          stroke: $colorTextSecondary;
        }
        &--gallery {
          width: 20px;
          height: 18px;
          fill: $colorTextSecondary;
          stroke: $colorTextSecondary;
        }
        &--shop {
          width: 20px;
          height: 20px;
          fill: $colorTextSecondary;
        }
        &--contacts {
          width: 17px;
          height: 19px;
          fill: $colorTextSecondary;
        }
        &--delivery {
          width: 20px;
          height: 19px;
          fill: $colorTextSecondary;
        }
        */
        &--favourite {
          fill: none;
          stroke: $colorTextSecondary;
          margin-right: 0;
        }
        &--search {
          stroke: none;
        }
      }
      &.active {
        & a {
          @extend %navhover;
        }
        & .svg-icon {
          fill: $colorBrend;

          &--favourite {
            fill: none;
            stroke: $colorBrend;
          }
        }
      }
    }
  }
  & .mob-search {
    display: block;
    border-bottom: 1px solid $colorTextSecondary;

    &__input {
      border: none;
      background-color: transparent;
      padding: 2px 5px;
      font-family: "Open Sans", sans-serif;
      font-size: 14px;
      color: $colorTextSecondary;
      height: 27px;
    }
    &__btn {
      font-family: "Open Sans", sans-serif;
      color: $colorBrend;
      border: none;
      background-color: transparent;
      outline: none;

      &:active {
        color: $colorBackground;
        background-color: $colorBrend;
      }
    }
  }
}
.svg {
  position: absolute;
  z-index: -1;

  &--body {
    top: 0px;
    right: -20px;
    width: 142px;
    height: 538px;
    stroke: $colorTextMain;
    transform: scaleX(-1);
    stroke-dasharray: 450;
    stroke-dashoffset: 500;
    animation: svgShow 15s linear 2s infinite alternate;
  }
  &--mountains {
    left: 50%;
    bottom: -17px;
    transform: translateX(-50%);
    width: 609px;
    height: 171px;
    stroke: $colorTextMain;
    stroke-dasharray: 350;
    stroke-dashoffset: 360;
    animation: svgShow 15s linear 4s infinite alternate;

    @media screen and (max-width: 575px) {
      display: none;
    }
  }
}
@keyframes svgShow {
  to {
    stroke-dashoffset: 0;
  }
}
</style>