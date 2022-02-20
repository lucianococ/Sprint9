<template>
    <div>
        <div class="btn" >
            
               <div v-if="loginOk === false">
                <router-link class="router-link" :to="{ name: 'Signup'}">  
                <button type="button" class=" btn btn-danger ">Login // Sign Up</button>
                </router-link> 
               </div>
               
                    <div  v-if="loginOk === true">
                    <button @click="logOut" class="btn btn-danger mb-2">Log Out</button>


              
                    <div v-if="this.user[0].premium == true" >
                        <h6 class="text-white">Usuario Premium: {{this.user[0].username}}</h6>
                    </div>
                    <div v-else >
                        <h6 class="text-white">Usuario: {{this.user[0].username}}</h6>
                    </div>
                    
               
                    
                    
                    
                    </div>    
        </div>
    </div>
</template>
<script>
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
    name: 'Login',
    data(){
        return{
           // user : this.$store.state.Login.username
        }
    },
    components:{
      

    },
    computed:{
        ...mapState(['loginOk']),
        ...mapGetters({
            user: 'filtrarUser'}),
    },
     
    methods:{
        ...mapActions(['borrarlogin']),
        logOut(){
            this.$router.push('/')
            this.$store.state.autentificacion = false,
            this.$store.state.autentificacion2 = false,
            this.$store.state.loginOk = false,
            this.borrarlogin()
            }
    },
    
    
    
}
</script>