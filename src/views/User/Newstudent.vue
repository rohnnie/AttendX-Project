<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs-12>
        <h2 class="primary--text">Add New Student</h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs-12>
        <form @submit.prevent="onAddStudent">
          <v-layout row wrap>
            <v-flex sn-6 xs-12 offset-sn-3>
              <v-text-field
                name="Stuname"
                label="Student Name"
                id="Stuname"
                v-model="Stuname"
                autocomplete="off"
                type="text"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex sn-6 xs-12 offset-sn-3>
              <v-text-field
                name="Regno"
                autocomplete="off"
                label="Registration Number"
                id="Regno"
                v-model="Regno"
                type="number"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex sn-6 xs-12 offset-sn-3>
              <v-text-field
                name="Image Url"
                label="Image Url"
                autocomplete="off"
                type="text"
                id="imageUrl"
                v-model="imageUrl"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex sn-6 xs-12 offset-sn-3>
              <v-text-field
                name="address"
                autocomplete="off"
                label="Address"
                id="address"
                v-model="address"
                type="text"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex sn-6 xs-12 offset-sn-3>
              <v-text-field
                name="fathername"
                autocomplete="off"
                label="Father's Name"
                id="fathername"
                v-model="fathername"
                type="text"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex sn-6 xs-12 offset-sn-3>
              <v-text-field
                name="mothername"
                autocomplete="off"
                label="Mother's Name"
                id="mothername"
                v-model="mothername"
                type="text"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex sn-6 xs-12 offset-sn-3>
              <v-text-field
                name="parentmob"
                autocomplete="off"
                label="Parent's Mobile Number"
                id="parentmob"
                v-model="parentmob"
                type="number"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex sn-6 xs-12 offset-sn-3>
              <v-text-field
                name="parentemail"
                autocomplete="off"
                label="Parent's Email Address"
                id="parentemail"
                v-model="parentemail"
                type="email"
              ></v-text-field>
            </v-flex>
          </v-layout>      
          <v-layout row wrap>
            <v-flex sn-6 xs-12 offset-sn-3>
              <VBtn class="primary" :disabled="!FormisValid" type="submit">Add Student</VBtn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      Stuname: "",
      Regno: "",
      imageUrl: "",
      address: "",
      fathername: "",
      mothername: "",
      parentmob: "",
      parentemail: "",      
      classid:null
    };
  },
  computed: {
    FormisValid() {
      return (
        this.Stuname !== "" &&
        this.Regno !== "" &&
        this.imageUrl !== "" &&
        this.address !== "" &&
        this.fathername !== "" &&
        this.mothername !== "" &&
        this.parentmob !== "" &&
        this.parentemail !== ""
      );
    }
  },
  methods: {
    onAddStudent() {
      if (!this.FormisValid) {
        return;
      }
      const stuData = {
        Stuname: this.Stuname,
        Regno: this.Regno,
        imageUrl: this.imageUrl,
        address: this.address,
        fathername: this.fathername,
        mothername: this.mothername,
        parentmob: this.parentmob,
        parentemail: this.parentemail,
        classid: this.classid
      };
      this.$store.dispatch("addStudent", {
        ...stuData,
        router: this.$router
      });
    }
  },
  created(){
    this.classid=this.$route.params.clid
  }
};
</script>