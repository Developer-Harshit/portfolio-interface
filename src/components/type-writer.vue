<template>
  <p class="typePara">
    {{ visibleText }} <span v-if="isPointer" class="typeSpan">|</span>
  </p>
</template>
<script>
import p5 from "p5";

export default {
  name: "type-writer",
  props: ["text", "lastChild", "speed"],
  data: function () {
    return {
      visibleText: "",
      isPointer: true,
      isFinished: false,
      finalText: this.$props.text,
      index: 0,
      timer: -1,
      frame: 0,
      speed: Number(this.$props.speed),
    };
  },

  methods: {
    togglePointer(speed = 15) {
      if (this.frame % speed == 0) this.isPointer = !this.isPointer;
    },
    writeText(word) {
      if (word && this.timer <= 0)
        this.visibleText = this.visibleText + `${word}`;

      this.index += 1;
    },
    updateText() {
      if (this.isFinished) return;
      if (this.frame % this.speed == 0 && this.timer <= 0) {
        if (this.index < this.finalText.length) {
          const word = this.finalText[this.index];
          this.writeText(word);
          if (word == " " && this.timer <= -1) this.timer = 2;
        } else {
          this.isFinished = true;
        }
      } else this.timer -= 1;
    },
  },
  mounted() {
    const that = this;
    const newSketch = function (p5) {
      p5.setup = () => {
        p5.noCanvas();
      };

      p5.draw = () => {
        that.frame += 1;

        that.togglePointer();
        that.updateText();
      };
    };

    new p5(newSketch);
  },
};
</script>
