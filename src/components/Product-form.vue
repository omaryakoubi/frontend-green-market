<template>
  <center>
    <div id="form">
      <vs-input label-placeholder="product name" v-model="productName" />
      <vs-input label-placeholder="category" v-model="category" />
      <vs-textarea label="Label in Textarea" v-model="description" />
      <vs-input label-placeholder="price" v-model="price" />
      <vs-button color="primary" type="filled">Submit</vs-button>
    </div>
  </center>
</template>

<script>
export default {
  name: "Productform",

  data() {
    return {
      productName: "",
      category: "",
      description: "",
      price: "",
    };
  },
};
</script>

<style lang="stylus" scoped></style>
