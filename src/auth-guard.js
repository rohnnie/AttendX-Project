import store from "./store";
import firebase from "firebase";
export default (to, from, next) => {
  firebase.auth().onAuthStateChanged(user => {
    if (to.path === "/signin" || to.path === "/signup") {
      if (user) next("/");
      else next();
    } else {
      if (user) next();
      else {
        next("/signin");
      }
    }
  });
};
