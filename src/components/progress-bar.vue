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
    };
  },

  mounted() {
    // this.setDim();
    // this.handleScroll();

    // function setDim() {
    //   var body = document.body,
    //     html = document.documentElement;

    //   that.siteHeight = Math.max(
    //     body.scrollHeight,
    //     body.offsetHeight,
    //     html.clientHeight,
    //     html.scrollHeight,
    //     html.offsetHeight
    //   );

    //   that.screenHeight = window.outerHeight;
    //   // your code for handling resize...
    // }
    // function handleScroll() {
    //   that.scrollVal = window.scrollY;
    //   that.scrollPercent =
    //     (that.scrollVal / (that.siteHeight - that.screenHeight)) * 100;
    // }
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
        bar.setWidth(that.scrollPercent + 2);
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

      this.screenHeight = window.outerHeight;
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
