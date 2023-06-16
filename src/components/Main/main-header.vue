<template>
  <header>
    <nav-bar></nav-bar>
    <progress-bar></progress-bar>
  </header>
</template>
<script>
import NavBar from "./main-nav.vue";
import ProgressBar from "../Sketch/progress-bar.vue";

export default {
  name: "main-header",
  components: {
    NavBar,
    ProgressBar,
  },
};
</script>
