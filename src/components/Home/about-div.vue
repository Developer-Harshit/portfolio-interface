<template>
  <div id="aboutme">
    <h2>
      <typeWriter
        :text="title"
        should-start="true"
        write-speed="7"
      ></typeWriter>
    </h2>
    <p>{{ desc }}</p>
  </div>
</template>
<script>
import typeWriter from "../Sketch/type-writer.vue";
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
  margin: 10svh 10svw 10svh 10svw;
  min-height: 50svh;
  white-space: break-spaces;
  background-color: var(--background-one);
  background: linear-gradient(
    0deg,
    var(--background-one),
    var(--background-two)
  );
  padding: 1rem;
  border: var(--border-white);
  box-shadow: 1px 1px 15px #6725d139;
  transform: scale(0.99);
  transition: transform cubic-bezier(0.31, -0.27, 0, 1.59) 0.8s,
    box-shadow cubic-bezier(0.31, -0.27, 0, 1.59) 2s;
}
h2 {
  font-size: var(--size-med);
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--highlight-violet);
}
p {
  border-left: 5px solid var(--highlight-violet);
  margin: 1rem 0;
  padding: 0 0.5rem;
}
#aboutme:hover {
  box-shadow: 5px 5px 25px #6725d1a1;
  transform: scale(1) translateY(-2%);
}
</style>
