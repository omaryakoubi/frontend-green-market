<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Green</span>
        <span>Market</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text tile color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped></style>
