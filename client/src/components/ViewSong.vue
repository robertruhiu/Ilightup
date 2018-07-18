<template>
  <b-container absolute fluid style="padding: 0;padding-top: 4%">
    <b-row>
      <b-col lg="4" >

          <v-card style="width: 25rem;margin-left: 10%">
            <v-card-media
          :src="song.albumImage"
          height="200px"
        ></v-card-media>
            <div>
              <h3>Song lyrics</h3>
            </div>



           <textarea style="width: 100%;height: 300px" readonly v-model="song.lyrics"></textarea>
          </v-card>


        </b-col>
      <b-col lg="7" >


          <youtube :video-id="song.youtubeId" :player-width="800" :player-height="400" :player-vars="{ autoplay: 1 }"></youtube>
        <h4>{{song.title}}:
              {{song.artist}}</h4>


      </b-col>

    </b-row>


  </b-container>
</template>

<script>
  import SongService from '@/services/SongsService'
    export default {
      name: "ViewSong",
      data (){
        return {
          song:{}
        }
      },
      async mounted (){
        const songId = this.$store.state.route.params.songId
        this.song = (await SongService.show(songId)).data
      }
    }
</script>

<style scoped>

</style>
