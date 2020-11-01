<template>
  <footer class="footer">
    <span>Follow us</span>
    <span class="tirer"></span>
    <ul class="social">
      <li>
        <a href="https://pin.it/72NlAVF" target="_blank">
          <svg v-if="!ie" class="svg">
            <use xlink:href="../images/svg/sprite.svg#pinterest" />
          </svg>
          <img
            v-else
            class="svg"
            src="../images/png/pinterest.png"
            alt="pinterest"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCZqgj7rBbaKMP1ZgxJCr-TQ?view_as=subscriber"
          target="_blank"
        >
          <svg v-if="!ie" class="svg">
            <use xlink:href="../images/svg/sprite.svg#youtube" />
          </svg>
          <img
            v-else
            class="svg"
            src="../images/png/youtube.png"
            alt="youtube"
          />
        </a>
      </li>
      <li>
        <a href="http://instagram.com/stringart.workshop" target="_blank">
          <svg v-if="!ie" class="svg">
            <use xlink:href="../images/svg/sprite.svg#instagram" />
          </svg>
          <img
            v-else
            class="svg"
            src="../images/png/instagram.png"
            alt="instagram"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/stringart.workshop2017"
          target="_blank"
        >
          <svg v-if="!ie" class="svg">
            <use xlink:href="../images/svg/sprite.svg#facebook" />
          </svg>
          <img
            v-else
            class="svg"
            src="../images/png/facebook.png"
            alt="facebook"
          />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  computed: {
    ie() {
      return !!window.MSInputMethodContext && !!document.documentMode;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.footer {
  width: 100%;
  padding: 30px;
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 767px) {
    padding: 15px 20px;
  }
  @media screen and (max-width: 479px) {
    justify-content: space-between;
  }
}
span {
  font-family: inherit;
  font-size: 14px;
  color: $colorBrend;
  margin-right: 25px;

  @media screen and (max-width: 479px) {
    margin-right: 10px;
  }
}
.tirer {
  display: inline-block;
  height: 2px;
  width: 60px;
  background-color: $colorBrend;

  @media screen and (max-width: 479px) {
    width: 40px;
  }
}
.social {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

  & li {
    margin-right: 25px;

    @media screen and (max-width: 479px) {
      margin-right: 20px;
    }
    &:last-child {
      margin-right: 0;
    }
    & a:hover {
      .svg {
        transform: translateY(-50%) rotateX(360deg);
      }
    }
  }
}
.svg {
  fill: $colorBrend;
  width: 20px;
  height: 20px;
  transition-duration: 0.5s;
}
</style>