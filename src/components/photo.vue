<template>
  <div class="modal" @click.self="closeModal">
    <div class="mainer">
      <div class="slide-block">
        <div class="btn-conteiner">
          <svg v-if="!ie" class="svg-btn" title="Закрыть" @click="closeModal">
            <use xlink:href="../images/svg/sprite.svg#remove" />
          </svg>
          <img
            v-else
            class="svg-btn"
            src="../images/png/remove.png"
            alt="remove"
            title="Закрыть"
            @click="closeModal"
          />
        </div>
        <img class="img" :src="resizePath" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "photo",
  props: ["resizePath"],
  computed: {
    ie() {
      return !!window.MSInputMethodContext && !!document.documentMode;
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
      });
    },
  },
  created() {
    this.scrollTop();
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.modal {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  align-items: center;
}
.slide-block {
  position: relative;

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
      stroke: $colorTextMain;
      padding: 20px;
      transition-duration: 0.3s;
      cursor: pointer;

      &:hover,
      &:focus {
        stroke: $colorImportant;
        box-shadow: inset 0 0 10px $colorImportant;
      }
    }
  }
}
.img {
  display: block;
  width: 100%;
  border-radius: 8px;
}
</style>