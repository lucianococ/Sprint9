<template>
    <div>
        <button @click="logOut" class="btn btn-danger mb-2">Log Out</button>
        <div id= "texto" v-if="userlogin[0].premium == false ">
            <div v-for="(item, index) in userlogin" :key="index">   
                <p>Usuario: {{item.username}}</p>
            </div>        
            </div>
        <div id= "texto" v-if="userlogin[0].premium == true ">
        <div v-for="(item, index) in userlogin" :key="index">   
                <p>Usuario Premium: {{item.username}}</p>
            </div> 
        </div>
        

        
       
    </div>
</template> 
<script>
//import store from 'vuex'
import {mapActions, mapGetters} from 'vuex'
export default {
    /*data(){
        return {
            user:this.userlogin[0].username
        }
    },*/
    computed:{
        
        ...mapGetters({
            userlogin:'filtrarUser'
        }),
        

    },
    methods: {
        ...mapActions(['borrarlogin']),
        logOut(){
            this.$router.push('/')
            this.$store.state.autentificacion = false,
            this.$store.state.autentificacion2 = false,
            this.borrarlogin()
            }
    },
   
    
}
</script>