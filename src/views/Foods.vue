<template>
  <div>
    <AppNavbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>
            Daftar
            <strong>Makanan</strong>
          </h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            
             <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Makanan Kesukaan Anda .."
              aria-label="Cari"
              aria-describedby="basic-addon1"
              @keyup="searchFood"
            />
            <span class="input-group-text" id="basic-addon1">
              <b-icon-search></b-icon-search></span>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-4 mt-d" v-for="product in products" :key="product.id">
          <CardSection :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from "@/components/Navbar.vue";
import CardSection from "@/components/CardProduct.vue";
import axios from "axios";
export default {
  name: "FoodList",
  components: {
    AppNavbar,
    CardSection
  },
  data() {
    return {
      products: [],
      search : '',
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    searchFood() {
      axios
      .get("http://localhost:3000/products?q="+this.search)
      .then(response => this.setProduct(response.data))
      .catch(error => console.log(error));
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then(response => this.setProduct(response.data))
      .catch(error => console.log(error));

      
  }
};
</script>

<style>
</style>