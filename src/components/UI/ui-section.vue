<template>
  <section id="hero">
    <slot name="hero-slot"></slot>
  </section>
</template>
<script>
export default {
  name: "ui-section",
};
</script>
<style scoped>
section {
  background-color: #00000045;
  margin: 0 1rem;
}
</style>
