<template>
  <v-app>
    <Sidebar />
    <Navbar />
    <ProductCard />
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "Home",
  components: { Navbar, ProductCard, Sidebar },
};
</script>
