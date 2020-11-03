<template>
  <v-app>
    <Navbar />
    <Sidebar />
    <CartList />
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import CartList from "../components/CartList.vue";
export default {
  components: { Navbar, Sidebar, CartList },
};
</script>
