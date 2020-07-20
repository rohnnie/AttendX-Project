import vue from "vue";
import vuex from "vuex";
import * as firebase from "firebase";

vue.use(vuex);

export default new vuex.Store({
  state: {
    loading: false,
    classes: [],
    students: [],
    users: null
  },
  mutations: {
    setLoadedClasses(state, payload) {
      state.classes = payload;
    },
    createclass(state, payload) {
      state.classes.push(payload);
    },
    setLoadedStudents(state, payload) {
      state.students = payload;
    },
    addStudent(state, payload) {
      state.students.push(payload);
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    }
  },
  actions: {
    loadclasses({ commit }) {
      commit("setLoading", true);
      firebase
        .database()
        .ref("classes")
        .once("value")
        .then(data => {
          const classes = [];
          const tempstud = []
          const obj = data.val();
          for (let key in obj) {
              classes.push({
                imageUrl: obj[key].imageUrl,
                id: obj[key].id,
                Branch: obj[key].Branch,
                Section: obj[key].Section,
                Subject: obj[key].Subject,
                Year: obj[key].Year,
                creatorID: obj[key].creatorID
              });
              for (let s in obj[key].students) {
                var t = {
                  Regno: obj[key].students[s].Regno,
                  imageUrl: obj[key].students[s].imageUrl,
                  Stuname: obj[key].students[s].Stuname,
                  address: obj[key].students[s].address,
                  fathername: obj[key].students[s].fathername,
                  mothername: obj[key].students[s].mothername,
                  parentmob: obj[key].students[s].parentmob,
                  parentemail: obj[key].students[s].parentemail,
                  classid: key,
                  id: s
                }
                tempstud.push(t)
              };
          }
          commit("setLoadedClasses", classes);
          commit("setLoadedStudents", tempstud);
          commit("setLoading", false);
        })
        .catch(error => {
          console.log(error);
          commit("setLoading", false);
        });
    },
    createclass({ commit, getters }, payload) {
      const cl = {
        Branch: payload.Branch,
        Section: payload.Section,
        Year: payload.Year,
        Subject: payload.Subject,
        imageUrl: payload.imageUrl,
        creatorID: payload.creatorID
      };
      firebase
        .database()
        .ref("classes")
        .push(cl)
        .then(async data => {
          const key = data.key;
          cl.id = key;
          await firebase
            .database()
            .ref("classes")
            .child(key)
            .update(cl);
          commit("createclass", {
            ...cl,
            id: key
          });
          payload.router.push("/myclasses");
        })
        .catch(error => {
          console.log(error);
        });
    },
    addStudent({ commit, getters }, payload){
      const st = {
        Stuname: payload.Stuname,
        Regno: payload.Regno,
        imageUrl: payload.imageUrl,
        address: payload.address,
        fathername: payload.fathername,
        mothername: payload.mothername,
        parentmob: payload.parentmob,
        parentemail: payload.parentemail  
      };
      firebase
        .database()
        .ref("classes")
        .child(payload.classid+'/students')
        .push(st)
        .then(async data => {
          const key = data.key;
          await firebase
        .database()
        .ref("classes")
        .child(`${payload.classid}/students/${key}`).update({
          id: key
        });
          commit("addStudent", {
            ...st,
            id: key,
            classid:payload.classid
          });
          payload.router.push("/class/"+payload.classid);
        })
        .catch(error => {
          console.log(error);
        });
    },
    signUserUp: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(payload.email, payload.password)
          .then(user => {
            let newUser = {
              id: user.user.uid,
              registeredclasses: []
            };
            firebase.database().ref(`users/${user.user.uid}`).set(payload);
            commit("setUser", newUser);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    signUserIn: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(payload.email, payload.password)
          .then(user => {
            console.log(user);
            let newUser = {
              id: user.user.uid,
              registeredclasses: []
            };
            commit("setUser", newUser);
            payload.router.push("/");
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    autoSignIn({ commit }, payload) {
      commit("setUser", { id: payload.uid, registeredclasses: [] });
    },
    logout({ commit }) {
      firebase.auth().signOut();
      commit("setUser", null);
      router.push('/')
    }
  },
  getters: {
    loadedclasses(state) {
      let user = firebase.auth().currentUser
      return state.classes.sort((classA, classB) => {
        return classA.id > classB.id;
      });

    },
    loadedclass(state) {
      return classId => {
        return state.classes.filter(c => {
          return c.id === classId;
        });
      };
    },
    loading(state) {
      return state.loading;
    },
    user(state) {
      return state.user;
    },
    students(state){
      return state.students
    }
  }
});
