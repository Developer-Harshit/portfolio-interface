<template>
  <div class="skill-div">
    <div
      v-for="(comp, n) in skillComp"
      :data-tooltip="comp.tip"
      class="skill-item"
      :key="n"
      :ref="'myskill' + n"
      :id="'myskill' + n"
    >
      <component
        v-if="!comp.heading"
        :is="comp.icon"
        class="skill-svg"
      ></component>
      <h3 v-else class="skill-h3">{{ comp.heading }}</h3>
    </div>
  </div>
</template>
<script>
import LeaderLine from "../scripts/leader-line";
import SvgHtml from "../SVGS/SvgHtml.vue";
import SvgCss from "../SVGS/SvgCss.vue";
import SvgJs from "../SVGS/SvgJS.vue";
import SvgVue from "../SVGS/SvgVue.vue";
import SvgNode from "../SVGS/SvgNode.vue";
import SvgExpress from "../SVGS/SvgExpress.vue";
import SvgMongo from "../SVGS/SvgMongo.vue";
import SvgSql from "../SVGS/SvgSql.vue";
import SvgP5 from "../SVGS/SvgP5.vue";

export default {
  props: ["nSkills", "skillComp"],
  components: {
    SvgHtml,
    SvgCss,
    SvgJs,
    SvgVue,
    SvgNode,
    SvgExpress,
    SvgMongo,
    SvgSql,
    SvgP5,
  },
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
      const n = this.skillComp.length;
      for (let i = 1; i < n; i++) {
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
        endPlug: "arrow2",
        startPlug: "disc",
        gradient: {
          startColor: "#fff",
          endColor: "#5934d1",
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
<style>
.skill-div {
  gap: 20svh 15svw;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 1fr 1fr;
  --animation-option: cubic-bezier(0.13, 0.83, 0.71, 1.18) 0.4s;
}
.skill-item {
  @apply justify-self-center self-center;

  position: relative;

  box-shadow: 0px 0px 5px #5934d184;
  transition: transform var(--animation-option);
  z-index: 1;
}
.skill-item:hover {
  transform: scale(1.01) translateY(-10px);
}
.skill-item[data-tooltip]::after {
  opacity: 0;
  content: attr(data-tooltip);
  position: absolute;

  min-width: -moz-max-content;
  min-width: -webkit-fill-available;

  color: var(--color-white);
  background-color: var(--highlight-violet);
  text-align: center;
  transition: opacity var(--animation-option);
}
.skill-item[data-tooltip]:hover::after {
  opacity: 1;
}
.skill-item:nth-child(4n + 3),
.skill-item:nth-child(4n + 2) {
  grid-column: 2;
}
.skill-svg,
.skill-h3 {
  padding: 0.5rem;
}
.skill-svg {
  width: clamp(5svw + 1rem, 10svw + 1rem, 15svw + 2rem);
  height: clamp(5svw + 1rem, 10svw + 1rem, 15svw + 2rem);
  filter: drop-shadow(0px 0px 5px #ffffff4d) brightness(150%);
}
.skill-h3 {
  font-size: var(--size-small);
  padding: 2cqi 1cqi;
  width: -webkit-fill-available;
  width: min(-webkit-fill-available, max-content);
  width: max-content;
  color: var(--color-white);
  background-color: var(--highlight-violet);
  background: linear-gradient(
    45deg,
    var(--highlight-red),
    var(--highlight-blue)
  );
}
@media (max-width: 250px) {
  .skill-h3 {
    width: min-content;
  }
}
@media (min-width: 786px) {
  .skill-div {
    gap: 25svh 30svw;
  }
  .skill-svg {
    width: clamp(3svh + 1rem, 5svh + 1rem, 7svh + 2rem);
    height: clamp(3svh + 1rem, 5svh + 1rem, 7svh + 2rem);
  }
}
</style>
