<template>
  <div id="aboutme">
    <ui-h2>About Me</ui-h2>
    <ui-h3>
      <typeWriter
        :text="title"
        should-start="true"
        write-speed="7"
      ></typeWriter>
    </ui-h3>
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
  margin: 10svh 0 10svh 0;
  white-space: break-spaces;
}

p {
  border-left: 5px solid var(--highlight-violet);
  margin: 1rem 0;
  padding: 0 0.5rem;
}
/*
#aboutme:hover {
  box-shadow: 5px 5px 15px #6725d13a;
  transform: scale(1) translateY(-1%);
}
*/
@media (prefers-reduced-motion: reduce) {
  #aboutme:hover {
    box-shadow: inherit;
    transform: none;
  }
  #aboutme {
    transform: none;
    transition: none;
  }
}
</style>
