<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md6 lg4 v-for="product in products" :key="product.name">
      <v-card
        :loading="loading"
        class="mx-auto my-12"
        mix-width="220"
        max-width="220"
      >
        <template slot="progress">
          <v-progress-linear color="deep-purple" height="10" indeterminate>
          </v-progress-linear>
        </template>
        <v-img height="130" cover auto :src="product.image"></v-img>
        <v-card-title>{{ product.name }}</v-card-title>
        <v-card-text>
          <div>
            {{ product.desc }}
          </div>
          <p class="">{{ product.price }} DTN/KG</p>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
          <v-btn
            class="mx-6"
            color="green lighten-1 display-1"
            text
          >
            BUY
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      products: [
        {
          name: "kiwi",
          image:
            "https://images.wallpaperscraft.com/image/kiwi_macro_fruits_106994_1920x108.jpg",
          description: "fresh",
          price: 2,
        },
        {
          name: "tomato",
          image:
            "https://images.wallpaperscraft.com/image/tomatoes_tomato_ripe_vegetable_106889_1920x1080.jpg",
          description: "fresh",
          price: 3,
        },
        {
          name: "potato",
          image: "https://cutewallpaper.org/21/potato-backgrounds/Peeling-Potatoes-Wallpapers-Hd-Type-Of-Food-Is-Amylase-.jpg",
          description: 5,
          price: 10,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
