<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs-12>
        <h2 class="primary--text">Create a new class</h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs-12>
        <form @submit.prevent="onCreateClass">
          <v-layout row wrap>
            <v-flex sn-6 xs-12 offset-sn-3>
              <v-text-field
                name="Branch"
                label="Branch"
                id="Branch"
                v-model="Branch"
                autocomplete="off"
                type="text"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex sn-6 xs-12 offset-sn-3>
              <v-text-field
                name="Section"
                autocomplete="off"
                label="Section"
                id="Section"
                v-model="Section"
                type="text"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex sn-6 xs-12 offset-sn-3>
              <v-text-field name="Year" label="Year" id="Year" type="number" v-model="Year"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex sn-6 xs-12 offset-sn-3>
              <v-text-field
                name="Subject"
                label="Subject"
                autocomplete="off"
                id="Subject"
                v-model="Subject"
                type="text"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex sn-6 xs-12 offset-sn-3>
              <VBtn class="primary" :disabled="!FormisValid" type="submit">Create class</VBtn>
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
      Branch: "",
      Section: "",
      Year: "",
      Subject: "",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV3AzPsXiBOgEQwqUC44GmECnD5s5D-Pro4s6cdowF6AGHUqlt"
    };
  },
  computed: {
    FormisValid() {
      return (
        this.Branch !== "" &&
        this.Section !== "" &&
        this.Year !== "" &&
        this.Subject !== "" &&
        this.imageUrl !== ""
      );
    }
  },
  methods: {
    onCreateClass() {
      if (!this.FormisValid) {
        return;
      }
      const classData = {
        Branch: this.Branch,
        Section: this.Section,
        Year: this.Year,
        Subject: this.Subject,
        imageUrl: this.imageUrl,
        creatorID: this.$firebase.auth().currentUser.uid
      };
      this.$store.dispatch("createclass", {
        ...classData,
        router: this.$router
      });
    }
  }
};
</script>