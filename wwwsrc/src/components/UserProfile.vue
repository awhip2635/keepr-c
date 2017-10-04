<template>
    <div class="container-fluid">
        <div class="UserProfile">
            <div class="row">
                <div class="col-xs-7 col-sm-7 col-md-7">
                    <h1 class="vaults">Vaults</h1>

                </div>
                <div class="col-xs-5 col-sm-5 col-md-5">
                    <button @click="showModal = true" class="btn btn-primary new-vault">New Vault</button>
                </div>

            </div>
            
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="panel">
                        <router-link :to="{name: 'Vault'}">
                        <h2>Name</h2>

                        </router-link>
                    </div>
                </div>
            </div>

        </div>
        <modalnewvault v-if="showModal"></modalnewvault>
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
        }
    }

</script>

<style scoped>
    .panel {


        background-color: whitesmoke;
    }

    .new-vault {
        margin-top: 50px;
    }
</style>