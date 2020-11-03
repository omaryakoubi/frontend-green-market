<template>
  <v-app>
    <center>
      <v-layout row wrap class="mb9">
        <v-flex v-for="item in cart" :key="item.index">
          {{ item.name }}
        </v-flex>
      </v-layout>
    </center>
  </v-app>
</template>

<script>
export default {
  name: "CartList",
  data() {
    return {
      cart: "",
    };
  },

  created() {
    this.cart = this.$store.getters.GET_CART;
  },
};
</script>
