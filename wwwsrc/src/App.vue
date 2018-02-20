<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
 import Login from './components/Login'
 
 import navbar from './components/NavBar'
export default {
  name: 'app',
  components: {
    Login,
    navbar
  },
  mounted() {
      this.$store.dispatch('getAuth')
    }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('http://sahara-desert-dream.com/wp-content/uploads/2015/04/desert-dream-4.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
}


</style>
