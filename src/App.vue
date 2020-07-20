<template>
  <v-app>
    <v-toolbar top dark>
      <v-toolbar-side-icon @click.native.stop="sideNav= !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">ATTENDX</router-link>
      </v-toolbar-title>
      <VSpacer/>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left v-if="item.icon !== ''">{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <v-btn flat @click="onLogout" v-if="userIsAuthenticated">
          <v-icon left>account_circle</v-icon>Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      userIsAuthenticated: false
    };
  },
  created() {
    let _this = this;
    this.$firebase.auth().onAuthStateChanged(user => {
      if (user) _this.userIsAuthenticated = true;
      else _this.userIsAuthenticated = false;
    });
  },
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "face", title: "Sign up", link: "/signup" },
        { icon: "lock_open", title: "Sign in", link: "/signin" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: "", title: "New Class", link: "/newclass" },
          { icon: "", title: "My classes", link: "/myclasses" },
          { icon: "account_circle", title: "Profile", link: "/profile" }
        ];
      }
      return menuItems;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout", {
        router: this.$router
      });
    }
  }
};
</script>

<style lang="css">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
