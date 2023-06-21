<template>
  <span class="typePara">
    {{ visibleText }}
    <span class="typeSpan show" ref="typeSpan">|</span>
  </span>
</template>
<script>
import p5 from "p5";

export default {
  name: "type-writer",
  props: ["text", "lastChild", "writeSpeed"],
  data: function () {
    return {
      visibleText: "",
      isPointer: true,
      isFinished: false,
      finalText: this.$props.text,
      index: 0,
      timer: -1,
      frame: 0,
      speed: Number(this.$props.writeSpeed),
    };
  },
  watch: {
    isPointer() {
      const pointer = this.$refs.typeSpan;
      pointer.classList.toggle("show");
    },
  },
  methods: {
    togglePointer(speed = 20) {
      if (!this.isFinished) return;
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
<style>
.typeSpan {
  display: inline-block;
  color: var(--highlight-violet);
  font-weight: 900;
  transform: scaleX(2);
  opacity: 0;
}
.show {
  opacity: 1;
}
</style>
