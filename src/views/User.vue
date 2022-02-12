<template>
    <div>
        <h4 style="font-family: Star Jedi Outline; color: rgb(255, 238, 88)">May the Force be with you</h4><br>
        <h5>{{$route.params.name}}</h5>

            <home></home>

        <button @click="logOut" class="btn btn-warning">Log Out</button>
    </div>
</template>
<script>
import store from '../store/index'

import Home from '../views/Home.vue'
export default {
    methods: {
        
        HomelogOut(){
            store.autentificacion = false
            this.$router.push('/')
        }
    },
    components:{
        Home
    }
    
}
</script>