<template>
  <nav>
    <ol id="nav-wrapper">
      <li>
        <a href="https://www.google.com/">
          <img src="../../assets/NavIcons/home.svg" alt="Home Icon" />
        </a>
      </li>
      <li>
        <a href="https://www.google.com/">
          <img src="../../assets/NavIcons/contact.svg" alt="Contact Icon" />
        </a>
      </li>
      <li>
        <a href="https://www.google.com/">
          <img src="../../assets/NavIcons/plant.svg" alt="Projects Icon" />
        </a>
      </li>
      <li>
        <a href="https://www.google.com/">
          <img src="../../assets/NavIcons/theme.svg" alt="Theme Icon" />
        </a>
      </li>
    </ol>
  </nav>
</template>
<script>
export default {
  name: "nav-bar",

  data() {
    return {
      navData: [
        {
          name: "Home Icon",
          link: "../../assets/NavIcons/home.svg",
          href: "google.com",
        },
      ],
      sourceLink: "../../assets/NavIcons/",
    };
  },
  methods: {},
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
* {
  transition: all cubic-bezier(0.31, -0.27, 0, 1.59) 0.5s;
}
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
img {
  height: 4svh;
  height: max(4svh, 4svw);
  width: 4svh;
  width: max(4svh, 4svw);
  filter: invert(18%) sepia(93%) saturate(7283%) hue-rotate(260deg)
    brightness(89%) contrast(96%);
}
li {
  padding: 1cqi;
  margin: 0;

  background-color: var(--background-base);
  border-radius: 50%;
}
li:hover {
  background-color: rgb(93, 62, 172);
  transform: scale(1.1);
}
li:hover img,
a:active img {
  filter: invert(9%) sepia(59%) saturate(2436%) hue-rotate(246deg)
    brightness(20%) contrast(95%);
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 1s;
  }
}
</style>
