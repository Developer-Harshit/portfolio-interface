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
import UiSection from "./UI/ui-section.vue";
import SkillSet from "./Home/skill-set.vue";

export default {
  components: {
    HelloWorld,
    UiSection,
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
    <ui-section>
      <template #hero-slot>
        <about-div></about-div>
      </template>
    </ui-section>
    <!-- <svg-path></svg-path> -->
    <ui-section>
      <template #hero-slot>
        <skill-set></skill-set>
      </template>
    </ui-section>
  </main>

  <footer></footer>
</template>
