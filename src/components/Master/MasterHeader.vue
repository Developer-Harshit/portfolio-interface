<template>
  <header>
    <ui-heading
      >Harshit Shivhare
      <template #desc>Full-Stack Developer</template></ui-heading
    >
    <ui-progress-bar></ui-progress-bar>
    <master-nav></master-nav>
  </header>
</template>
<script>
import MasterNav from "./MasterNav.vue";
import UiProgressBar from "../UI/UiProgressBar.vue";
import UiHeading from "../UI/UiH1.vue";
export default {
  name: "master-header",
  components: {
    MasterNav,
    UiProgressBar,
    UiHeading,
  },
};
</script>
