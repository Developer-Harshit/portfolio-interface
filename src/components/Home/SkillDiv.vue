<template>
  <div>
    <ui-h3>
      <slot> </slot>
    </ui-h3>
    <div class="skill-div">
      <div
        v-for="n in Number(nSkills)"
        class="skill-item"
        :key="n"
        :ref="'myskill' + n"
        :id="'myskill' + n"
      >
        <img src="../../assets/js-logo.png" alt="javascript logo" />
      </div>
    </div>
  </div>
</template>
<script>
import LeaderLine from "../scripts/leader-line";

export default {
  props: ["nSkills"],
  data() {
    return {
      svgLines: [],
    };
  },

  mounted() {
    this.createPath();
  },
  methods: {
    createPath() {
      this.svgLines = [];
      //Loop through 1 to nSkills-1
      for (let i = 2; i <= this.nSkills; i++) {
        //create line start : i -1 end: i
        const myLine = this.createNewLine(i);
        //create observer
        const myObserver = this.createNewObserver(myLine);
        //observe end point
        myObserver.observe(this.$refs[`myskill${i}`][0]);
        //store it
        this.svgLines.push({
          obs: myObserver,
          line: myLine,
        });
      }
    },
    createNewObserver(line) {
      const handler = function (enteries) {
        enteries.forEach(function (entry) {
          if (entry.isIntersecting) {
            line.show("draw");
          } else {
            line.hide("draw");
          }
        });
      };
      const options = {}; //{ rootMargin: "-10s% 0%", threshold: 1 };
      const observer = new IntersectionObserver(handler, options);
      return observer;
    },
    createNewLine(index) {
      const startDiv = this.$refs[`myskill${index - 1}`][0];
      const endDiv = this.$refs[`myskill${index}`][0];
      const line = new LeaderLine(startDiv, endDiv, {
        showEffectName: "draw",
        endPlugColor: " #ffffff",
        startPlugColor: "#ffffff",
        color: "#535bf2",
        endPlug: "disc",
        startPlug: "disc",
        gradient: {
          startColor: "#535bf2",
          endColor: "#ef41d2",
        },
        dropShadow: {
          dx: 0,
          dy: 10,
          blur: 5,
        },
      });
      return line;
    },
  },
};
</script>
<style scoped>
.skill-div {
  @apply grid col-auto;
  margin: 1rem 15svw;
  gap: 30svh;
}
.skill-item {
  @apply justify-self-start;
}

.skill-item:nth-child(even) {
  @apply justify-self-end;
}
.skill-item img {
  @apply w-16 h-16 bg-purple-900;
}

@media (min-width: 786px) {
  .skill-div {
    margin: 0.5rem 30svw;
    gap: 30svh;
  }
}
</style>
