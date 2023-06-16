<script>
// import HelloWorld from "../components/hello-world.vue";
// import HeroSection from "../components/hero-section.vue";
// import AboutDiv from "../components/about-div.vue";
// import MasterHeader from "../components/Master/master-header.vue";
// import svgPath from "../components/Sketch/svg-path.vue";

import MasterHeader from "./Master/master-header.vue";
import SvgPath from "./Sketch/svg-path.vue";
import AboutDiv from "./Home/about-div.vue";
import HelloWorld from "./UI/hello-world.vue";
import HeroSection from "./UI/hero-section.vue";
import SkillSet from "./Home/skill-set.vue";

export default {
  components: {
    HelloWorld,
    HeroSection,
    AboutDiv,
    MasterHeader,
    SvgPath,
    SkillSet,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <main>
    <hero-section>
      <template #hero-slot>
        <about-div></about-div>
      </template>
    </hero-section>
    <!-- <svg-path></svg-path> -->
    <skill-set></skill-set>
  </main>

  <footer></footer>
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
