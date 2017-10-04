<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">
                            <button class="exit btn btn-default glyphicon glyphicon-remove" @click="exit"></button>
                            <center>
                                <h4>Add To Vaults</h4>
                            </center>
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            <div class="panel">
                                <h4>Vault Name</h4>
                            </div>



                        </slot>
                    </div>

                    <div class="modal-footer">
                        <div class="text-center">
                            <slot name="footer">

                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>

</template>
<script>
    export default {
        props: [],
        name: 'modaladdtovaults',
        components: {

        },
        data() {
            return {

                showModal: true
            }
        },
        methods: {
            exit() {
                this.$emit('close')

            },
        },
        computed: {

        }
    }

</script>
<style scoped>
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
    @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
    .fa-spinner {
        font-size: 25px;
    }

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 400px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }
    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }



    .exit {
        margin-left: 200px;
        margin-top: -30px;
    }

    .form-control {
        max-width: 200px;
    }

    .glyphicon-remove {
        float: right;
        margin-left: 10000px;
        /* display: block; */
    }

    h4 {
        font-family: 'Fjalla One', sans-serif;
        text-align: center;
    }

    .create-button {
        text-align: center;
    }

    .align-everything {
        margin-bottom: 10px;
    }

    .align-right {
        padding-left: 68px;
    }
</style>