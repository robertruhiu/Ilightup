import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path:'/songs',
      name:'songs',
      component: Songs
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    }
    ,
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    }

  ]
})
