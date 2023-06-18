<template>
  <section class="skill-segment" n-skills="10">
    <div
      v-for="n in Number(nSkills)"
      class="skill-item"
      :key="n"
      :ref="'myskill' + n"
      :id="'myskill' + n"
    >
      <img src="../../assets/js-logo.png" alt="javascript logo" />
    </div>
  </section>
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
    const that = this;
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
  methods: {
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
        endPlugColor: "#535bf2",
        startPlugColor: "#535bf2",
        color: "#535bf2",
        endPlug: "disc",
        startPlug: "disc",
        gradient: {
          endColor: "#ef4161",
          startColor: "#41128c",
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
