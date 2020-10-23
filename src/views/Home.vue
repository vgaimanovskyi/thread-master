<template>
  <div class="mainer">
    <Swipe v-if="swipe" class="swipe-modal" @closeModal="swipe = false" />
    <div class="grid">
      <div class="col col--order">
        <div class="hello-text">
          <h2 class="hello-text__caption">
            Приветствую тебя, мой гость!
            <br />Тут ты сможешь ознакомиться с моим творчеством!
          </h2>
          <p class="hello-text__description">
            Мои картины имеют уникальную технику создания, стринг арт (от англ.
            string art — «искусство нитей»). Это набирающий популярность вид
            изобразительного искусства в котором используются гвозди и нити.
          </p>
          <p class="hello-text__description">
            Наслаждайтесь, вдохновляйтесь, вдумывайтесь глядя на эти работы.
            Интересного просмотра!
          </p>
          <router-link to="/shop" tag="a" class="btn btn--width"
            >Перейти в магазин</router-link
          >
        </div>
      </div>
      <div class="col">
        <svg class="logo-svg">
          <use xlink:href="../images/svg/sprite.svg#logo" />
        </svg>
      </div>
    </div>
    <svg class="svg svg--face">
      <use xlink:href="../images/svg/sprite.svg#face" />
    </svg>
    <svg class="svg svg--fox">
      <use xlink:href="../images/svg/sprite.svg#fox" />
    </svg>
    <svg class="svg svg--mountains">
      <use xlink:href="../images/svg/sprite.svg#mountains" />
    </svg>
  </div>
</template>

<script>
import Swipe from "../components/swipe";

export default {
  name: "Home",
  metaInfo: {
    title: "Thread Master",
  },
  components: { Swipe },
  data() {
    return {
      swipe: false,
    };
  },
  created() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.swipe = true;
    }
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/_variables.scss";

.grid {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  min-height: calc(100vh - 84px - 83px);

  @media screen and (max-width: 767px) {
    min-height: calc(100vh - 64px - 53px);
    flex-direction: column;
  }
}
.col {
  width: 50%;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 100%;

    &--order {
      order: 1;
    }
  }
}
.logo-svg {
  width: 100%;
  height: 100%;
  transform: scale(0);
  stroke-dasharray: 100;
  animation: logoShow 0.5s linear 1s forwards,
    logoAnimate 30s linear 1s infinite;

  @media screen and (max-width: 767px) {
    height: 300px;
    margin: 30px 0 60px 0;
  }
  @media screen and (max-width: 575px) {
    height: 150px;
  }
}
.hello-text {
  padding-right: 15px;

  @media screen and (max-width: 991px) {
    padding-right: 0;
  }
  &__caption {
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    font-weight: 500;
    line-height: 48px;
    color: $colorTextMain;
    margin-bottom: 45px;
    transform: translateX(-200%);
    animation: textShow 0.3s linear forwards;

    @media screen and (max-width: 991px) {
      font-size: 24px;
      line-height: 36px;
    }
    @media screen and (max-width: 767px) {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 30px;
    }
    @media screen and (max-width: 575px) {
      font-size: 15px;
      line-height: 24px;
    }
  }
  &__description {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    line-height: 24px;
    color: $colorTextMain;
    margin-bottom: 20px;
    transform: translateX(-200%);
    animation: textShow 0.3s linear forwards;

    @media screen and (max-width: 767px) {
      margin-bottom: 30px;
    }
    &:first-of-type {
      animation-delay: 0.2s;
    }
    &:nth-of-type(2) {
      animation-delay: 0.4s;
    }
    &:last-of-type {
      animation-delay: 0.6s;
      margin-bottom: 40px;
    }
  }
}
.btn {
  transform: translateX(-300%);
  animation: textShow 0.3s linear 0.8s forwards;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 399px) {
    width: 100%;
    margin-bottom: 25px;
  }
}
.svg {
  position: absolute;
  z-index: -1;

  &--face {
    top: 105px;
    left: -40px;
    width: 184px;
    height: 192px;
    stroke: $colorTextMain;
    stroke-dasharray: 450;
    stroke-dashoffset: 500;
    animation: svgShow 10s linear 2s infinite alternate;

    @media screen and (max-width: 575px) {
      display: none;
    }
  }
  &--fox {
    right: -17px;
    bottom: 171px;
    width: 137px;
    height: 142px;
    stroke: $colorTextMain;
    stroke-dasharray: 90;
    stroke-dashoffset: 100;
    animation: svgShow 10s linear 4s infinite alternate;
  }
  &--mountains {
    left: 0;
    bottom: 0;
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
@keyframes logoShow {
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes logoAnimate {
  to {
    stroke-dashoffset: 1000;
  }
}
@keyframes svgShow {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes textShow {
  to {
    transform: translateX(0);
  }
}
</style>