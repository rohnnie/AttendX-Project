<template>
  <VContainer grid-list-xs>
    <VLayout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading"
        ></v-progress-circular>
      </v-flex>
    </VLayout>
    <VLayout row wrap v-if="!loading">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="item in ads" :key="item.title" :src="item.imgurl">
            <div class="title text-xs-center">{{ item.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </VLayout>
  </VContainer>
</template>

<script>
export default {
  data() {
    return {
      ads: [
        {
          title: "FACIAL RECOGNITION ATTENDANCE",
          imgurl:
            "https://reseuro.magzter.com/1064x679/articles/410/236636/59a598a8e876f/Manipal-University-Jaipur-Fostering-Academic-Excellence.jpg"
        },
        {
          title: "EASIER AND FASTER",
          imgurl: "https://cdn-images-1.medium.com/max/1366/0*7Ccy5dtZLcXz4Hq1"
        },
        {
          title: "MORE EFFICIENT CLASSES!",
          imgurl:
            "http://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/10/o-COLLEGE-CLASS-facebook.jpg"
        }
      ]
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>
<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  color: white;
  font-size: 2em;
  padding: 20px;
}
</style>