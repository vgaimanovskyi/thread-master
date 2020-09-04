<template>
  <footer class="footer">
    <span>Follow us</span>
    <span class="tirer"></span>
    <ul class="social">
      <li>
        <a href="https://pin.it/72NlAVF" target="_blank">
          <svg class="svg">
            <use xlink:href="../images/svg/sprite.svg#pinterest" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCZqgj7rBbaKMP1ZgxJCr-TQ?view_as=subscriber"
          target="_blank"
        >
          <svg class="svg">
            <use xlink:href="../images/svg/sprite.svg#youtube" />
          </svg>
        </a>
      </li>
      <li>
        <a href="http://instagram.com/stringart.workshop" target="_blank">
          <svg class="svg">
            <use xlink:href="../images/svg/sprite.svg#instagram" />
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/stringart.workshop2017" target="_blank">
          <svg class="svg">
            <use xlink:href="../images/svg/sprite.svg#facebook" />
          </svg>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {};
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
}
span {
  font-family: inherit;
  font-size: 14px;
  color: $colorBrend;
  margin-right: 25px;
}
.tirer {
  display: inline-block;
  height: 2px;
  width: 60px;
  background-color: $colorBrend;
}
.social {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

  & li {
    margin-right: 25px;

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