import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Register from '@/components/Register'
import HomePage from '@/components/HomePage'
import UserProfile from '@/components/UserProfile'
import Vault from '@/components/Vault'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/vaults',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/vaults/:vaultId',
      name: 'Vault',
      component: Vault
    }
  ]
})
