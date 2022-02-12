<template>
    <div>
        <h5>Login</h5>
        <div class="row justify-content-center">
        <form class="col-3" @submit.prevent="">
            <div class="form-group ">
                <label for="Username">Username</label>
                <input type="text" class="form-control" id="username" v-model="input.username" placeholder="Enter username">
                <span v-if="!input.username" class="text-danger">Debes ingresar el usuario</span>
               
            </div>
            <div class="form-group" >
                <label for="Password">Password</label>
                <input type="password" class="form-control" id="Password" v-model="input.password" placeholder="Password">
                <span v-if="!input.password" class="text-danger">Debes ingresar el password</span>
            </div>
            <button type="submit" @click="login()" class="btn btn-primary"  >Submit</button>
        </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return{
            input:{
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login(){
            
            if(this.input.username == "admin" && this.input.password == "pass"){    
                
                //..
            } else {
                console.log("The username or password is not correct");
            }
        }
    },
    
}
</script>