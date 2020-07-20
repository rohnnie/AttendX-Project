import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Classes from "@/views/Classes/Class.vue";
import Newclass from "@/views/Classes/Newclass.vue";
import Myclasses from "@/views/Classes/Myclasses.vue";
import Profile from "@/views/User/Profile.vue";
import StudentProfile from "@/views/User/Studentprofile.vue";
import Signin from "@/views/User/Signin.vue";
import Signup from "@/views/User/Signup.vue";
// import Student from "@/views/User/Student.vue";
import Newstudent from "@/views/User/Newstudent.vue";
import AuthGuard from "./auth-guard.js";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/Class/:classid/students/:id",
      name: "Student Profile",
      component: StudentProfile
    },
    {
      path: "/class/:id",
      name: "Class",
      component: Classes
    },
    {
      path: "/newclass",
      name: "Create a class",
      component: Newclass,
      beforeEnter: AuthGuard
    },
    {
      path: "/newstudent/:clid",
      name: "Add Student",
      component: Newstudent,
      beforeEnter: AuthGuard
    },
    // {
    //   path: "/Student",
    //   name: "Student",
    //   component: Student
    // },
    {
      path: "/myclasses",
      name: "My classes",
      component: Myclasses,
      beforeEnter: AuthGuard
    },
    {
      path: "/signin",
      name: "Sign in",
      component: Signin,
      beforeEnter: AuthGuard
    },
    {
      path: "/signup",
      name: "Sign up",
      component: Signup,
      beforeEnter: AuthGuard
    },    
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    }
  ]
});
