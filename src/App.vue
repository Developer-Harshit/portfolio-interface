<script>
import HomePage from "./components/HomePage.vue";
import MasterHeader from "./components/Master/master-header.vue";

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
</template>
<style src="./styles/base.css"></style>
