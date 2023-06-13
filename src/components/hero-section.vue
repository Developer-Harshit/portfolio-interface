<template>
  <section id="hero">
    <slot name="hero-slot"></slot>
  </section>
</template>
<script>
export default {
  name: "hero-section",
};
</script>
<style scoped>
#hero {
  padding-top: 5rem;
}
</style>
