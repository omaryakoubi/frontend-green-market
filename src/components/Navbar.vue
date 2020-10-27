<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon
        class="grey--text ml-9"
        @click="drawerControl()"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="green--text">Green</span>
        <span class="font-weight-light">Market</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
    };
  },

  methods: {
    drawerControl() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style scoped></style>
