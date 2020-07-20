<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text dark>
                        <v-container>
                                <v-layout row>
                                    <v-form @submit.prevent="onSignup">
                                        <v-flex xs12>
                                            <v-text-field
                                                autocomplete="off"
                                                name="name"
                                                label="Name"
                                                id="name"
                                                v-model="name"
                                                type="text"
                                                required>
                                            </v-text-field>
                                            <v-text-field
                                                autocomplete="off"
                                                name="address"
                                                label="Address"
                                                id="address"
                                                v-model="address"
                                                type="text"
                                                required>
                                            </v-text-field>
                                            <v-text-field
                                                autocomplete="off"
                                                name="department"
                                                label="Department"
                                                id="department"
                                                v-model="department"
                                                type="text"
                                                required>
                                            </v-text-field>
                                            <v-text-field
                                                autocomplete="off"
                                                name="mobile"
                                                label="Contact Number"
                                                id="mobile"
                                                v-model="mobile"
                                                type="number"
                                                required>
                                            </v-text-field>
                                            <v-text-field
                                                autocomplete="off"
                                                name="email"
                                                label="E-Mail"
                                                id="email"
                                                v-model="email"
                                                type="email"
                                                required>
                                            </v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field
                                                name="password"
                                                label="Password"
                                                id="password"
                                                v-model="password"
                                                type="password"
                                                required>
                                                </v-text-field>
                                            </v-flex>
                                            <v-flex xs12>
                                                <v-text-field
                                                    name="confirmpassword"
                                                    label="Confirm Password"
                                                    id="confirmpassword"
                                                    v-model="confirmPassword"
                                                    type="password"
                                                    required
                                                    :rules="[comparePasswords]"
                                                    >
                                                </v-text-field>
                                            </v-flex> 
                                            <v-flex xs12>
                                                <v-btn :loading="loading" type="submit">Sign Up</v-btn>
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
         return{
             name: '',
             department: '',
             address: '',
             mobile: '',
             email: '',
             password:'',
             confirmPassword:'',
             loading: false
         }
    },
    computed: {
        comparePasswords() {
            return (this.password !== this.confirmPassword ? 'Passwords do not match' : true)
        },
        user(){
            return this.$store.getters.user
        }
    },
    watch: {
        user(value){
            if(value !==null && value !== undefined){
                this.$router.push('/')
            }
        }
    },
    methods: {
        onSignup() {
            this.loading = true;
            let _this = this;
            this.$store.dispatch('signUserUp',{name:this.name, department:this.department, address:this.address,mobile:this.mobile,email:this.email, password:this.password}).then(() => {
                _this.loading = false;
                _this.$router.push('/');
            }).catch(error => {
                _this.loading = false;
                console.log(error)
            })  
        }
    }
}
</script>

