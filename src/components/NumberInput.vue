<template>
  <div>
    <v-btn class="white lighten-1">
      <v-icon class="red--text ">mdi-minus-box</v-icon>
    </v-btn>
    <v-btn class="lighten-1">
        {{number}}
    </v-btn>
    <v-btn class="lighten-1" @click="addOne">
      <v-icon class="green--text lighten-1">mdi-plus-box</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "NumberInput",
  data() {
      return {
          number:0
      }
  },

  methods:{
      addOne() {
          if (this.number <=0 ) {
              this.number +=1
          } else {
              return null
          }
      }
  }
};
</script>

<style scoped></style>
