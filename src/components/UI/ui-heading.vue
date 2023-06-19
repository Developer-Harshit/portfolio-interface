<template>
  <div class="container">
    <div class="gradient">
      <h1>
        <slot></slot>
      </h1>
      <p><slot name="desc"></slot></p>
    </div>
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
@import url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap");
/*

div {
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
*/
/* Others*/

@property --gradient-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
.container {
  padding: 0.3rem;
  margin: auto;
  position: relative;
  z-index: 1;
  background-color: #4158d0;
  --gradient-contain: conic-gradient(
    from var(--gradient-angle),
    #4819ca 0%,
    #933adc 25%,
    #8b40dc 50%,
    #b32bcb 75%,
    #2b19ca 100%
  );
  background-image: var(--gradient-contain);
  animation: gradient-move 10s linear infinite;
  filter: brightness(150%);
}

@keyframes gradient-move {
  0% {
    --gradient-angle: 0deg;
  }
  50% {
    --gradient-angle: 180deg;
  }
  100% {
    --gradient-angle: 360deg;
  }
}
.container:before {
  content: "";
  z-index: -1;
  position: absolute;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  background-image: inherit;
  background-image: var(--gradient-contain);
  filter: var(--filter-blur);
}

.gradient {
  padding: 0.3rem;
  min-height: 20svh;
  overflow: hidden;

  background-color: #230731ea;
  font-family: "Nanum Pen Script", cursive;
}
h1 {
  font-size: var(--size-big);
  color: #f3e4faad;
  text-align: start;
}
p {
  margin-top: -10px;
  font-size: var(--size-small);
  color: #c3b9c2c5;
  display: block;
}
</style>
