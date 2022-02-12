<template>
  <div class="container ">
   <div class="row pt-5">
                <ul class="col-4 list-group">
                  <h3>Top 10 artistas</h3>
                  <div v-for='(item, index) in topart.artists.artist' :key='index'>  
                    <router-link class="router-link" :to="{ name: 'Artistitem', params:{ name:item.name, artists:item}}">
                      <li v-show="index < 10" class="list-group-item">
                        <h4 class="text-dark">{{item.name }} </h4>
                      </li>
                      
                      </router-link>                
                      
                  </div>
                </ul>
                
                      <ul class="col-4 list-group">
                      <h3>Top 10 tracks</h3>
                      <div v-for='(item, index) in toptemas.tracks.track' :key='index'>  
                        <router-link  class="router-link" :to="{ name: 'Trackitem', params:{ name:item.name, tracks:item}}">                
                          <li v-show="index < 10" class="list-group-item">
                            <h5 class="text-dark">  {{item.name }} </h5>
                          </li>
                          </router-link>
                      </div>
                    </ul>
                
                
                <ul class="col-4 list-group">
                  <h3>Top 10 albums</h3>
                  <div v-for='(item, index) in topalbum.albums.album' :key='index'>  
                    <router-link class="router-link" :to="{ name: 'Albumitem', params:{ name:item.name, albums:item}}">
                      <li v-show="index < 10" class="list-group-item">
                        <h5 class="text-dark">{{item.name }} </h5>
                      </li>
                      </router-link>                  
                  </div>
                </ul>
                    
                    
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  
  computed:{
    ...mapState(['topart', 'toptemas', 'topalbum'])
  },
  mounted(){
    this.$store.dispatch("agregarTopArt")
    this.$store.dispatch("agregarToptrack")
    this.$store.dispatch("agregarTopAlbum")
  },
  
}
</script>