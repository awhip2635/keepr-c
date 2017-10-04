<template>
  <div class="yo">
  <h1 class="slogan">Welcome to Keepr</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.hello {
 
}
.yo {
   background-image: url('http://www.tinywriters.com/wp-content/uploads/2015/05/places-for-finding-photos-picjumbo-1.jpg');
  background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    margin-top: -40px;
    margin-bottom: -900px;
    height: 100vh;
}
.slogan {
  padding-top:90px;
}
</style>
