<template>
  <b-navbar toggleable="md"  variant="primary"  class="fixed-top">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand style="color: white" to="/">ILIGHTUP</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav >
      <b-nav-item  to="/songs" v-if ="$store.state.isUserLoggedIn">My Music</b-nav-item>

    </b-navbar-nav>




    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">



      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <v-icon>fas fa-user</v-icon>
        </template>
        <b-dropdown-item to="/login" v-if ="!$store.state.isUserLoggedIn" >Login</b-dropdown-item>
        <b-dropdown-item to="/register" v-if ="!$store.state.isUserLoggedIn" >Sign up</b-dropdown-item>
        <b-dropdown-item to="/" v-if ="$store.state.isUserLoggedIn" @click="logout" >Logout</b-dropdown-item>

      </b-nav-item-dropdown>

    </b-navbar-nav>


  </b-collapse>

</b-navbar>


</template>

<script>
  import AuthService from '@/services/AuthService'
  export default {
      name: "Header",
      methods:{
        logout () {
          this.$store.dispatch('setToken',null)
          this.$store.dispatch('setUser',null)
        },
        showModal () {
          this.$refs.myModalRef.show()
        },
        async login (){
        try {
          const response = await AuthService.login({
          email:this.email,
          password:this.password
          })
          this.$router.push({
            name:'songs'
          })
          this.$store.dispatch('setToken',response.data.token)
          this.$store.dispatch('setUser',response.data.user)
        } catch (error) {
          this.error =error.response.data.error

        }
      }
      },
      data () {
        return {
        email: '',
        password: '',
        error:null
        }
      }

    }
</script>

<style scoped>
.klog{
  float: left;
    padding: 16px 15px;
    font-size: 20px;
    height: 40px;
    margin-left: 7%;
  letter-spacing: .4em;
    font-family: 'Montserrat',sans-serif;
    font-weight: bold;
    color: #00ff17;
    text-transform: uppercase;
}
</style>
