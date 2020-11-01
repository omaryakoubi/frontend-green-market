<template>
  <v-app>
    <Navbar />
    <Sidebar />
    <ProductCard />
    <Cart />
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import ProductCard from "../components/ProductCard.vue";
import Cart from "../components/Cart.vue";

export default {
  name: "Home",
  components: { Navbar, ProductCard, Sidebar, Cart },
};
</script>
