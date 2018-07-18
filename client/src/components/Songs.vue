<template>
  <b-container absolute fluid style="padding: 0;padding-top: 4%">
    <b-row>
      <b-col lg="3" style="max-width: 100%" >

          <v-card style="width: 18rem;margin-left: 15%">
              <div class="text-xs-center" style="padding-top: 10%">
                Add song
              </div>
          <div class="text-center">


              <v-btn to="/songs/create" ripple fab dark color="indigo">
                <v-icon dark style="margin-top: 50%">add</v-icon>
              </v-btn>
          </div>


          </v-card>

        </b-col>
      <b-col lg="9" style="max-width: 100%" >
        <b-row>
      <div v-for="song in songs":key="song.id">
        <b-col lg="4" style="max-width: 100%;margin-top: 2%" >


          <v-card style="width: 20rem;">
            <v-card-media height="200px">
              <img  :src="song.albumImage">
            </v-card-media>


            <v-card-title>
          <div>

            <span class="grey--text">{{song.title}}</span><br>
            <span>{{song.artist}}</span><br>
            <span>{{song.album}}</span>
          </div>
        </v-card-title>

          <v-btn  flat color="orange"
                  @click="navigateTo({
                  name:'song',
                  params:{
                    songId: song.id
                  }
                  })"
          >View</v-btn>



          </v-card>


        </b-col>
      </div>
        </b-row>
      </b-col>

    </b-row>


  </b-container>

</template>

<script>
  import SongsService from '@/services/SongsService'
  export default {
    name:'songs',
    data () {
      return {
        songs:null
      }
    },
    async mounted (){
      this.songs = (await SongsService.index()).data
    },
    methods:{
      navigateTo (route) {
        this.$router.push(route)
      }
    }
  }
</script>

<style scoped>

</style>
