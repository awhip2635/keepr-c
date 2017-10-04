<template>
    <div class="container-fluid">
        <div class="login panel">
            <form @submit.prevent="login">
                <h4>
                    Email:
                    <input v-model="email" placeholder="email" class="in" type="text">
                </h4>
                <h4>
                    Password:
                    <input v-model="password" placeholder="password" class="in" type="password">

                </h4>
            
            <button type="submit" class="btn btn-default">
                Sign In
            </button>
            </form>
            
        </div>


    </div>
</template>

<script>
    export default {
        
        props: [],
        data() {
            return {
                
                    email: '',
                    password: ''
                
            }
        },
        methods: {
            login() {
                var obj = {
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch('login', obj)
                // logEmail = '';
                // logPassword = '';
            },
            log() {
                this.$store.dispatch('log')
            },
           
        },
        computed: {
            loggedIn() {
                return this.$store.state.loggedIn
            },
            logging() {
                return this.$store.state.logging
            },
        }
    }
</script>

<style scoped>
    .in {
        color: wheat;
    }
    input {
    border: 1px solid green;
}

</style>