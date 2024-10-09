<template>
  <div id="app">
 
    <router-view/>
    <FooterSection />
    
  </div>
</template>

<script>
import FooterSection from "@/components/Footer.vue"

export default {
  components: {
    FooterSection
  }
}
</script>