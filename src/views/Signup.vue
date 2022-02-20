<template>
    <div>
     <h2 class="mt-3">Registrate para ver todo el contenido</h2>

        <div class="row justify-content-center pt-5">
        <form class="col-3" id="login" @submit.prevent="">
            <h5>Login</h5>
            <div class="form-group ">
                <label for="Username">Username</label>
                <input type="text" class="form-control" id="username" v-model="login.username" placeholder="Enter username">
                <span class="text-danger">{{erroreslogin.username}}</span>
               
            </div>
            <div class="form-group" >
                <label for="Password">Password</label>
                <input type="password" class="form-control" id="Password" v-model="login.password" placeholder="Password">
                <span class="text-danger">{{erroreslogin.password}}</span>
            </div>
            <button type="submit" @click="ValidarLogin()" class="btn btn-danger">Enter</button>
                      <hr>

             <div  v-if="confirmacionLog === 2">
                    <div id="alert" class="alert alert-success animate__animated animate__fadeIn"> Bienvenido</div>         
            </div>
            <div  v-else-if="confirmacionLog === 3">
                    <div id="alert" class="alert alert-danger animate__animated animate__fadeIn"> El usuario no existe</div>         
            </div>
        </form>
        
        
        <form class="col-3" id="registro"  @submit.prevent="">
            <h5>Sign Up</h5>
            <div class="form-group ">
                <label for="Username2">Username</label>
                <input type="text" class="form-control" id="username2" v-model="input.username" placeholder="Enter usuario">
                <label class="psw">Entre 6 y 13 caracteres.</label><br>
                <span class="text-danger" >{{errores.nom1}}</span>
                <span class="text-danger">{{errores.nom2}}</span>
            </div>  
            <div class="form-group">
                <label for="Email2">Email address</label>
                <input type="text" class="form-control" id="Email2" v-model="input.email" placeholder="Enter email">
                <span class="text-danger">{{errores.email1}}</span>
                <span class="text-danger">{{errores.email2}}</span>
                
            </div>
            <div class="form-group" >
                <label for="Password3">Password</label>
                <input type="password" class="form-control" id="Password3" v-model="input.password2" placeholder="Password">
                <label class="psw">Entre 5 y 10 caracteres. Mínimo un número y una mayúscula.</label><br>
                <span class="text-danger">{{errores.psw1}}</span>
                <span class="text-danger">{{errores.psw2}}</span>

            </div>
            <div class="form-group" >
                <label for="Password4">Repetir Password</label>
                <input type="password" class="form-control" id="Password4" v-model="input.password3" placeholder="Repetir password">
                <span class="text-danger">{{errores.psw3}}</span>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" v-model="input.premium" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">¿Quieres ser premium?</label>
            </div>
                
            
            <button type="submit"  class="btn btn-danger" @click="Validar()">Register</button>
            
          <hr>
            
            <div  v-if="confirmacion === 2">
                    <div id="alert" class="alert alert-success animate__animated animate__fadeIn"> Registro completo</div>         
            </div>
            <div  v-else-if="confirmacion === 3">
                    <div id="alert" class="alert alert-danger animate__animated animate__fadeIn"> El usuario ya existe</div>         
            </div>
           
       

           
        </form>
         </div>
        
    </div>
</template>
<script>

import { mapActions, mapState} from 'vuex';
export default {
    name: 'Signup',
    
    data(){
        return{
            input:{
                username: '',
                email:'',
                password2: '',
                password3:'',
                premium: false,
            },
              login:{
                username: '',
                password: ''
            },
            errores:{
                nom1: '',
                nom2: '',
                email1: '',
                email2: '',
                psw1: '',
                psw2: '',
                psw3:''            
                },
            erroreslogin:{
                username:'',
                password:''

            },
            confirmacion: 0,
            confirmacionLog: 0,
        
           
        }
    },
    computed:{
        ...mapState(['registro', 'loginOk']),
       
    },
    methods:{
        ...mapActions(['agregarRegistro', 'agregarLogin']),

        Validar(){
            this.errores = [];
            this.confirmacion = 1;

            if(!this.input.username){
                this.errores.nom1 = "Es nombre es requerido";
                this.confirmacion ++
            }
            else if(this.input.username.length < 6 || this.input.username >13) {
                this.errores.nom2 ="El nombre no cumple los requisitos";
                this.confirmacion ++
            }
            if(!this.input.email){
                this.errores.email1 = "El email es requerido";
                this.confirmacion ++

            }
            else if (!this.validar_email(this.input.email)) {
                this.errores.email2 = "El email no cumple los requisitos";
                this.confirmacion ++

            }
            if(!this.input.password2){
                this.errores.psw1 = "El password es requerido";
                this.confirmacion ++
                }
            else if (!this.validar_psw(this.input.password2)){
                this.errores.psw1 = "El password no cumple los requisitos"
                this.confirmacion ++
               
                }
            if(this.input.password3 != this.input.password2) {
                this.errores.psw3 = "El password no coincide";
                this.confirmacion ++

            }
            if(this.confirmacion == 1){
                  this.agregarRegistro(this.input)
                if(this.registro == true){
                this.confirmacion = 2;
                
            }else this.confirmacion = 3
            this.onReset()
            }
        },
        
        validar_email(email){

           var regex = /(.+)@(.+){2,}\.(.+){2,}/;
           return regex.test(email) ? true : false;

        },
         validar_psw(psw) {
                var regex = /(?=^.{5,10}$)((?=.*\w)(?=.*[A-Z])(?=.*[0-9]))^./;
                    
                return regex.test(psw) ? true : false;
        },
          onReset() {
        // Reset our form values
        this.input.username = ''
        this.input.email = ''
        this.input.password2= ''
        this.input.password3=''
        this.input.checked = ''
        
      },


      ValidarLogin(){
            this.erroreslogin = [];
            this.confirmacionLog = 1;
            if(!this.login.username)this.erroreslogin.username = "El nombre es requerido";
            this.confirmacionLog ++;
            if(!this.login.password)this.erroreslogin.password = 'El password es requerido'
            this.confirmacionLog ++;
            if(this.erroreslogin.length === 0){
                this.agregarLogin(this.login)
                if(this.loginOk == true){
                    this.confirmacionLog = 2
                }
            }else this.confirmacionLog = 3
            this.onReset2()
      },
      onReset2(){
          this.login.username= '',
          this.login.password= ''
      }
   
    },
    mounted(){
        
    }
}
</script>
<style>
.psw{
    font-size: 12px;
}



</style>