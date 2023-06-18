<template>
  <div>
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>
<script>
export default {
  props: ["title-text"],
  name: "ui-heading",
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap");
div {
  height: 20svh;
  padding: 0svh 0 10svh 0;
  margin: auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  background: linear-gradient(180deg, #8420f7 10%, #b033f4 100%);
}
h1 {
  font-family: "Kalam", sans-serif;
  text-align: center;
  font-weight: bolder;
  font-size: var(--size-big);
}
</style>
