<template>
  <ol id="header-wrapper">
    <li id="logo-list">
      <h1 class="logo">Harshit Shivhare</h1>
    </li>
    <li>
      <div
        @click="toggleHam"
        ref="ham"
        :class="[{ 'is-active': isActive }]"
        class="hamburger hamburger--emphatic-r"
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
    </li>
  </ol>

  <aside :class="[{ 'is-active': isActive }]" ref="asideNav">
    <nav>
      <ol>
        <li>
          <div class="nav-item"></div>
        </li>

        <li>
          <div class="nav-item"></div>
        </li>
      </ol>
    </nav>
  </aside>
</template>
<script>
export default {
  name: "nav-bar",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleHam() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
#header-wrapper {
  background-color: blueviolet;

  padding: 2svh;
  display: flex;
  justify-items: start;
  position: sticky;
  z-index: 5;
  width: 100%;

  justify-content: space-between;
}

/* backdrop */
aside {
  text-align: right;
  text-align: -webkit-right;
  height: 100svh;

  position: absolute;
  height: 100svh;
  right: 0;

  z-index: 2;
  transform: translateX(max(15svw, 50px));
  transition: all ease-in 0.5s;
}
.is-active {
  transform: translateX(0);
}
nav {
  min-width: 50px;
  width: 15svw;
  height: 100%;
  background-color: rgb(74, 0, 1274);
  transition: all cubic-bezier(0.73, -0.03, 0.33, 1.1) 0.5s;
}
nav ol {
  display: flex;
  flex-direction: column;
}
.nav-item {
  width: 25px;
  height: 25px;
  background-color: blueviolet;
}

li {
  align-self: center;
  margin: 1rem;
}
.logo {
  font-size: 3svh;
}
</style>
