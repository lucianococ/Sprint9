<template>
    <div class="container">
        <h2 class="mt-5">Buscador</h2>
        
            <div class="form-group">
                <form action="" id="buscador">
             <label for="InputArtista1">Busca algo similar a tu artista preferido</label>
             <input type="text" class="form-control"  v-model="busca" aria-describedby="emailHelp">
                </form>
         
                     <button type="submit"  class="btn btn-danger mt-3" @click="buscar(busca)">Comparar</button>
                     <br>
            <h5></h5>
            <div class="row d-flex justify-content-center">

                <div v-for="(item, index) in buscado" :key="index">
                    <div class="col-12 card m-2" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title"> {{item.name}}</h5>
                            <h6 class="text-dark">Nivel de coincidencia: {{item.match}}</h6>
                            <a :href="[item.url]" class="card-link">+ info</a>
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
    name: 'Busca',

  

    computed:{
            busca:{
                
                set(val){
                    this.$store.commit('SET_BUSCA', val);
                }
            },          
            ...mapState(['buscado']),
           
        },
    methods:{
        ...mapActions(['buscar']),
            
    },
}
</script>
