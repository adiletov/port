<template>
  <div>
    <DescriptionPage/>
    <Skills/>
    <Contacts/>
  </div>
</template>

<script>
// @ is an alias to /src
import DescriptionPage from "@/components/UI/DescriptionPage"
import Skills from "@/components/UI/Skills"
import Contacts from "@/components/UI/Contacts"
export default {
  name: "Home",
  components:{
    DescriptionPage, Skills, Contacts
  }
};
</script>
