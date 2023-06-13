<script>
import HelloWorld from "./components/hello-world.vue";
import HeroSection from "./components/hero-section.vue";

import AboutDiv from "./components/about-div.vue";
import NavBar from "./components/nav-bar.vue";
import { setDim, handleScroll } from "./scripts/progress-util";
export default {
  components: { HelloWorld, NavBar, HeroSection, AboutDiv },
  data() {
    return {
      sketch: false,
      hello: "world",
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
      setDim(this);
      // your code for handling resize...
    },
    handleScroll(e) {
      handleScroll(this);
    },
  },
};
</script>

<template>
  <div id="progress-bar"></div>
  <header>
    <nav-bar></nav-bar>
  </header>
  <main>
    <hero-section>
      <template #hero-slot>
        <about-div></about-div>
      </template>
    </hero-section>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo m-auto" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue m-auto" alt="Vue logo" />
      </a>
    </div>
    <hello-world msg="Vite + Vue" />
    <hello-world msg="Vite + Vue" />
    <hello-world msg="Vite + Vue" />
    <hello-world msg="Vite + Vue" />
  </main>
  <footer>
    <hello-world msg="Vite + Vue" />
    <hello-world msg="Vite + Vue" />
    <hello-world msg="Vite + Vue" />
    <hello-world msg="Vite + Vue" />
    <hello-world msg="Vite + Vue" />
  </footer>
</template>
<style></style>
