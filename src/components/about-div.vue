<template>
  <div id="aboutme">
    <h2>
      {{ aboutTitle }} <span v-if="titlePointer" class="typeSpan">|</span>
    </h2>
    <p class="typePara">
      {{ aboutText }} <span v-if="pointer" class="typeSpan">|</span>
    </p>
  </div>
</template>
<script>
export default {
  name: "about-div",
  props: ["aboutText", "pointer", "aboutTitle", "titlePointer"],
  data: function () {
    return {};
  },

  methods: {
    changeVars(pointer, textData) {
      console.log(this.text);
      this.pointer = pointer;
      this.text = textData;
    },
  },
};
</script>
<style scoped>
#aboutme {
  margin: 20svh 10svw 30svh 10svw;
  max-height: 100svh;
  min-height: 50svh;
  white-space: break-spaces;
}
</style>
