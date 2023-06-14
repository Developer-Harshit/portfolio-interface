<script>
import HelloWorld from "./components/hello-world.vue";
import HeroSection from "./components/hero-section.vue";

import AboutDiv from "./components/about-div.vue";
import NavBar from "./components/nav-bar.vue";
import ProgressBar from "./components/progress-bar.vue";
export default {
  components: { HelloWorld, NavBar, HeroSection, AboutDiv, ProgressBar },
  data() {
    return {};
  },
};
</script>

<template>
  <progress-bar></progress-bar>
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
<style>
.typePara,
.typeSpan {
  font-size: 1rem;
}
.typeSpan {
  display: inline-block;
  color: rgba(0, 0, 0, 0.571);
  font-weight: 900;
  transform: scaleX(2);
}
</style>
