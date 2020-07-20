import Vue from "vue";
import "./plugins/vuetify";
import * as firebase from "firebase";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.prototype.$firebase = firebase;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyCDczduVbCQ0fYNhLx0DBzcx4HtltzbSNo",
      authDomain: "attendx-35a5c.firebaseapp.com",
      databaseURL: "https://attendx-35a5c.firebaseio.com",
      projectId: "attendx-35a5c",
      storageBucket: "attendx-35a5c.appspot.com"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoSignIn", user);
      }
    });
    this.$store.dispatch("loadclasses");
  }
}).$mount("#app");

