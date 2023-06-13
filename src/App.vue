<script>
import HelloWorld from "./components/hello-world.vue";
import NavBar from "./components/nav-bar.vue";
import P5 from "p5";
import ProgressSketch from "./scripts/progress-sketch";
export default {
  components: { HelloWorld, NavBar },
  data() {
    return {
      p5Sketch: false,
    };
  },
  mounted() {
    console.log("mounted");

    new P5(ProgressSketch);
  },
};
</script>

<template>
  <body id="body-element">
    <div id="progress-bar"></div>
    <header>
      <nav-bar></nav-bar>
    </header>
    <main>
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
  </body>
</template>
<style></style>
