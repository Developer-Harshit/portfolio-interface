<template>
  <div id="progress-bar"></div>
</template>
<script>
export default {
  data() {
    return {
      scrollPercent: 2,
      scrollVal: 2,
      siteHeight: false,
      screenHeight: false,
    };
  },
  created() {
    window.addEventListener("resize", this.setDim);
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.setDim();
    this.handleScroll();
  },
  destroyed() {
    window.removeEventListener("resize", this.setDim);
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    setDim(e) {
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
    handleScroll(e) {
      this.scrollValue = window.scrollY;
      this.scrollPercent =
        (this.scrollValue / (this.siteHeight - this.screenHeight)) * 100;
    },
  },
};
</script>
