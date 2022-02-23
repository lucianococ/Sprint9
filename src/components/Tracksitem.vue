<template>
     <div>
        
        <h1 class="text-light" >{{$route.params.name | mayusculas}}</h1>
       

    <div class="container">
       
        <div class="card bg-dark text-light">
            <div class="card-header ">
                <h5 class="card-title "> Artista: {{$route.params.tracks.artist.name | capitalize}} </h5>


                    <img :src="url['#text']" @error="imgError">
  
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
    name: 'TrackItem',
    

data(){
    return{
        url: this.$route.params.tracks.image[3],
        defaultImg: "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png" 
    }
},
computed:{},
  
methods:{
imgError(event){
         event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"

     } 

},
}
</script>