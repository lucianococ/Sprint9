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
                <p></p>
  
            

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
    name: 'Artisttem',
    

data(){
    return{
        //id: this.$route.params.starship.url.split("/starships/").pop().replace('/', ''),
        img: this.$route.params.artists.image[3],
        //piloto:  this.$route.params.starship.pilots,
        //film: this.$route.params.starship.films,
        name: this.$route.params.name,
        defaultImg: "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png" 

        

    }
},
computed:{
   // ...mapState(['peliculas', 'pelisFiltradas', 'pelisAsignadas']),
      
     /*artist: {
            get (){
                return this.$store.state.artistname      
                },
        
            set(val){
                this.$store.commit('SET_SIMILAR', val);
            }
        },
   films: {
            get (){
                return this.$store.state.pelisAsignadas        
                },
        
            set(val){
                this.$store.commit('SET_PELIS_ASIGNADAS', val);
            }
        },
    pilotos: {
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
},

},
mounted(){
     this.$store.dispatch("agregarsimilar"),
     this.$store.dispatch("buscarsimil")
     console.log(this.name);  
},
}
</script>