<template>
  <v-app class="grey lighten-2">
    <Navbar />
    <ProductCard/>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard"
export default {
  components: { Navbar, ProductCard },
};
</script>

<style scoped></style>
