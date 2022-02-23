<template>
     <div>
        
        <h1 class="text-light" >{{$route.params.name | mayusculas}}</h1>
       

    <div class="container">
       
        <div class="card bg-dark text-light">
           
                 <div class="card-header ">
                <h5 class="card-title "> {{$route.params.name | capitalize}} </h5>

                <img :src="img['#text']" @error="imgError">

                <p>Playcount: {{$route.params.artists.playcount}}</p>

                <p>Escuchas: {{$route.params.artists.listeners}}</p>
            </div>
        </div>
      
    </div>
    <br>
         <router-link to="/"><button class="btn btn-danger"> Volver</button></router-link> 
    </div>
    
</template>

<script>
export default {
  components: {  },
    name: 'Artisttem',
    

data(){
    return{
        img: this.$route.params.artists.image[3],
        name: this.$route.params.name,
        defaultImg: "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png" 
    }
},
computed:{},
methods:{
imgError(event){
         event.target.src = "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"

     } 
},

}
</script>