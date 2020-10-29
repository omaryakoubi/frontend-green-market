<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon
        class="grey--text ml-9"
        @click='open()'
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
      drawer: "",
    };
  },

  mounted() {
    this.drawer = this.$store.getters.GET_DRAWER;
    console.log(this.drawer)
  },

  methods: {
    open() {
      console.log(this.drawer,'nav before')
      this.$store.dispatch('SET_DRAWER')
      console.log(this.drawer,'nav after')
    },
  },
};
</script>

<style scoped></style>
