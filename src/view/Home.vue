<template>
  <v-app>
    <Navbar />
    <ProductCard />
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "Home",
  components: { Navbar, ProductCard },
};
</script>
