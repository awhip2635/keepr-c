<template>
    <div class="container-fluid">
        <div class="UserProfile">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <h1 class="vaults">Vault Name</h1>

                </div>
                <div class="col-xs-5 col-sm-5 col-md-5">

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

    </div>


</template>

<script>
    export default {
        name: 'Vault',
        props: [],
        components: {

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


        background-color: pink;
    }

    .new-vault {
        margin-top: 50px;
    }
</style>