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
<style>
.typePara,
.typeSpan {
  font-size: 1rem;
}
.typeSpan {
  display: inline-block;
  color: rgba(0, 0, 0, 0.571);
  font-weight: 900;
  transform: scaleX(2);
}
</style>
