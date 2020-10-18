<template>
  <div class="social-modal" @click.self="closeShare">
    <div class="modal-body">
      <button type="button" class="btn-remove" @click="closeShare">
        <svg class="svg-remove">
          <use xlink:href="../images/svg/sprite.svg#remove" />
        </svg>
      </button>
      <div class="social-block">
        <h2 class="social-block__caption">Поделиться с друзьями</h2>
        <ul class="social-block__list">
          <li class="social-block__list-item">
            <ShareNetwork
              class="social-block__link social-block__link--telegram"
              network="telegram"
              :url="link"
              :title="name"
              :description="description"
            >
            </ShareNetwork>
          </li>
          <li class="social-block__list-item">
            <ShareNetwork
              class="social-block__link social-block__link--pinterest"
              network="pinterest"
              :url="link"
              :title="name"
              :media="media"
            >
            </ShareNetwork>
          </li>
          <li class="social-block__list-item">
            <ShareNetwork
              class="social-block__link social-block__link--whatsapp"
              network="whatsapp"
              :url="link"
              :title="name"
              :description="description"
            >
            </ShareNetwork>
          </li>
          <li class="social-block__list-item">
            <ShareNetwork
              class="social-block__link social-block__link--viber"
              network="viber"
              :url="link"
              :title="name"
              :description="description"
            >
            </ShareNetwork>
          </li>
          <li class="social-block__list-item">
            <ShareNetwork
              class="social-block__link social-block__link--vk"
              network="vk"
              :url="link"
              :title="name"
              :description="description"
              :media="media"
            >
            </ShareNetwork>
          </li>
          <li class="social-block__list-item">
            <ShareNetwork
              class="social-block__link social-block__link--fb"
              network="facebook"
              :url="link"
              :title="name"
              :description="description"
              hashtags="ThreadMaster,StringArt"
            >
            </ShareNetwork>
          </li>
          <li class="social-block__list-item">
            <ShareNetwork
              class="social-block__link social-block__link--gmail"
              network="email"
              :url="link"
              :title="name"
              :description="description"
            >
            </ShareNetwork>
          </li>
        </ul>
        <div class="social-copy">
          <input
            class="social-copy__link"
            :class="{
              'social-copy__link--valid': copyValid,
              'social-copy__link--error': copyError,
            }"
            type="text"
            :value="link"
          />
          <button
            class="social-copy__btn"
            type="button"
            @click="copyLink(link)"
          >
            <svg
              class="social-copy__svg"
              :class="{
                'social-copy__svg--valid': copyValid,
                'social-copy__svg--error': copyError,
              }"
            >
              <use xlink:href="../images/svg/sprite.svg#copy" />
            </svg>
          </button>
        </div>
      </div>
      <svg class="svg svg--leptop">
        <use xlink:href="../images/svg/sprite.svg#leptop" />
      </svg>
      <svg class="svg svg--pineapple">
        <use xlink:href="../images/svg/sprite.svg#pineapple" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ["link", "name", "description", "media"],
  data() {
    return {
      copyValid: false,
      copyError: false,
    };
  },
  methods: {
    closeShare() {
      this.$emit("closeShare");
    },
    copyLink(link) {
      navigator.clipboard
        .writeText(link)
        .then(() => {
          this.copyValid = true;
        })
        .catch((err) => {
          this.copyError = true;
          console.log("Something went wrong", err);
        });
      setTimeout(() => {
        this.copyValid = false;
        this.copyError = false;
      }, 5000);
    },
  },
  created() {
    console.log(this.link, this.description);
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.social-modal {
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
  width: 375px;
  height: calc(100vh - 100px);
  background-color: $colorBrend;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .social-block {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    line-height: 30px;
    color: $colorBackground;
    text-align: center;
    margin-bottom: 30px;

    &__caption {
      font-family: inherit;
      font-size: 25px;
      font-weight: 700;
      color: inherit;
      margin-bottom: 43px;
    }
    &__list {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 43px;
    }
    &__list-item {
      width: 60px;
      height: 60px;
      border-radius: 15px;
      background-color: $colorTextMain;
      margin: 7px;
    }
    &__link {
      display: block;
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: inherit;
      cursor: pointer;

      &--telegram {
        background-image: url(../images/svg/social/telegram.svg);
      }
      &--pinterest {
        background-image: url(../images/svg/social/pinterest.svg);
      }
      &--whatsapp {
        background-image: url(../images/svg/social/whatsapp.svg);
      }
      &--viber {
        background-image: url(../images/svg/social/viber.svg);
      }
      &--vk {
        background-image: url(../images/svg/social/vk.svg);
      }
      &--fb {
        background-image: url(../images/svg/social/fb.svg);
      }
      &--gmail {
        background-image: url(../images/svg/social/gmail.svg);
      }
      &:hover,
      &:focus {
        box-shadow: inset 0 0 10px $colorTextSecondary;
      }
    }
  }
  .social-copy {
    position: relative;

    &__link {
      display: block;
      width: 100%;
      height: 60px;
      border: 1px solid transparent;
      border-radius: 8px;
      background-color: $colorTextMain;
      padding: 22px 75px 22px 22px;
      font-family: "Montserrat", sans-serif;
      font-size: 12px;
      font-weight: 600;
      color: $colorBackground;
      transition-duration: 0.3s;

      &--valid {
        border-color: $colorBackground;
      }
      &--error {
        border-color: $colorImportant;
      }
    }
    &__btn {
      position: absolute;
      top: 5px;
      right: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      background-color: $colorBackground;
      border: none;
      outline: none;
      border-radius: 8px;
      cursor: pointer;

      &:hover,
      &:focus {
        box-shadow: inset 0 0 10px $colorTextSecondary;
      }
    }
    &__svg {
      display: block;
      width: 24px;
      height: 30px;
      fill: $colorTextMain;

      &--valid {
        fill: $colorBrend;
      }
      &--error {
        fill: $colorImportant;
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

  &--leptop {
    top: 0;
    left: -34px;
    stroke: $colorBackground;
    width: 309px;
    height: 131px;
    stroke-dasharray: 3000;
    stroke-dashoffset: 3200;
    animation: svgShow 15s linear infinite alternate;
  }
  &--pineapple {
    right: -21px;
    bottom: -21px;
    stroke: $colorBackground;
    width: 126px;
    height: 272px;
    stroke-dasharray: 400;
    stroke-dashoffset: 420;
    animation: svgShow 10s linear 2s infinite alternate;
  }
}
@keyframes svgShow {
  to {
    stroke-dashoffset: 0;
  }
}
</style>