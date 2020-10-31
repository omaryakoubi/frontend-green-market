<template>
  <v-layout row wrap>
    <v-flex lg1>
      <div></div>
    </v-flex>
    <v-flex xs12 sm6 md3 lg2 v-for="product in products" :key="product.index">
      <v-card class="mx-auto my-9" mix-width="180" max-width="200">
        <v-img height="130" cover auto :src="product.image"></v-img>
        <v-card-title>{{ product.name }}</v-card-title>
        <v-card-text>
          <div>
            {{ product.description }}
          </div>
          <p class="">{{ product.price }} DTN/KG</p>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
          <v-btn
            class="mx-6"
            color="green lighten-1"
            text
            v-if="cart"
            @click="showInput"
          >
            add to cart
            <v-icon>mdi-cart</v-icon>
          </v-btn>
          <NumberInput v-if="numberInput" />
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex lg1>
      <div></div>
    </v-flex>
  </v-layout>
</template>

<script>
import NumberInput from "./NumberInput.vue";
export default {
  name: "ProductCard",
  components: { NumberInput },
  data() {
    return {
      cart: true,
      numberInput: false,
      products: [
        {
          name: "Tomato",
          image:
            "https://images.wallpaperscraft.com/image/tomatoes_tomato_ripe_vegetable_106889_1920x1080.jpg",
          description: "fresh tunisian quality",
          price: 3,
        },
        {
          name: "Potato",
          image:
            "https://cutewallpaper.org/21/potato-backgrounds/Peeling-Potatoes-Wallpapers-Hd-Type-Of-Food-Is-Amylase-.jpg",
          description: "very good price bio",
          price: 4,
        },
        {
          name: "Sugar",
          image: "https://wallpaperaccess.com/full/1463179.jpg",
          description: "sugar",
          price: 1,
        },
        {
          name: "Mushroom",
          image:
            "https://static.lecomptoirlocal.fr/img/produits/4fa0020a-5e7d-49b7-90c2-153d5bae7e17/large.jpg",
          description: "mushroom bio ",
          price: 10,
        },
        {
          name: "Tomato",
          image:
            "https://images.wallpaperscraft.com/image/tomatoes_tomato_ripe_vegetable_106889_1920x1080.jpg",
          description: "fresh tunisian quality",
          price: 3,
        },
      ],
    };
  },
  methods: {
    showInput() {
      this.cart = !this.cart;
      this.numberInput = !this.numberInput;
    },
  },
};
</script>

<style scoped></style>
