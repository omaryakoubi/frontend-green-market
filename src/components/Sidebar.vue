<template>
  <v-navigation-drawer app class="green" v-model="drawer">
    <v-list>
      <v-list-item class="mx-10">
        <v-list-item-action>
          <v-avatar class="grey lighten-4" size="128">
            <v-img src="../assets/leaf-logo.jpg"></v-img>
          </v-avatar>
        </v-list-item-action>
        <v-list-item-content> </v-list-item-content>
      </v-list-item>

      <v-list-item class="mx-14">
        <v-list-item-content>
          <v-list-item-title class="white--text display-1"
            >Omar</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action>
          <v-icon class="white--text"> mdi-account-circle</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="white--text">Account</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action>
          <v-icon class="white--text">mdi-view-quilt</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="white--text"
            >All products</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action>
          <v-icon class="white--text">mdi-cart</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="white--text">Cart</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action>
          <v-icon class="white--text">mdi-exit-to-app</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="white--text">Sign Out</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",

  data() {
    return {
      drawer: "",
    };
  },

};
</script>

<style scoped></style>
