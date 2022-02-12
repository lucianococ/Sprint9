<template>
<div class="container">
            <h2 class="mt-5">Top Mundo</h2>
            <p>Busca los principales tracks y artistas por paises</p>
             <div class="row">
            <div class=" col-6 form-group">
             <label for="Inputtracks">Tracks</label>
             <input type="text" class="form-control" id="InputTrack" v-model="tracks" aria-describedby="emailHelp">

            <button type="submit"  class="btn btn-danger mt-3" @click="buscatracks(tracks)">Buscar</button>

             <ul class="mt-3 list-group">
                      <h3>Top 10 tracks</h3>
                      <div v-for='(item, index) in trackslist' :key='index'>  
                          <li v-show="index < 10" class="mb-3 list-group-item">
                            <h5 class="text-dark"> {{item.name}}</h5>
                            <h6 class="text-danger">{{item.artist.name}}</h6>
                          </li>
                      </div>
                    </ul>

            </div>
            

            <div class=" col-6 form-group">
             <label for="InputArtMundo">Artista</label>
             <input type="text" class="form-control" id="InputArtMundo" v-model="artmundo" aria-describedby="emailHelp">
            <button type="submit"  class="btn btn-danger mt-3" @click="buscarmundo(artmundo)">Buscar</button>
             <ul class="mt-3 list-group">
                      <h3>Top 10 Artistas</h3>
                      <div v-for='(item, index) in worldlist' :key='index'>  
                          <li v-show="index < 10" class="mb-3 list-group-item">
                            <h5 class="text-dark"> {{item.name}}</h5>
                            <h6 class="text-danger">{{item.listeners}}</h6>
                          </li>
                      </div>
                    </ul>
            </div>
            
         </div>

</div>
    
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'TopMundo',

    computed:{
        tracks:{

                set(val){
                    this.$store.commit('SET_TRACKS', val);
                }
        },
        artmundo:{
          

                set(val){
                    this.$store.commit('SET_ARTMUNDO', val);
                }
        },
        ...mapState(['trackslist','worldlist']),

    },
    methods:{
        ...mapActions(['buscatracks','buscarmundo']),
       
        

        
    }
   
}
</script>
