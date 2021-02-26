<template>
  <div v-on:scroll="handlerScroll">
    <Header v-bind:scrollData="scroll" />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/UI/Header";

export default {
  name: "MainLayout",
  data: () => ({
    scroll: 0
  }),
  components: {
    Header
  },
  methods: {
    handlerScroll() {
      this.scroll = window.scrollY;
    }
  },
  created() {
    window.addEventListener("scroll", this.handlerScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handlerScroll);
  }

};
</script>
