<template>
  <div class="skill-section">
    <ui-h2>My Skills</ui-h2>
    <skill-div class="skill-seg" n-skills="4">Front-End </skill-div>
    <skill-div class="skill-seg" n-skills="3"> Back-End </skill-div>
    <skill-div class="skill-seg" n-skills="2"> Database </skill-div>
  </div>
</template>
<script>
import SkillDiv from "../Home/SkillDiv.vue";

export default {
  name: "skill-set",
  components: { SkillDiv },
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
