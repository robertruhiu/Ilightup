<template>
<b-container>
    <b-row>
        <b-col lg="4"></b-col>
        <b-col lg="4"></b-col>
        <b-col lg="4" style="margin-top: 10%">
          <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
                  <v-text-field  prepend-icon="person" name="email" v-model="email" label="Email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="Password" v-model="password" label="Password" type="password"></v-text-field>
                  <div class="error" v-html="error"></div>
                </v-form>
          </v-card-text>
          <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="login" color="primary">submit</v-btn>
              </v-card-actions>
        </v-card>
        </b-col>
    </b-row>


</b-container>





</template>

<script>
  import AuthService from '@/services/AuthService'
  export default {
    name: 'login',
    data () {
      return {
        email: '',
        password: '',
        error:null
      }
    },
    methods: {
      async login (){
        try {
          const response = await AuthService.login({
          email:this.email,
          password:this.password
          })
          this.$store.dispatch('setToken',response.data.token)
          this.$store.dispatch('setUser',response.data.user)
          this.$router.push({
            name:'home'
          })
        } catch (error) {
          this.error =error.response.data.error

        }
      }
    }
  }
</script>

<style scoped>
</style>
