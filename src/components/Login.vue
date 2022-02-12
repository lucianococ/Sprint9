<template>
    <div>
        <div class="btn" >
           
            <router-link class="router-link" :to="{ name: 'Signup'}">  
        <button type="button" class="btn btn-danger">Login // Sign Up</button>
            </router-link>  
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login'
    
}
</script>