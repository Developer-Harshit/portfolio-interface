<script>
import HelloWorld from "./components/hello-world.vue";
import HeroSection from "./components/hero-section.vue";

import AboutDiv from "./components/about-div.vue";
import MainHeader from "./components/Main/main-header.vue";
import svgPath from "./components/Sketch/svg-path.vue";
export default {
  components: { HelloWorld, HeroSection, AboutDiv, MainHeader, svgPath },
  data() {
    return {};
  },
};
</script>

<template>
  <main-header></main-header>
  <main>
    <hero-section>
      <template #hero-slot>
        <about-div></about-div>
      </template>
    </hero-section>
    <svg-path></svg-path>
  </main>
  <hello-world msg="hi"></hello-world>
  <hello-world msg="hi"></hello-world>
  <hello-world msg="hi"></hello-world>
  <hello-world msg="hi"></hello-world>
  <hello-world msg="hi"></hello-world><hello-world msg="hi"></hello-world>

  <hello-world msg="hi"></hello-world>
  <footer>
    <hello-world msg="hi"></hello-world>
    <hello-world msg="hi"></hello-world>
    <hello-world msg="hi"></hello-world>
    <hello-world msg="hi"></hello-world>
    <hello-world msg="hi"></hello-world>
    <hello-world msg="hi"></hello-world>
    <hello-world msg="hi"></hello-world>
  </footer>
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
