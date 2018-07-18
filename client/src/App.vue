<template>

    <v-app>
     <pageheader></pageheader>

      <router-view/>
    </v-app>

</template>

<script>
import Pageheader from '@/components/Header.vue'
  export default {
    name: 'App',
    components: {
      Pageheader
    }

}
</script>

<style>
  #app {
    display: grid;
    background-color: white;

  }


</style>
