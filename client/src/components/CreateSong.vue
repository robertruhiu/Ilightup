<template>
  <b-container fluid style="padding: 0;padding-top: 5%">
    <b-row>
      <b-col lg="4" style="margin-left: 3%">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Song metadata</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field label="Title" v-model="song.title"></v-text-field>
              <v-text-field label="Artist" v-model="song.artist"></v-text-field>
              <v-text-field label="Genre" v-model="song.genre"></v-text-field>
              <v-text-field label="Album" v-model="song.album" ></v-text-field>
              <v-text-field label="AlbumImage" v-model="song.albumImage"></v-text-field>
              <v-text-field label="Youtube id" v-model="song.youtubeId" ></v-text-field>

                </v-form>
          </v-card-text>

        </v-card>
      </b-col>
      <b-col lg="7" style="max-width: 100%" >
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Song structure</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
               <v-textarea solo name="input-7-4" label="Tab" v-model="song.tab"></v-textarea>
              <v-textarea  solo name="input-7-4" label="Lyrics" v-model="song.lyrics"></v-textarea>
            </v-form>

          </v-card-text>
           <v-btn block color="primary" @click="create" dark>Create Song</v-btn>


        </v-card>

      </b-col>
    </b-row>
  </b-container>

</template>

<script>
  import SongService from '@/services/SongsService'
    export default {
      name: "CreateSong",
      data (){
        return{
          song:{
            title: null,
            artist:null,
            genre: null,
            album: null,
            albumImage: null,
            youtubeId: null,
            lyrics: null,
            tab: null
          }
        }

      },
      methods:{
        async create(){
          try {
            await SongService.post(this.song)
            this.$router.push({
              name: 'songs'
            })
          } catch (err) {
            console.log(err)
          }

        }
      }
    }
</script>

<style scoped>

</style>
