<template>
    <div class="container">
        <h2 class="mt-5" >Comparador</h2>
        <div class="row align-items-center mt-3">
            <div class=" col-6 form-group">
             <label for="InputArtista1">Artista 1</label>
             <input type="text" class="form-control" id="InputArtista1" v-model="artista1" aria-describedby="emailHelp">
             
            </div>
       
            <div class=" col-6 form-group">
             <label for="InputArtista2">Artista 2</label>
             <input type="text" class="form-control" id="InputArtista2" v-model="artista2" aria-describedby="emailHelp">
           
            </div>
            </div>
            <button type="submit"  class="btn btn-danger" @click="comparar1(artista1), comparar2(artista2)">Comparar</button><hr>
            <div class="row d-flex align-items-start mt-5">
                <div class="col-6">
                     <h3>{{art1.name}}</h3>
                    <div class="row ">
                        <div class="col-2">
                            <h4>Escuhas:</h4>
                            <h4>Oyentes: </h4>
                            <h6>Biografía:</h6>
                        </div>

                    <div class="col-8">
                        <div v-for="(item, index) in art1" :key="index">
                        <h3 class="text-danger"> {{item.playcount}}</h3>
                        <h3 class="text-danger"> {{item.listeners}}</h3>
                        <p>{{item.summary}}</p>
                        
                    </div>

                    </div>
                    </div>

                </div>
              <div class="col-6">
                   <h3>{{art2.name}}</h3>
                    <div class="row">
                        <div class="col-2">
                            <h4>Escuhas:</h4>
                            <h4>Oyentes: </h4>
                            <h6>Biografía:</h6>
                        </div>

                    <div class="col-8">
                        <div v-for="(item, index) in art2" :key="index">
                        <h3 class="text-danger"> {{item.playcount}}</h3>
                        <h3 class="text-danger"> {{item.listeners}}</h3>
                        {{item.summary}}
                    </div>

                    </div>
                    </div>

                        

                </div>

            </div>
            
            
        
                     
                     

    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'Comparador',

    data(){
        return{
        }
    },
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
