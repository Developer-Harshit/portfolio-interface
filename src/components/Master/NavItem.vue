<template>
  <li>
    <a :href="navObj.href">
      <component :is="navObj.svg" class="mySvg"></component>
    </a>
  </li>
</template>
<script>
import SvgHome from "../SVGS/SvgHome.vue";
import SvgContact from "../SVGS/SvgContact.vue";
import SvgProject from "../SVGS/SvgProject.vue";
import SvgTheme from "../SVGS/SvgTheme.vue";
export default {
  name: "nav-item",
  components: {
    SvgHome,
    SvgContact,
    SvgProject,
    SvgTheme,
  },
  props: ["navObj"],
};
</script>
<style scoped>
* {
  transition: transform cubic-bezier(0.31, -0.27, 0, 1.59) 0.5s,
    filter cubic-bezier(0.31, -0.27, 0, 1.59) 0.5s,
    background-color cubic-bezier(0.31, -0.27, 0, 1.59) 0.5s;
}
.mySvg {
  height: 4svh;
  height: min(4svh, 4svw);
  width: 4svh;
  width: min(4svh, 4svw);
  filter: invert(18%) sepia(93%) saturate(7283%) hue-rotate(260deg)
    brightness(89%) contrast(96%);
}
li {
  padding: 1cqi;
  margin: 0;

  background-color: var(--background-base);
  border-radius: 20%;
}
li:hover {
  background-color: var(--highlight-violet);
  transform: scale(1.1);
}

li:hover .mySvg,
a:active .mySvg {
  filter: invert(84%) sepia(16%) saturate(351%) hue-rotate(208deg)
    brightness(111%) contrast(95%);
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 1s;
  }
}
</style>
