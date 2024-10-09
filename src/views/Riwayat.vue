<template>
  <div class="keranjang">
    <AppNavbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <!-- <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark">Foods</router-link>
              </li> -->
              <!-- <li class="breadcrumb-item active" aria-current="page">Riwayat</li> -->
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>Riwayat<strong>Pemesanan</strong></h2>
          <h2>Total Omset: Rp. {{ totalOmset }}</h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr align="center">
                  <th scope="col">#</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Nomor Meja</th>
                  <th scope="col">Total Harga Pemesanan</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(pesanan, index) in pesanans" :key="pesanan.id" align="center">
                  <th>{{ index + 1 }}</th>
                  <td><strong>{{ pesanan.nama }}</strong></td>
                  <td>{{ pesanan.noMeja }}</td>
                  <td ><strong>Rp. {{ calculateTotal(pesanan.keranjangs) }}</strong></td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from "@/components/Navbar.vue";
import axios from 'axios';

export default {
  name: "RiwayatDetail",
  components: {
    AppNavbar
  },
  data() {
    return {
      pesanans: []
    };
  },
  methods: {
    setPesanans(data) {
      this.pesanans = data;
     
    },
    calculateTotal(keranjangs) {
        // Pastikan kita memiliki data keranjangs
        if (!keranjangs || keranjangs.length === 0) return 0;

        return keranjangs.reduce((total, keranjang) => {
            

            // Jika products adalah array
            if (Array.isArray(keranjang.products)) {
                
                const subtotal = keranjang.products.reduce((subtotal, product) => {
                    
                    const jumlah = parseInt(product.jumlah_pemesanan) || 0;
                    const harga = product.harga || 0;
                    return subtotal + (jumlah * harga);
                }, 0);
                return total + subtotal;
            }
            // Jika products adalah objek
            else if (keranjang.products && typeof keranjang.products === 'object') {
                
                const jumlah = keranjang.jumlah_pemesanan || 0;
                const harga = keranjang.products.harga || 0;
                
                return total + (jumlah * harga);
            }
            return total; // Jika tidak ada produk, kembalikan total yang ada
        }, 0);
    }

  },
  mounted() {
    axios
      .get("http://localhost:3000/pesanans")
      .then((response) => {
        this.setPesanans(response.data);
        console.log("Data pesanan:", response.data); // Cek data di sini
        
      })
      .catch((error) => console.log(error));
  },
  computed: {
    totalOmset() {
      return this.pesanans.reduce((total, pesanan) => {
        return total + this.calculateTotal(pesanan.keranjangs);
      }, 0);
    }
  },
};
</script>

<style>
</style>
