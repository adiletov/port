<template>
  <div class="container contacts-block" id="contacts">
    <h1>Контакты</h1>
     <div class="contacts-block-cards">
       <div class="contacts-block-cards-card">
         <a class="contacts-block-cards-card-icon" href="mailto:nrdl777@gmail.com" target="_blank"><img v-bind:src="gmail" alt="gmail"></a>
       </div>
       <div class="contacts-block-cards-card">
         <a class="contacts-block-cards-card-icon" href="https://telegram.me/adil_adiletov" target="_blank">
           <img v-bind:src="telega" alt="gmail">
         </a>
       </div>
       <div class="contacts-block-cards-card">
         <a class="contacts-block-cards-card-icon" href="https://wa.me/996707009090" target="_blank"><img v-bind:src="whatsapp" alt="whatsapp"></a>
       </div>
     </div>
  </div>
</template>


<script>
import telega from "@/assets/telega.png";
import gmail from "@/assets/gmail.png";
import whatsapp from "@/assets/whatsapp.png";
export default {
  data: () => ({
    telega,
    gmail,
    whatsapp
  })
}
</script>

