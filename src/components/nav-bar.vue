<template>
  <ol id="header-wrapper">
    <li id="logo-list">
      <h1 class="logo">Harshit Shivhare</h1>
    </li>
    <li>
      <div @click="toggleHam" ref="ham" class="hamburger hamburger--emphatic-r">
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
    </li>
  </ol>
  <aside ref="asideNav">
    <nav>
      <ol>
        <li class="nav-list">
          <a> Home </a>
        </li>

        <li class="nav-list">
          <a> Projects </a>
        </li>
      </ol>
    </nav>
  </aside>
</template>
<script>
export default {
  name: "nav-bar",
  methods: {
    toggleHam() {
      const ham = this.$refs.ham;
      const asideNav = this.$refs.asideNav;
      ham.classList.toggle("is-active");
      asideNav.classList.toggle("is-active");
    },
  },
};
</script>

<style scoped src="../styles/nav-bar.css"></style>
