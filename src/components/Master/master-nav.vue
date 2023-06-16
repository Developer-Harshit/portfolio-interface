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
@tailwind base;
@tailwind components;
@tailwind utilities;
#header-wrapper {
  @apply flex sticky -z-20 justify-between justify-items-start bg-purple-900;
  background-color: blueviolet;

  padding: 2svh;
  width: 100%;
}

/* backdrop */

aside {
  @apply text-right absolute z-10 right-0 bg-slate-950;
  text-align: -webkit-right;
  height: 100vh;
  height: 100svh;
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
  transition: all cubic-bezier(0.73, -0.03, 0.33, 1.1) 0.5s;
}
nav ol {
  display: flex;
  @apply flex-col;
}
.nav-item {
  @apply w-6 h-6 bg-purple-700;
}

li {
  @apply self-center m-4;
}
.logo {
  font-size: 3svh;
}
</style>
