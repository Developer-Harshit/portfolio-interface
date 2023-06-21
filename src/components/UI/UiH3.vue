<template>
  <h3><slot></slot></h3>
</template>
<style scoped>
h3 {
  font-size: var(--size-med);
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--highlight-violet);
  text-shadow: 1px 1px 1px #ffffffd9;
}
@media (max-width: 270px) {
  h3 {
    font-size: var(--size-med2);
  }
}
</style>
