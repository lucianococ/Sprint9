<template>
    <div class="container">
        <h2 class="mt-5" >Comparador</h2>
        <div class="row align-items-center">
            <div class=" col-6 form-group">
             <label for="InputArtista1">Artista 1</label>
             <input type="text" class="form-control" id="InputArtista1" v-model="artista1" aria-describedby="emailHelp">
             
            </div>
       
            <div class=" col-6 form-group">
             <label for="InputArtista2">Artista 2</label>
             <input type="text" class="form-control" id="InputArtista2" v-model="artista2" aria-describedby="emailHelp">
           
            </div>
            </div>
            <button type="submit"  class="btn btn-danger" @click="comparar1(artista1), comparar2(artista2)">Comparar</button><br>
            <div class="row">
                <div class="col-6">


                </div>
                <div class="col-6">

                 
                 


                </div>

            </div>
            
            
        
                     
                     

    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'Comparador',

    
    computed:{
            artista1:{
                
                get(){
                    return this.$store.state.artista1
                },
                set(val){
                    this.$store.commit('SET_ARTISTA1', val);
                }
            },
            artista2:{
               get(){
                    return this.$store.state.artista2
                },

                set(val){
                    this.$store.commit('SET_ARTISTA2', val);
                }
            },
            ...mapState(['art1','art2']),

        

        },
    methods:{
        
            ...mapActions(['comparar1', 'comparar2']),

       
        

        
    }
        
    
}
</script>
