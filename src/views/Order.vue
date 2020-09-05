<template>
  <div class="page">
    <div class="mainer">
      <h1 class="page__caption">Избранные товары</h1>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    /* favProducts() {
      return this.$store.getters.getFavProducts;
    }, */
    cartList() {
      return this.$store.state.cartList;
    },
  },
};
</script>

<style>
</style>