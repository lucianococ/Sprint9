<template>
     <div>
        
        <h1 class="text-light" >{{$route.params.name | mayusculas}}</h1>
       

    <div class="container">
       
        <div class="card bg-dark text-light">
            <div class="card-header ">
                <h5 class="card-title "> Artista: {{$route.params.albums.artist.name | capitalize}} </h5>
                <h5> Rank: {{this.rank['@attr'].rank}} </h5>

                <img :src="url['#text']" alt="" @error="imgError">
                              
                    
  
            </div>
  
        </div>
      
    </div>
    <br>
     

         <router-link to="/"><button class="btn btn-danger"> Volver</button></router-link> 

     
    </div>
    
</template>

<script>
//import {  mapState, mapGetters} from 'vuex'
//import CardPeli from '../components/CardPeli.vue'
//import CardPilotos from '../components/CardPilotos.vue'


export default {
  components: {  },
    name: 'Albumtem',
    

data(){
    return{
        //id: this.$route.params.starship.url.split("/starships/").pop().replace('/', ''),
        url: this.$route.params.albums.image[3],
        rank:  this.$route.params.albums,
        defaultImg: "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png" 

        

    }
},
computed:{
   // ...mapState(['peliculas', 'pelisFiltradas', 'pelisAsignadas']),
      
    
    
    /*pilotos: {
            get (){
                return this.$store.state.pilotosAsignados       
                },
        
            set(val){
                this.$store.commit('SET_PILOTO_ASIGNADO', val);
            }
        },
       
     ...mapGetters(['filteredPelis', 'filteredPeople']),     
      
},*/
methods:{
imgError(event){
         event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"

     } 
},/*
 mounted() {
     this.$store.dispatch("getfilms"); 
     this.$store.dispatch("getpeople"); 
     this.$store.dispatch("agregarpeli", this.film);
     this.$store.dispatch("agregarpiloto", this.piloto);  */ 
},
}
</script>