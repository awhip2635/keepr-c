<template>
    <div class="container-fluid">
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="row">
                    <!-- Mobile Display NavBar -->
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                            aria-expanded="false">
                          <span class="sr-only">Toggle navigation</span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                        </button>
                        <div class="col-xs-3 col-sm-3 col-md-3">
                            <h2 class="Logo">Keepr</h2>
                        </div>

                    </div>

                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <div class="col-xs-4 col-sm-4 col-md-4">
                            <router-link :to="{name: 'HomePage'}">

                            <button class="btn discover">
                                Discover
                            </button>
                            </router-link>

                            

                        </div>
                        <div class="col-xs-3 col-sm-3">
                            <router-link :to="{name: 'UserProfile'}">
                            <button class="btn discover">
                               My Vaults
                            </button>

                            </router-link>

                        </div>

                    </div>
                   <div v-if="user.email != null">
                    <button @click="logout" class="btn btn-default">Logout</button>
                   </div>
                    <div v-else class="nav navbar-nav navbar-right align-everything login col-xs-2 col-sm-2 col-md-2 credentials">
                        
                            <!-- <input class="form-control" type="text" placeholder="Email">
                            <input class="form-control" type="password" placeholder="Password"> -->
                            <router-link :to="{name: 'Login'}">
                            <button class="btn btn-default">Login</button>

                            </router-link>
                        <router-link :to="{name: 'Register'}">
                        <button class="btn btn-default ">Sign Up</button>

                        </router-link>
                    </div>
                    <!-- End of User login -->

                </div>
                <!-- End Regular View-->
            </div>
            
        </nav>


    </div>
</template>
<script>
    
    export default {
        name: 'navbar',
        components:
        {
            
        },
        data() {
            return {

            }
        },
        methods: {
            logout() {
                this.$store.dispatch("logout")
            },
        },
        computed: {
            user() {
                //console.log("Computed user:", this.$store.state.user)
                return this.$store.state.user
            }
        }
    }

</script>
<style scoped>
.navbar {
    margin-top: -60px;
    width: 110%;
    height: 180px;
    background-color: black;
    margin-left: -70px;
}
.credentials {
    margin-top: -60px;
    
}
.discover {
background-color: pink;
margin-top: 50px;
width: 160px;
}
.Logo {
    color: whitesmoke;
}
</style>