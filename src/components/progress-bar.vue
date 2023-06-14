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
      myDiv: false,
    };
  },

  mounted() {
    // this.setDim();
    // this.handleScroll();
    const that = this;

    function setDim() {
      var body = document.body,
        html = document.documentElement;

      that.siteHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      that.screenHeight = window.outerHeight;
      // your code for handling resize...
    }
    function handleScroll() {
      that.scrollVal = window.scrollY;
      that.scrollPercent =
        (that.scrollVal / (that.siteHeight - that.screenHeight)) * 100;
    }
    class ProgressBar {
      constructor(p5) {
        this.div = p5.select("#progress-bar");
      }

      setWidth(wPercent) {
        this.div.style("width", `${wPercent}%`);
      }
    }
    var bar;
    const mySketch = function (p5) {
      p5.setup = () => {
        p5.noCanvas();
        bar = new ProgressBar(p5);
        bar.setWidth(that.scrollVal);
        setDim();
        handleScroll();
        window.addEventListener("resize", setDim);
        window.addEventListener("scroll", handleScroll);
      };

      p5.draw = () => {
        bar.setWidth(that.scrollPercent + 2);
        if (that.idDestoryed) {
        }
      };
    };

    new p5(mySketch);
    console.log("Sketch Created");
  },
  destroyed() {
    window.removeEventListener("resize", setDim);
    window.removeEventListener("scroll", handleScroll);
  },
  methods: {
    // setDim(e) {
    //   var body = document.body,
    //     html = document.documentElement;
    //   this.siteHeight = Math.max(
    //     body.scrollHeight,
    //     body.offsetHeight,
    //     html.clientHeight,
    //     html.scrollHeight,
    //     html.offsetHeight
    //   );
    //   this.screenHeight = window.outerHeight;
    //   // your code for handling resize...
    // },
    // handleScroll(e) {
    //   this.scrollVal = window.scrollY;
    //   this.scrollPercent =
    //     (this.scrollValue / (this.siteHeight - this.screenHeight)) * 100;
    // },
  },
};
</script>
