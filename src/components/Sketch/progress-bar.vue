<template>
  <div id="progress-bar"></div>
</template>
<script>
import p5 from "p5";
export default {
  data() {
    return {
      scrollPercent: 2,
      scrollVal: 2,
      siteHeight: false,
      screenHeight: false,
    };
  },

  mounted() {
    class ProgressBar {
      constructor(p5) {
        this.div = p5.select("#progress-bar");
      }

      setWidth(wPercent) {
        this.div.style("width", `${wPercent}%`);
      }
    }
    var bar;
    const that = this;
    const mySketch = function (p5) {
      p5.setup = () => {
        p5.noCanvas();
        bar = new ProgressBar(p5);
        bar.setWidth(that.scrollVal);
        that.setDim();
        that.handleScroll();
        window.addEventListener("resize", that.setDim);
        window.addEventListener("scroll", that.handleScroll);
      };

      p5.draw = () => {
        bar.setWidth(that.scrollPercent);
      };
    };

    new p5(mySketch);
    console.log("Sketch Created");
  },
  destroyed() {
    window.removeEventListener("resize", this.setDim);
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    setDim() {
      var body = document.body,
        html = document.documentElement;

      this.siteHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      this.screenHeight = html.clientHeight; // window.outerHeight;
      // your code for handling resize...
    },
    handleScroll() {
      this.scrollVal = window.scrollY;
      this.scrollPercent =
        (this.scrollVal / (this.siteHeight - this.screenHeight)) * 100;
    },
  },
};
</script>
<style scoped>
#progress-bar {
  height: 2svh;
  width: 0px;
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  filter: var(--filter-shadow-white);
  border: 1px solid rgba(255, 255, 255, 0.502);
  border-left: 10px solid rgba(255, 255, 255, 0.849);
  background-color: rgb(74, 18, 139);
  background: linear-gradient(250deg, var(--highlight-gradient));

  background-size: 400% 100%;
  animation: gradient-move-2a127f37 15s cubic-bezier(0.08, 0.8, 1, 0.72)
    infinite;
}
@keyframes gradient-move {
  0%,
  100% {
    background-position: 0% 50%;
  }
  25%,
  75% {
  }
  50% {
    background-position: 100% 50%;
  }
}
@-webkit-keyframes gradient-move {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>
