<template>
    <div class="container-fluid yo">
        <div class="UserProfile">
            <div class="row">
                <div class="col-xs-7 col-sm-7 col-md-7">
                    <h1 class="vaults">Vaults</h1>

                </div>
                <div class="col-xs-5 col-sm-5 col-md-5">
                    <button @click="showModal = true" class="btn btn-primary new-vault">New Vault</button>
                </div>

            </div>

            <div v-for="vault in vaults" class="row">
                <div v-if="vault.creatorId == user._id" class="col-xs-12 col-sm-12 col-md-12">
                    <center>
                        <div class="panel">
                            <div class="row">
                                <div class="col-xs-4 col-sm-4 col-md-4">
                                    <button @click="deleteVault(vault)" type="button" class="btn btn-default btn-sm">
                                        <span class="glyphicon glyphicon-remove"></span> Remove 
                                    </button>

                                </div>
                                <div  @click="changeToVault(vault)" class="col-xs-4 col-sm-4 col-md-4">
                                    <h2>{{vault.name}}</h2>
                                    <p>{{vault.description}}</p>

                                </div>
                            </div>


                        </div>
                    </center>
                </div>

            </div>


        </div>
        <modalnewvault v-if="showModal" @close="showModal = false"></modalnewvault>
    </div>


</template>

<script>
    import modalnewvault from './ModalNewVault'
    export default {
        name: 'UserProfile',
        props: [],
        components: {
            modalnewvault
        },
        data() {
            return {
                showModal: false
            }
        },
        mounted() {
            this.$store.dispatch('getVaults')
        },
        methods: {
            changeToVault(vault) {
                this.$store.commit('setActiveVault', vault)

                this.$router.push('/vaults/' + this.$store.state.activeVault._id)

            },
            deleteVault(vault){
                debugger
                this.$store.dispatch('removeVault', vault)
            }
        },
        computed: {
            vaults() {
                return this.$store.state.vaults
            },
            user() {
                return this.$store.state.user
            },

        },
    }

</script>

<style scoped>
    .panel {


        background-color: whitesmoke;
        max-width: 80%;
    }

    .new-vault {
        margin-top: 50px;
    }

    .vaults {
        color: white;
    }

    .yo {
        background-image: url('http://sahara-desert-dream.com/wp-content/uploads/2015/04/desert-dream-4.jpg');

        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        min-height: 100vh;
    }
</style>