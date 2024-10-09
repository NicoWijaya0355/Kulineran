<template>
  <div class="home">
    <AppNavbar />
    <div class="container">
      <HeroSection />

      <div class="row mt-4">
        <div class="col">
          <h2>
            Best
            <strong>Foods</strong>
          </h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success float-right">
            <b-icon-eye></b-icon-eye>Lihat Semua
          </router-link>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-4 mt-d" v-for="product in products" :key="product.id">
          <CardSection :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppNavbar from "@/components/Navbar.vue";
import HeroSection from "@/components/Hero.vue";
import CardSection from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    AppNavbar,
    HeroSection,
    CardSection
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error ))
     
  }
};
</script>
