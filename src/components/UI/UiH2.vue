<template>
  <h2>
    <slot></slot>
    <a href="" class="hash"> # </a>
  </h2>
</template>

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
  opacity: 1;
}
.hash {
  color: var(--highlight-blue);
  opacity: 0;
}
</style>
