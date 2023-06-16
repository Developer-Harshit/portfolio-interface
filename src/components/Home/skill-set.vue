<template>
  <section class="skill-section">
    <section class="skill-segment">
      <div v-for="n in 5" class="skill-item" :key="n" :class="returnClasses(n)">
        <img src="../../assets/js-logo.png" alt="javascript logo" />
        <p>{{ n }}</p>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: "skill-set",
  methods: {
    returnClasses(n) {
      if (n == 1) {
        return [`start${n}`];
      }
      if (n == 5) {
        return [`end${n - 1}`];
      }
      return [`start${n}`, `end${n - 1}`];
    },
  },
};
</script>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .skill-section {
    @apply flex gap-4 flex-col;
  }
  .skill-segment {
    @apply grid gap-5 col-auto;
  }
  .skill-item {
    @apply justify-self-start;
  }
}
.skill-item:nth-child(odd) {
  @apply justify-self-end;
}
.skill-item img {
  @apply w-16 h-16 bg-purple-900;
}
</style>
