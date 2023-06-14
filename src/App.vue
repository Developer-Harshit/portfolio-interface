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
      aboutTitle: `Hi 
I'm a Web Developer`,
      aboutText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, optio modi! Reiciendis perspiciatis fugiat exercitationem porro dicta quis, a dolores dolorum illo accusamus eveniet magni molestias eos ratione, repudiandae quisquam non ipsum dolore corporis animi pariatur distinctio amet. Veritatis tempora doloribus possimus necessitatibus! Minima provident, sunt recusandae sit soluta molestiae repellat placeat dicta consequatur eos nihil earum amet tenetur atque nemo nobis similique cumque possimus odio animi sed tempore sequi rerum! Aliquid optio obcaecati totam. Consequatur inventore autem voluptatum totam accusantium vitae quidem? Doloribus excepturi explicabo nostrum laboriosam aliquid reiciendis magni consectetur, amet quaerat nesciunt enim voluptates, vitae cumque culpa. Est aliquid illum eos, ratione, nostrum consectetur modi dolores explicabo similique obcaecati quaerat laudantium tenetur. Enim maxime expedita delectus quos.
`,
      titlePointer: false,
      pointer: false,
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
        <about-div
          :about-title="aboutTitle"
          :about-text="aboutText"
          :title-pointer="titlePointer"
          :pointer="pointer"
        ></about-div>
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
