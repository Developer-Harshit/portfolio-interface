<template>
  <div class="skill-section">
    <ui-h2>My Skills</ui-h2>
    <svg-path class="skill-seg" n-skills="4">Front-End </svg-path>
    <svg-path class="skill-seg" n-skills="3"> Back-End </svg-path>
    <svg-path class="skill-seg" n-skills="2"> Database </svg-path>
  </div>
</template>
<script>
import SvgPath from "../Sketch/svg-path.vue";

export default {
  name: "skill-set",
  components: { SvgPath },
  methods: {
    returnClasses(n) {
      if (n == 1) {
        return [`start${n}`];
      }
      if (n == 5) {
        return [`end${n - 1}`];
      }
      return [`start${n}`, `end${n - 1}`];
    },
  },
};
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.skill-section {
  @apply flex gap-4 flex-col;
}
.skill-seg {
  border-top: 1px solid;
  margin: 2rem;
  margin-bottom: 5rem;
}
</style>
