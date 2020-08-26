<template>
  <div id="app">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/nav";
import Footer from "./components/footer";

export default {
  components: { Nav, Footer },
};
</script>
<style lang="scss">
@import "./scss/style.scss";

/* #app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
} */
</style>
