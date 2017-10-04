<template>
    <div class="container-fluid">
        <div class="login">
        
            <form @submit.prevent="register">
                <h4>
                Email:
                <input v-model="email" type="text">
                </h4>
                <h4>
                    Username:
                    <input v-model="username" type="text">
                </h4>
                <h4>
                    Password:
                    <input v-model="password" type="password">

                </h4>
                <h4>
                Confirm Password:
                <input type="password">
                </h4>
            
            <button class="btn btn-default">
                Register
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
                    username: '',
                    password: ''
                
            }
        },
        methods: {
            register() {
                var obj = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch('register', obj)
                name = '';
                // email = '';
                // password = '';
            },
            reg() {
                this.$store.dispatch('reg')
            },
        },
        computed: {

            registering() {
                return this.$store.state.registering
            },
        }
    }
</script>

<style scoped>
.form {
   flex-direction: column; 
   
   
}
input {
    border: 1px solid green;
}
h4 {
    padding: 10px;
}
</style>