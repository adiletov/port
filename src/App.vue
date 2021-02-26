<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import AdminLayout from "@/components/Layouts/AdminLayout";
import MainLayout from "@/components/Layouts/MainLayout";
  export default {
    computed:{
      layout(){
        return this.$route.meta.layout + '-layout' || 'main-layout'
      }
    },
    components: {
      AdminLayout, MainLayout
    }
  }

</script>

<style>
/*@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');*/
/*@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');*/
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
/*@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');*/
</style>
