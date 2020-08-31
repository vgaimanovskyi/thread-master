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
      <li>
        <div class="filter">
          <div class="filter__name" @click="filterListOpen = !filterListOpen">
            {{filterName}}
            <svg
              class="filter__svg"
              :class="{'filter__svg--rotate': filterListOpen}"
            >
              <use xlink:href="../images/svg/sprite.svg#arrowSelect" />
            </svg>
          </div>
          <div class="filter__list" v-show="filterListOpen">
            <input type="radio" value="ru" id="ru" v-model="filterValue" @change="useFilter" />
            <label for="ru">Русский</label>
            <input type="radio" value="ua" id="ua" v-model="filterValue" @change="useFilter" />
            <label for="ua">Українська</label>
            <input type="radio" value="en" id="en" v-model="filterValue" @change="useFilter" />
            <label for="en">English</label>
          </div>
        </div>
      </li>
      <li>
        <div class="options-icons">
          <svg class="svg svg--favourite">
            <use xlink:href="../images/svg/sprite.svg#heart" />
          </svg>
          <span class="options-icons__number">2</span>
        </div>
      </li>
      <li>
        <div class="search">
          <input type="search" class="search__input" placeholder="Поиск" />
          <button type="button" class="search__btn">
            <svg class="svg svg--search">
              <use xlink:href="../images/svg/sprite.svg#search" />
            </svg>
          </button>
        </div>
      </li>
      <li>
        <div class="options-icons">
          <svg class="svg svg--basket">
            <use xlink:href="../images/svg/sprite.svg#basket" />
          </svg>
          <span class="options-icons__number">15</span>
        </div>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      filterName: "Русский",
      filterValue: "ru",
      filterListOpen: false,
    };
  },
  methods: {
    useFilter() {
      switch (this.filterValue) {
        case "ru":
          this.filterName = "Русский";
          console.log(this.filterValue);
          break;
        case "ua":
          this.filterName = "Українська";
          console.log(this.filterValue);
          break;
        case "en":
          this.filterName = "English";
          console.log(this.filterValue);
          break;
        default:
          this.filterName = "Русский";
          console.log(this.filterValue);
      }
      this.filterListOpen = false;
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
  fill: $colorTextSecondary;

  &--favourite {
    width: 21px;
    height: 19px;
  }
  &--search {
    width: 19px;
    height: 19px;
    transition-duration: 0.3s;
  }
  &--basket {
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
    background-color: transparent;
    border: none;
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