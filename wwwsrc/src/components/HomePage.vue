<template>
    <div class="container-fluid">
        <div class="home">
<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
        <button class="btn btn-primary" @click="displayModal = true">Upload Keep</button>
    </div>

</div>
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <div class="panel">
                        <div class="row">
                            <div class="col-xs-4 col-sm-4">
                                <br>
                                <p>UserName</p>
                            </div>
                            <div class="col-xs-4 col-sm-4">
                                <br>
                                <img src="http://via.placeholder.com/350x150" alt="">

                            </div>
                            <div class="col-xs-4 col-sm-4">
                                <br>
                                <p>10/02/2017</p>
                            </div>

                        </div>
                        <br>
                        <div class="row">
                            <div class="col-xs-3 col-sm-3">

                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6">

                                <p>text describing picture</p>
                            </div>
                            <div class="col-xs-3 col-sm-3">
                                <button class="btn btn-primary" @click="showModal = true">
                            Add to Vaults
                        </button>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6">
                    <div class="panel">
                        <div class="row">
                            <div class="col-xs-4 col-sm-4">
                                <br>
                                <p>UserName</p>
                            </div>
                            <div class="col-xs-4 col-sm-4">
                                <br>
                                <img src="http://via.placeholder.com/350x150" alt="">

                            </div>
                            <div class="col-xs-4 col-sm-4">
                                <br>
                                <p>10/02/2017</p>
                            </div>

                        </div>
                        <br>
                        <div class="row">
                            <div class="col-xs-3 col-sm-3 col-md-3">   

                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6">

                                <p>text describing picture</p>
                            </div>
                            <div class="col-xs-3 col-sm-3">
                                <button class="btn btn-primary" @click="showModal = true">
                            Add to Vaults
                        </button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
        <modaladdtovaults v-if="showModal"></modaladdtovaults>
        <modaluploadkeep v-if="displayModal"></modaluploadkeep>
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
        }
    }

</script>

<style scoped>
    .panel {


        background-color: pink;
    }
</style>