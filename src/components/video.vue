<template>
  <div class="modal" @click.self="closeModal">
    <div class="mainer">
      <div class="modal-body">
        <iframe
          width="882"
          height="501"
          :src="'https://www.youtube.com/embed/' + product.video"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
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
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-body {
  max-width: 1145px;
  margin: 0 auto;
}
iframe {
  display: block;
}
</style>