<template>
  <section>
    <div
      class="item"
      id="start"
      @mouseenter="line.show('draw')"
      @mouseleave="line.hide('draw')"
      ref="start"
    ></div>
    <div class="item" end="end" ref="end"></div>
  </section>
</template>
<script>
import LeaderLine from "./leader-line";

export default {
  data() {
    return {
      startDiv: this.$refs.start,
      endDiv: this.$refs.end,
    };
  },
  mounted() {
    this.startDiv = this.$refs.start;
    this.endDiv = this.$refs.end;
    this.line = new LeaderLine(this.startDiv, this.endDiv, {
      showEffectName: "draw",
      endPlugColor: "#535bf2",
      startPlugColor: "#535bf2",
      color: "#535bf2",
      endPlug: "disc",
      gradient: {
        endColor: "#535bf2",
        startColor: "#fff",
      },
      dropShadow: {
        dx: 0,
        dy: 10,
        blur: 5,
      },
    });
    this.line.hide();
    const that = this;
    const observer = new IntersectionObserver(function (enteries) {
      enteries.forEach(function (entry) {
        if (entry.isIntersecting) {
          that.line.show("draw");
        } else {
          that.line.hide("draw");
        }
      });
    });
    observer.observe(this.startDiv);
  },
};
</script>
<style scoped>
section {
  display: grid;
  grid-auto-columns: auto;
}
#start {
  justify-self: right;
}
.item {
  background-color: #535bf2;
  width: 50px;
  height: 50px;
  margin: 1rem;
}
</style>
