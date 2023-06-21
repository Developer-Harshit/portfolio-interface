<template>
  <nav>
    <ol id="nav-wrapper">
      <nav-item v-for="info in navData" :key="info.svg" :navObj="info">
      </nav-item>
    </ol>
  </nav>
</template>
<script>
import NavItem from "./NavItem.vue";
export default {
  name: "nav-bar",
  components: {
    NavItem,
  },
  data() {
    return {
      navData: [
        {
          svg: "svg-home",
          href: "google.com",
        },

        {
          svg: "svg-project",
          href: "google.com",
        },
        {
          svg: "svg-contact",
          href: "#contact-me",
        },

        {
          svg: "svg-theme",
          href: "google.com",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

ol {
  padding: 2svh 0;
  display: flex;
  @apply flex-row justify-evenly;
}
nav {
  width: 100%;
  position: fixed;
  z-index: 5;
  left: 0;
  bottom: 0;
  background: var(--background-base);
  border: var(--border-white);
}
</style>
