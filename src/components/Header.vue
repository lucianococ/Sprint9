<template>
    <div>
        <header>
            <div class="row bg-dark align-items-center p-3">
                <div class="col-4">
                    <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Lastfm_logo.svg" alt="lastfm logo">
                </div>
            <div class="logo align-item-center col-4">
               <the-navbar></the-navbar>
            </div>
            <div class="col-4">
                        <login></login>
           
            </div>
            </div>
        </header>
    </div>
</template>
<script>
import Login from '../components/Login.vue'
import TheNavbar from '../components/TheNavbar.vue'


export default {
  components: { Login, TheNavbar},
    name:'Header',
    
    
}
</script>