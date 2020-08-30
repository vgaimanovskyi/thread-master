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

#app {
  position: relative;
  overflow-x: hidden;
}
</style>
