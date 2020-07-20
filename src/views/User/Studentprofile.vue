<template>
    <VLayout row-wrap>
        <v-flex xs10 offset-xs1>
            <VCard m-1 pt-1 class="dark">
                <v-container grid-list-xl text-xs-center mt-1>
                    <VLayout row>
                        <v-flex xs4>
                            <v-img
                                height="100 px"
                                v-bind:src= "st.imageUrl"
                                aspect ratio="2.75"
                            >   
                            </v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-title primary-title class="text-xs-left">
                                <div>
                                    <h1 class="text-uppercase">{{ st.Stuname }}-{{ st.Regno }}</h1>
                                    <div class="text-uppercase">Address: {{ st.address }}</div>
                                    <div class="text-uppercase">Father's Name: {{ st.fathername }}</div>
                                    <div class="text-uppercase">Mother's Name: {{ st.mothername }}</div>
                                    <div class="text-uppercase">Parent's Mobile No: {{ st.parentmob }}</div>
                                    <div class="text-uppercase">Parent's Email: {{ st.parentemail }}</div>
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
            st: {}   
        }
    },
    created() {
        let _this = this
        firebase.auth().onAuthStateChanged(user => {
            if(!user) _this.$router.push('/signin')
        })
        let classid = this.$route.params.classid;
        let studentId = this.$route.params.id;
        firebase.database().ref(`classes/${classid}/students/${studentId}`).once('value').then(student =>{
            _this.st = student.val()
        })
    }
}
</script>