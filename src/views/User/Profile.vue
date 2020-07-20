<template>
    <VLayout row-wrap>
        <v-flex xs10 offset-xs1>
            <VCard m-1 pt-1 class="dark">
                <v-container grid-list-xl text-xs-center mt-1>
                    <VLayout row>
                        <v-flex xs8>
                            <v-card-title primary-title class="text-xs-left">
                                <div>
                                    <h1 class="text-uppercase">{{ details.name }}</h1>
                                    <div class="text-uppercase">Address: {{ details.address }}</div>
                                    <div class="text-uppercase">Department: {{ details.department }}</div>
                                    <div class="text-uppercase">Contact Number: {{ details.mobile }}</div>
                                    <div class="text-uppercase">Email: {{ details.email }}</div>
                                </div>
                            </v-card-title> 
                        </v-flex>
                    </VLayout>
                </v-container>
            </VCard>
        </v-flex>
    </VLayout>
</template>
<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            user: {},
            details: {}
        }
    },
    created() {
        let _this = this
        firebase.auth().onAuthStateChanged(user => {
            if(!user) _this.$router.push('/signin')
            else {
                _this.user = user
                firebase.database().ref(`users/${user.uid}`).once('value').then(student => {
                    _this.details = student.val()
                })
            }
        })
    }
}
</script>
