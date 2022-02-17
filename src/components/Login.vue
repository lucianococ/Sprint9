<template>
    <div>
        <div class="btn" >
           <div class="row d-flex justify-content-around ">
               <div class="col-6">
                <router-link class="router-link" :to="{ name: 'Signup'}">  
                <button type="button" class=" btn btn-danger ">Login // Sign Up</button>
                </router-link> 
               </div>
                
                <div class="col-6">
                <UserLogout/>
                </div> 
           

           </div>
          
            
        </div>
    </div>
</template>
<script>
import UserLogout from '../components/UserLogout.vue'
export default {
    name: 'Login',
    components:{
        UserLogout

    }
    
    
}
</script>