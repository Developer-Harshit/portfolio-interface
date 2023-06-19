<template>
  <header>
    <ui-heading
      >Harshit Shivhare
      <template #desc>Full-Stack Developer</template></ui-heading
    >
    <progress-bar></progress-bar>
    <master-nav></master-nav>
  </header>
</template>
<script>
import MasterNav from "./master-nav.vue";
import ProgressBar from "../Sketch/progress-bar.vue";
import UiHeading from "../UI/ui-heading.vue";
export default {
  name: "main-header",
  components: {
    MasterNav,
    ProgressBar,
    UiHeading,
  },
};
</script>
