<template>
  <div class="d-flex justify-space-around mb-6">
    <v-btn class="red lighten-5 pa-2" outlined fab small @click="decrement()">
      <v-icon class="red--text">mdi-minus-box</v-icon>
    </v-btn>
    {{ number }}
    <v-btn class="green lighten-5 pa-2" outlined fab small @click="increment()">
      <v-icon class="green--text">mdi-plus-box</v-icon>
    </v-btn>
  </div>
</template>


<script>
export default {
  name: "NumberInput",
  data() {
    return {
      number: 0,
    };
  },

  methods: {
    increment() {
      this.number += 1;
    },

    decrement() {
      if (this.number > 0) {
        this.number -= 1;
      }
    },
  },
};
</script>

<style scoped></style>
