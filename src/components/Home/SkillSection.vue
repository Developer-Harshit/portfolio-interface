<template>
  <div id="skill-wrapper">
    <ui-h2 textlink="#skill-wrapper">My Skills</ui-h2>
    <skill-div class="skill-seg" n-skills="3" :skill-comp="skills"> </skill-div>
  </div>
</template>
<script>
import SkillDiv from "../Home/SkillDiv.vue";

export default {
  name: "skill-set",
  components: { SkillDiv },
  data() {
    return {
      skills: [
        { heading: "Front-End" },
        { icon: "svg-html", tip: "Html" },
        { icon: "svg-css", tip: "CSS" },
        { icon: "svg-js", tip: "Javascript" },
        { icon: "svg-p5", tip: "P5-Js" },
        { icon: "svg-vue", tip: "Vue-Js" },
        { heading: "Back-End" },
        { icon: "svg-node", tip: "Node-Js" },
        { icon: "svg-express", tip: "Express-Js" },

        { heading: "Database" },
        { icon: "svg-sql", tip: "MySql" },
        { icon: "svg-mongo", tip: "MongoDB" },
      ],
    };
  },
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

#skill-wrapper {
  @apply flex gap-4 flex-col;
}
.skill-seg {
  margin-bottom: 5rem;
}
</style>
