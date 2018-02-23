<template>
    <div class="container">

        <div class="row upload">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <button class="btn btn-primary" @click="displayModal = true">Upload Keep</button>
            </div>

        </div>

        <div>
            <div class="row">

                <div class="col-xs-6 col-sm-6 col-md-4" v-for="keep in keeps">


                    <div class="panel">


                        <div class="row">
                            <div v-if="keep.creatorId == user._id" class="col-xs-1 col-sm-1 col-md-1">
                                <span @click="deleteKeepHome(keep)" class="glyphicon glyphicon-remove"></span>
                            </div>
                            <div class="col-xs-12 col-sm-12">
                                <center>

                                    <br>
                                    <img class="keep-image" :src="keep.image" alt="">
                                    <h3>
                                        {{keep.name}}
                                    </h3>

                                    <p>{{keep.description}}</p>
                                    <button class="add-to-vaults btn btn-primary" @click="getKeepHome(keep)">
                                        Add to Vaults
                                    </button>
                                </center>

                            </div>
                        </div>




                    </div>

                </div>

            </div>
        </div>





        <modaladdtovaults v-if="showModal" @close="showModal = false"></modaladdtovaults>
        <modaluploadkeep v-if="displayModal" @close="displayModal = false"></modaluploadkeep>
    </div>
</template>

<script>
    import modaladdtovaults from './ModalAddToVaults'
    import modaluploadkeep from './ModalUploadKeep'
    export default {
        name: 'HomePage',
        props: [],
        components: {
            modaladdtovaults,
            modaluploadkeep

        },
        data() {
            return {
                showModal: false,
                displayModal: false

            }
        },
        mounted() {
            this.$store.dispatch('getKeepsHome')
        },
        computed: {
            keeps() {
                return this.$store.state.homekeeps
            },
            user() {
                return this.$store.state.user
            },
        },
        methods: {
            getKeepHome(keep) {
                this.$store.state.activeKeep = keep
                this.showModal = true;

            },
            deleteKeepHome(keep) {
                debugger
                this.$store.dispatch('deleteKeepHome', keep);
            }


        },


    }

</script>

<style scoped>
    .panel {
        min-height: 400px;
        width: 300px;

        background-color: #F04545;
    }

    .add-to-vaults {}

    .keep-image {
        width: 250px;
        height: 250px;
        border: 2px solid black;
    }

    .yo {
        background-image: url('http://sahara-desert-dream.com/wp-content/uploads/2015/04/desert-dream-4.jpg');

        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        min-height: 100vh;
    }

    .glyphicon-remove:hover {
        color: lightblue;
    }

    .glyphicon-remove {
        font-size: 20px;
    }

    .upload {
        margin-bottom: 5px;
    }
</style>