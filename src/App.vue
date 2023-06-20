<script>
import HomePage from "./components/HomePage.vue";
import MasterHeader from "./components/Master/MasterHeader.vue";
export default {
  components: {
    HomePage,
    MasterHeader,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <master-header></master-header>

  <home-page></home-page>
  <footer>
    <div id="contact-me">hi</div>
  </footer>
</template>
<style src="./styles/base.css"></style>
