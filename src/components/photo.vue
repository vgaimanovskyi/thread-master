<template>
  <div class="modal">
    <div class="mainer">
      <div class="slide-block">
        <div class="btn-conteiner">
          <svg class="svg-btn" title="Закрыть" @click="closeModal">
            <use xlink:href="../images/svg/sprite.svg#remove" />
          </svg>
        </div>
        <div class="img-block">
          <img class="img-block__photo" :src="require('../images/products/' + imgPath)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: ["imgPath"],
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.slide-block {
  position: relative;
  height: 561px;

  .btn-conteiner {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0 0 0 8px;
    z-index: 1000;

    .svg-btn {
      display: inline-block;
      width: 18px;
      height: 18px;
      fill: $colorTextMain;
      padding: 20px;
      transition-duration: 0.3s;
      cursor: pointer;

      &:hover,
      &:focus {
        fill: $colorImportant;
        box-shadow: inset 0 0 10px $colorImportant;
      }
    }
  }
}
.img-block {
  height: 100%;
  display: flex;
  align-items: center;

  &__photo {
    display: block;
    width: 100%;
    border-radius: 8px;
  }
}
</style>