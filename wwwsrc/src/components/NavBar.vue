<template>
    <div class="container-fluid">
        

            <div class="row">
                <!-- Mobile Display NavBar -->


                <div class="col-xs-12 col-sm-3 col-md-3">
                    <h1 class="Logo">Keepr</h1>

                </div>




                <div class="col-xs-12 col-sm-4 col-md-4">
                    <router-link :to="{name: 'HomePage'}">

                        <button class="btn discover">
                                Discover
                            </button>
                    </router-link>



                </div>
                <div class="col-xs-12 col-sm-3">

                    <button @click="changeToUserProfile" class="btn discover">
                               My Vaults
                            </button>



                </div>


                <div v-if="user.email != null">
                    <div class="col-xs-2 col-sm-2 col-md-2">
                        <button @click="logout" class="logout btn btn-default">Logout</button>
                    </div>
                </div>
                <div v-else>
                    <div class="login">
                        <!-- <input class="form-control" type="text" placeholder="Email">
                            <input class="form-control" type="password" placeholder="Password"> -->
                        <router-link :to="{name: 'Login'}">
                            <button class="btn btn-default">Login</button>

                        </router-link>
                        <router-link :to="{name: 'Register'}">
                            <button class="btn btn-default ">Sign Up</button>

                        </router-link>
                    </div>
                </div>
                <!-- End of User login -->

            </div>
            <!-- End Regular View-->


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
            changeToUserProfile() {
                this.$router.push('/vaults')
            }
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
    .container-fluid {

        background-color: black;
        opacity: .75;
    }

    .discover {
        background-color: pink;
    }
</style>