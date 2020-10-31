<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon
        class="grey--text ml-9"
        @click="drawerOpen"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="green--text">Green</span>
        <span class="font-weight-light">Market</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
          <v-btn
            class="mx-6"
            color="green lighten-1"
            text>
            <v-icon>mdi-cart</v-icon>
            your cart
          </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    drawerOpen() {
      this.$store.dispatch("SET_DRAWER");
    },
  },
};
</script>

<style scoped></style>
