<template>
  <div class="page">
    <div class="mainer">
      <h1 class="page__caption">Результат поиска</h1>
      <div class="row" v-if="searchResults.length">
        <div class="col" v-for="product in searchResults" :key="product.id">
          <router-link
            tag="div"
            :to="'/product/' + product.id"
            class="img-container"
          >
            <div class="tag tag--discount" v-if="product.discount > 0">
              -{{ product.discount }}%
            </div>
            <div class="tag tag--new" v-if="product.new">Новинка</div>
            <img class="img" :src="product.urlPoster" :alt="product.name" />
          </router-link>
          <h3 class="name">
            <span>{{ product.name }}</span>
          </h3>
          <div class="size">Размер: {{ product.size }}</div>
          <div class="price">
            {{ product.price - (product.price * product.discount) / 100 }} $
            <s class="old-price" v-if="product.discount > 0"
              >{{ product.price }} $</s
            >
          </div>
        </div>
        <div class="col empty"></div>
        <div class="col empty"></div>
      </div>
      <div v-else class="text">
        К сожалению, по Вашему запросу ничего не удалось найти.
      </div>
    </div>
    <Aside />
    <svg class="svg svg--balloon">
      <use xlink:href="../images/svg/sprite.svg#balloon" />
    </svg>
    <svg class="svg svg--faces">
      <use xlink:href="../images/svg/sprite.svg#faces" />
    </svg>
  </div>
</template>

<script>
import Aside from "../components/aside";

export default {
  components: { Aside },
  metaInfo: {
    title: "Поиск",
  },
  computed: {
    searchResults() {
      return this.$store.getters.getSearchResults;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.page {
  min-height: calc(100vh - 110px - 85px - 83px);

  @media screen and (max-width: 991px) {
    min-height: calc(100vh - 20px - 85px - 83px);
  }
  @media screen and (max-width: 767px) {
    min-height: calc(100vh - 20px - 65px - 53px);
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  max-width: 1050px;
  margin: 50px auto 0 auto;

  @media screen and (max-width: 575px) {
    flex-direction: column;
    align-items: center;
  }
  .col {
    width: 33.33333%;
    flex-grow: 1;
    padding: 0 10px;
    margin-bottom: 50px;
    box-sizing: border-box;

    @media screen and (max-width: 767px) {
      width: 50%;
      margin-bottom: 30px;
    }
    @media screen and (max-width: 575px) {
      width: auto;
    }
    &.empty {
      padding: 0;
      margin: 0;
    }
  }
}
.img-container {
  position: relative;
  width: 100%;
  max-width: 330px;
  height: 330px;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-bottom: 25px;
  border-radius: 8px;
  transition-duration: 0.3s;
  cursor: pointer;

  @media screen and (max-width: 991px) {
    height: 280px;
  }
  @media screen and (max-width: 767px) {
    height: 330px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 575px) {
    height: 400px;
  }
  @media screen and (max-width: 374px) {
    height: 300px;
  }
  &:hover {
    transform: scale(1.05);
  }
  .img {
    display: block;
    width: 100%;
    border-radius: 8px;
  }
  .tag {
    position: absolute;
    top: 15px;
    left: 0;
    min-width: 68px;
    font-family: "Montserrat", sans-serif;
    font-size: 11px;
    font-weight: 500;
    line-height: 23px;
    color: $colorTextMain;
    text-align: center;
    padding: 0 5px;
    box-sizing: border-box;

    &--discount {
      background-color: $colorImportant;
    }
    &--new {
      background-color: #eb00ff;
    }
  }
}
.text {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 29px;
  color: $colorTextSecondary;
}
.name {
  position: relative;
  height: 29px;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 29px;
  color: $colorTextSecondary;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;

  span {
    min-width: 100%;
    position: absolute;
    top: 0;
    right: auto;
  }
  &:hover {
    span {
      right: 0;
    }
  }
}
.size {
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  line-height: 24px;
  color: $colorTextSecondary;
  margin-bottom: 5px;
}
.price {
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  color: $colorBrend;
}
.old-price {
  font-size: 18px;
  color: $colorTextSecondary;
  margin-left: 8px;
  vertical-align: bottom;
}
.btn {
  margin: 9px auto 70px auto;
}
.svg {
  position: absolute;
  z-index: -1;

  &--faces {
    top: 62px;
    right: 8px;
    stroke: $colorTextMain;
    width: 189px;
    height: 660px;
    stroke-dasharray: 200;
    stroke-dashoffset: 220;
    animation: svgShow 15s linear 1s infinite alternate;
  }
  &--balloon {
    left: 0;
    bottom: -80px;
    stroke: $colorTextMain;
    width: 184px;
    height: 360px;
    stroke-dasharray: 470;
    stroke-dashoffset: 480;
    animation: svgShow 10s linear 3s infinite alternate;

    @media screen and (max-width: 479px) {
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