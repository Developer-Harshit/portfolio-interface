<template>
  <header>
    <master-nav></master-nav>
    <progress-bar></progress-bar>
  </header>
</template>
<script>
import MasterNav from "./master-nav.vue";
import ProgressBar from "../Sketch/progress-bar.vue";

export default {
  name: "main-header",
  components: {
    MasterNav,
    ProgressBar,
  },
};
</script>
