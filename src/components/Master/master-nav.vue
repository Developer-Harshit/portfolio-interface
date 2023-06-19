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
  transition: all cubic-bezier(0.31, -0.27, 0, 1.59) 0.2s;
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
  filter: var(--filter-shadow-dark);
  background: var(--background-base);
  border: var(--border-white);
}
img {
  height: 4svh;
  height: max(4svh, 4svw);
  width: 4svh;
  width: max(4svh, 4svw);
}
li {
  padding: 0.2rem;
  margin: 0;
  border: 1px solid transparent;
}
li:hover {
  border: var(--border-white);
  background-color: var(--background-base);
  transform: scale(1.5);

  filter: var(--filter-shadow-white);
}
li:hover img,
a:active img {
  filter: invert(99%) sepia(43%) saturate(0%) hue-rotate(252deg)
    brightness(105%) contrast(102%);
}

img {
  filter: invert(18%) sepia(93%) saturate(7283%) hue-rotate(260deg)
    brightness(89%) contrast(96%);
}
</style>
