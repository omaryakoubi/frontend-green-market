<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon class="grey--text ml-2" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="green--text">Green</span>
        <span class="font-weight-light">Market</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-navigation-drawer app class="green" v-model="drawer" >
      <v-list>
        <v-list-item class="mx-10">
          <v-list-item-action>
           <v-avatar class="grey lighten-4" size="128">
             <v-img src="../assets/leaf-logo.jpg"></v-img>
             </v-avatar>
          </v-list-item-action>
          <v-list-item-content>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="mx-14">
          <v-list-item-content>
            <v-list-item-title class="white--text display-1">Omar</v-list-item-title>
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
            <v-list-item-title class="white--text">All products</v-list-item-title>
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
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false
    };
  },

};
</script>

<style scoped></style>
