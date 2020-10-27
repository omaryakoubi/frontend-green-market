<template>
  <v-layout row wrap>
    <v-flex lg1></v-flex>
    <v-flex xs12 sm5 md3 lg2 v-for="product in products" :key="product.name">
      <v-card
        :loading="loading"
        class="mx-auto my-12"
        mix-width="220"
        max-width="170"
      >
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
            class="mx-2"
            color="green lighten-1"
            text
          >Add to cart 
          <v-icon>
            mdi-cart
          </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
     <v-flex lg1></v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      products: [
        {
          name: "Kiwi",
          image:
            "https://lh3.googleusercontent.com/proxy/artP1lc8GWYgTuuMMA8y5YeizuRQLE6AHfycJzSliPvYCwZFLeiaf8NYwVsynBqx5XG5b14sGA492ucE97zcJ3Kw68sz82rj6rcQuQGz8XGcW3mpCgqVZSSeCQ",
          description: "very good quality",
          price: 8,
        },
        {
          name: "Tomato",
          image:
            "https://images.wallpaperscraft.com/image/tomatoes_tomato_ripe_vegetable_106889_1920x1080.jpg",
          description: "fresh tunisian quality",
          price: 3,
        },
        {
          name: "Potato",
          image: "https://cutewallpaper.org/21/potato-backgrounds/Peeling-Potatoes-Wallpapers-Hd-Type-Of-Food-Is-Amylase-.jpg",
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
          image: "https://static.lecomptoirlocal.fr/img/produits/4fa0020a-5e7d-49b7-90c2-153d5bae7e17/large.jpg",
          description: "mushroom of paris",
          price: 10,
        },

      ],
    };
  },
};
</script>

<style scoped></style>
