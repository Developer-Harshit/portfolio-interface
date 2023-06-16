<template>
  <div id="aboutme">
    <typeWriter :text="title" should-start="true" write-speed="7"></typeWriter>
    <typeWriter :text="desc" should-start="true" write-speed="3"></typeWriter>
  </div>
</template>
<script>
import typeWriter from "./Sketch/type-writer.vue";
export default {
  data() {
    return {
      title: "helo Im a web developer",
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore possimus asperiores, vitae numquam porro iste magnam repellat voluptatum ducimus, sit fuga sint fugiat soluta deserunt officiis alias ipsa dolores enim dolor? Dolorum distinctio, vel est laboriosam beatae harum, adipisci quo totam iusto provident corporis. Facilis nihil dolore blanditiis. Laborum repellendus, labore nam eum harum, deserunt maxime incidunt sed similique minus sint nostrum reprehenderit officia corporis earum rem esse, accusantium et facilis recusandae? Aut reiciendis doloremque amet iusto voluptatum impedit laboriosam.`,
    };
  },
  components: { typeWriter },
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
