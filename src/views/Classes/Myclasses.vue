<template>
    <VLayout row-wrap>
        <v-flex xs10 offset-xs1>
            <VCard m-1 pt-1 class="dark" v-for="cl in classes" :key="cl.id">
                <v-container grid-list-xl text-xs-center mt-1>
                    <VLayout row>
                        <v-flex xs4>
                            <v-img
                                height="100 px"
                                v-bind:src= "cl.imageUrl"
                                aspect ratio="2.75"
                            >   
                            </v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-title primary-title class="text-xs-left">
                                <div>
                                    <h1 class="text-uppercase">{{ cl.Branch }}-{{ cl.Section }}</h1>
                                    <span class="text-uppercase">{{ cl.Subject }}</span>
                                </div>
                            </v-card-title> 
                            <VCardActions>
                                <v-btn flat :to="`/Class/${cl.id}`">
                                    <v-icon left>
                                        arrow_right
                                    </v-icon>
                                    View Class
                                </v-btn>
                            </VCardActions>
                        </v-flex>
                    </VLayout>
                </v-container>
            </VCard>
        </v-flex>
    </VLayout>
</template>

<script>
export default {
    computed:{
        classes(){
            let user = this.$firebase.auth().currentUser
            return this.$store.getters.loadedclasses.filter(c => {
                return c.creatorID === user.uid
            })                   
        }
    }
}
</script>