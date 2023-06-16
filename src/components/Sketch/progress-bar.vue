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
        this.div.style("width", `${wPercent}svw`);
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
      console.log(this.siteHeight, this.screenHeight);
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
  width: 0px;
  height: 2svh;
  position: fixed;
  z-index: 5;
  left: 0;
  bottom: 0;
  background: rgb(39, 55, 144);
  background: linear-gradient(
    74deg,
    rgba(39, 55, 144, 1) 0%,
    rgba(198, 20, 192, 1) 100%
  );
}
</style>
