<template>
  <section class="skill-section">
    <svg-path class="skill-segment" n-skills="10"> </svg-path>
  </section>
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
.skill-segment {
  @apply grid col-auto;
  margin: 0.5rem 5svw;
  gap: 60svh;
}
.skill-item {
  @apply justify-self-start;
}

.skill-item:nth-child(odd) {
  @apply justify-self-end;
}
.skill-item img {
  @apply w-16 h-16 bg-purple-900;
}
@media (min-width: 786px) {
  .skill-segment {
    margin: 0.5rem 35svw;
    gap: 60svh;
  }
}
</style>
