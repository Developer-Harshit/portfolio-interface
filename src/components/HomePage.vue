<script>
import AboutDiv from "./Home/AboutDiv.vue";
import UiSection from "./UI/UiSection.vue";
import SkillSection from "./Home/SkillSection.vue";

export default {
  components: {
    UiSection,
    AboutDiv,
    SkillSection,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <main>
    <ui-section>
      <about-div></about-div>
    </ui-section>
    <!-- <svg-path></svg-path> -->
    <ui-section>
      <skill-section></skill-section>
    </ui-section>
  </main>

  <footer></footer>
</template>
