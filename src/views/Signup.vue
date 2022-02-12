<template>
    <div>
     <h2 class="mt-3">Registrate para ver todo el contenido</h2>

        <div class="row justify-content-center pt-5">
        <form class="col-3" id="login" @submit.prevent="">
            <h5>Login</h5>
            <div class="form-group ">
                <label for="Username">Username</label>
                <input type="text" class="form-control" id="username" v-model="login.username" placeholder="Enter username">
                <span v-if="!login.username" class="text-danger">Debes ingresar el usuario</span>
               
            </div>
            <div class="form-group" >
                <label for="Password">Password</label>
                <input type="password" class="form-control" id="Password" v-model="login.password" placeholder="Password">
                <span v-if="!login.password" class="text-danger">Debes ingresar el password</span>
            </div>
            <router-link  to="/" class="router-link" >
            <button type="submit" @click="agregarLogin(login)" class="btn btn-danger">Enter</button>
            </router-link>
        </form>
        
        
        <form class="col-3" id="registro"  @submit.prevent="">
            <h5>Sign Up</h5>
            <div class="form-group ">
                <label for="Username2">Username</label>
                <input type="text" class="form-control" id="username2" v-model="input.username" placeholder="Enter usuario">
                <span v-if="!input.username" class="text-danger" >Debes ingresar el usuario</span>
                <span v-else-if="input.username.length <4 || input.username.length >12" class="text-danger">El usuario no cumple requisitos</span>
            </div>  
            <div class="form-group">
                <label for="Email2">Email address</label>
                <input type="text" class="form-control" id="Email2" v-model="input.email" placeholder="Enter email">
                
                <span v-if="!input.email" class="text-danger">Debes ingresar el email</span>
                <span v-if="input.email === /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/">El email no cumple requisitos</span>
                
            </div>
            <div class="form-group" >
                <label for="Password3">Password</label>
                <input type="password1" class="form-control" id="Password3" v-model="input.password3" placeholder="Password">
                <span v-if="!input.password3" class="text-danger">Debes ingresar el password</span>
            </div>
            <div class="form-group" >
                <label for="Password4">Repetir Password</label>
                <input type="password2" class="form-control" id="Password4" v-model="input.password4" placeholder="Repetir password">
                <span v-if="!input.password4" class="text-danger">Debes repetir el password</span>
                <span v-else-if=" input.password4 != input.password3" class="text-danger">Los password no coinciden</span>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" v-model="input.premium" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">¿Quieres ser premium?</label>
            </div>
            
            <button type="submit"  class="btn btn-danger" @click="agregarRegistro(input)">Register</button>
           
        </form>
        </div>
        
    </div>
</template>
<script>

import { mapActions } from 'vuex';
export default {
    name: 'Signup',
    
    data(){
        return{
            input:{
                username: '',
                email:'',
                password3: '',
                password4:'',
                premium: false,
            },
              login:{
                username: '',
                password: ''
            }
        }
    },
    computed:{
       
            registro: {
                get(){
                    return this.$store.state.registros
                },
                 set(val){
                    this.$store.commit('SET_REGISTROS', val);
                 }
            },
            log: {
                get(){
                    return this.$store.state.login
                },
                set(val){
                    this.$store.commit('SET_LOGIN', val);
                 }
              
        },
    },
    methods:{
        ...mapActions(['agregarRegistro', 'agregarLogin']),
        
       

        
      
        
    },
    mounted(){
        
        //this.$store.dispatch("agregarusers")
    }
}
</script>