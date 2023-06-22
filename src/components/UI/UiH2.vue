<template>
  <h2>
    <slot></slot>
    <a :href="textlink" class="hash"> # </a>
  </h2>
</template>
<script>
export default {
  props: ["textlink"],
};
</script>
<style scoped>
h2 {
  padding: 0.7rem 0;
  padding: 0.6cqi 0;
  margin: 10px 0;
  margin-top: 0;
  font-size: var(--size-med);
  font-weight: 900;
  background: #ae43ff1a;
  color: white;
}
h2:hover .hash,
.hash:hover {
  color: var(--color-white);
  opacity: 1;
}
.hash {
  text-shadow: 2px 2px 1px var(--highlight-violet);
  opacity: 0;
}
</style>
