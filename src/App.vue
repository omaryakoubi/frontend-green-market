<template>
  <v-app class="grey lighten-2">
    <Navbar />
    <Sidebar/>
    <ProductCard/>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard"

export default {
 components: { Navbar, ProductCard, Sidebar },
};
</script>

<style scoped></style>
