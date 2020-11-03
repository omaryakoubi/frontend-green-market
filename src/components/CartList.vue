<template>
  <div>
    <v-layout row wrap>
      <v-flex v-for="item in cart" :key="item.index">
      {{item.name}}
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "CartList",
  data() {
      return {
          cart:""
      }
  },

  created() {
      this.cart = this.$store.getters.GET_CART
  }
};
</script>
