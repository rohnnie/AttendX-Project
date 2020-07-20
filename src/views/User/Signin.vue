<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <v-layout row>
                <v-form @submit.prevent="onSignin">
                  <v-flex xs12>
                    <v-text-field
                      autocomplete="off"
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                    name="password" 
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn type="submit">Sign In</v-btn>
                  </v-flex>
                </v-form>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  
  methods: {
    onSignin() {
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password,
        router: this.$router
      });
    }
  }
};
</script>

