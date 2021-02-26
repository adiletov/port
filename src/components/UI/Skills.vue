<template>
  <div class="container skills-block">
    <h1>Умения и Навыки</h1>

    <div id="lists" class="skills-block-cards">
      <div class="card" v-for="skill in skills" :key="skill.title">
        <Card v-bind:title="skill.title" v-bind:skills="skill.arr"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/UI/Card";
export default {
  data: () => ({
    el: "#lists",
    skills: [
      { title: "Дизайн", arr: ["Figma", "Adobe Photoshop"] },
      { title: "Программирование", arr: ["JavaScript", "Node.js / Next.js", "Git", "React / Redux", "Vue / Vuex"] },
      { title: "Верстка", arr: ["HTML / CSS", "SASS / SCSS",  "Material UI", "Core UI"] },
      { title: "Фреймворки", arr: ["React", "Vue"] }
    ]
  }),
  components:{
    Card
  }
};
</script>
