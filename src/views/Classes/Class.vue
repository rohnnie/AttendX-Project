<template>
  <v-container grid-list-xs mt-1>
    <v-layout row-wrap>
      <v-flex xs12 row>
        <v-card class="error">
          <v-card-title primary-title>
            <h1 align-center class="white--text">{{ cl.Branch }}-{{ cl.Section }}</h1>
            <v-spacer></v-spacer>
            <v-btn flat class="white--text" :to="`/newstudent/${classid}`">Add Student</v-btn>
          </v-card-title>
        </v-card>
        <div>
        <v-card mt-3 v-for="st in students" :key="st.id">
          <v-card-title primary-title>
            <VCardActions>
            <v-btn flat :to="`${classid}/students/${st.id}`">{{st.Stuname}}</v-btn>
            </VCardActions>
          </v-card-title>
        </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data(){
    return {
      classid:null
    }
  },
  computed: {
    cl() {
      let user = this.$firebase.auth().currentUser;
      let cls = this.$store.getters.loadedclass(this.$route.params.id)[0];
      if(cls.creatorID !== user.uid)
      this.$router.push('/')
      else
      return cls
    },
    students(){
      var mystudlist = this.$store.getters.students
      var origstudarr = []
      mystudlist.forEach(element => {
        if(element.classid == this.classid){
          origstudarr.push(element)
        }
      });
      return origstudarr
    }
  },
  created(){
    
    this.classid=this.$route.params.id
  }
};
</script>