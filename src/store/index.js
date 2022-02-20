
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //listas del Home
    topart:[],
    toptemas: [],
    topalbum:[],
    // Artistas relacionados
    artistname:[],
    simils: [],
    // Registro y Login
    Login: [],
    loginOk: false,
    registrados: [
      {
        username: 'Luchismo',
        email: 'luchismo@gmail.com',
        password: 'Lucho000',
        premium: true
      },
      {
        username:'Luciano',
        email:'luciano@gmail.com',
        password:'Lucho111',
        premium: false
      }
    ],
    registro: true,
    autentificacion: false,
    autentificacion2: false,

    //Comparador
    artista1:'',
    artista2:'',
    api1: '',
    art1:[],
    api2: '',
    art2:[],
    artistaone: {},
    //Buscador
    busca:'',
    buscado: [],
    buscapi:'',
    //Top Mundo
    tracks:'',
    tracksapi:'',
    trackslist: [],
    artmundo:'',
    artmundoapi:'',
    worldlist:[]


    
  },
  mutations: {
    //listas del Home
    SET_TOPART(state, artist){
      state.topart = artist
    },
    SET_TOPTRACK(state, tracks){
      state.toptemas = tracks
    },
    SET_TOPALBUM(state, album){
      state.topalbum = album
    },
    // Artistas relacionados
    SET_SIMILAR(state, similar){
      state.artistname = similar
    },

    SET_SIMIL(state, simil){
      state.simils = simil
    },

    // Registro y Login
    SET_REGISTRO(state, val){
      state.registro = val 
    },
    SET_REGISTRADOS(state,val){
      state.registrados.push({
        username: val.username,
        email: val.email,
        password:val.password3,
        premium: val.premium
      })
    },
    SET_LOGIN(state, val){
      state.Login = {username : val.username,
      password: val.password}
      
    },
    SET_BORRAR_LOGIN(state){
      state.Login ={
        username: '',
        password: ''}
        console.log(state.Login)
    },
    SET_AUTENTIFICACION(state, status){
      state.autentificacion = status
      state.autentificacion2 = false;
      state.loginOk = true
      console.log(state.loginOk)
    },
    SET_AUTENTIFICACION2(state, status){
      state.autentificacion2 = status
      state.autentificacion = false;
      state.loginOk = true
      console.log(state.loginOk)
    },
    SET_LOGINOK(state, val){
      state.loginOk= val
    },
    //Comparador
    SET_ARTISTA1 (state, val1){
      state.artista1 = val1;
      state.api1 = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+this.state.artista1+'&api_key=a51537f9605543d4a355c711cc184521&format=json'

    },
    SET_ARTISTA2 (state, val2){
      state.artista2 = val2;
      state.api2 = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+this.state.artista2+'&api_key=a51537f9605543d4a355c711cc184521&format=json'
    },
    SET_ART2(state, val){
      state.art2 = val
      
      //console.log(state.artista2)
    },
    SET_ART1(state, val){
            state.art1 = val        
    },

    //Buscador
    SET_BUSCA(state, val){
      state.busca = val;
      state.buscapi = 'http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=' + this.state.busca + '&api_key=a51537f9605543d4a355c711cc184521&format=json';
    },
    SET_BUSCADO(state, buscado){
      state.buscado = buscado;
      
    },
    //TOP TRACKS
    SET_TRACKS(state, val){
      state.tracks = val;
      state.tracksapi = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country='+ this.state.tracks + '&api_key=a51537f9605543d4a355c711cc184521&format=json'
    },
    SET_ARTMUNDO(state, val){
      state.artmundo = val;
      state.artmundoapi = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country='+ this.state.artmundo + '&api_key=a51537f9605543d4a355c711cc184521&format=json'
    },
    SET_TRACKS_LIST(state, trackslist){
      state.trackslist = trackslist
    },
    SET_ARTWORLD_LIST(state, worldlist){
      state.worldlist = worldlist
    }
    
  },
  actions: {
    //listas del Home
    agregarTopArt({commit}) {
        axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=a51537f9605543d4a355c711cc184521&format=json')
     .then(response => {
        commit('SET_TOPART', response.data)
        //console.log(response.data)
      })  
    },
    
    agregarToptrack({commit}) {
      axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=a51537f9605543d4a355c711cc184521&format=json')
   .then(response => {
      commit('SET_TOPTRACK', response.data)
      //console.log(response.data)
    })  
  },
    agregarTopAlbum({commit}) {
      axios.get('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco&api_key=a51537f9605543d4a355c711cc184521&format=json')
  .then(response => {
      commit('SET_TOPALBUM', response.data) 
    })
  },
  
// Registro y Login
    agregarRegistro({commit, state}, val) {
      const registrado = state.registrados.some(item => item.username === val.username)
      if (!registrado){
        commit('SET_REGISTRADOS', val)
        commit('SET_REGISTRO', true)
        console.log(state.registrados)
      } else commit('SET_REGISTRO', false)
    },
    agregarLogin({commit, state}, val) {
        commit('SET_LOGIN', val)  
        let usuarios = state.registrados;
        const autentificacion = usuarios.some(usuario => usuario.username == val.username &&  usuario.password == val.password && usuario.premium == true)
        const autentificacion2 = usuarios.some(usuario => usuario.username == val.username &&  usuario.password == val.password && usuario.premium == false)

        if (autentificacion == true){
          commit('SET_AUTENTIFICACION', true)   
          commit('SET_LOGINOK', true)      
        }
        //const autentificacion2 = usuarios.some(usuario => usuario.username == val.username &&  usuario.password == val.password && usuario.premium == false)
        else if (autentificacion2 == true){
          commit('SET_AUTENTIFICACION2', true) 
          commit('SET_LOGINOK', true) 
        } else  commit('SET_LOGINOK', false)

        
       
    },
    borrarlogin({commit}){
      commit('SET_BORRAR_LOGIN')
    },
    
  //Comparador
  comparar1({commit, state}){
    axios.get(state.api1)
    .then(response => {
      commit('SET_ART1', response.data.artist)
    }) 
  },
  comparar2({commit, state}){
  axios.get(state.api2)
    .then(response => {
      commit('SET_ART2', response.data.artist)
    })
  },
  //Buscador
  buscar({commit, state}){
    axios.get(state.buscapi)
    .then(response => {
      commit('SET_BUSCADO', response.data.similarartists.artist)
      console.log(response.data.similarartists.artist)


    })

  },
  //Top Mundo
  buscatracks({commit, state}){
    axios.get(state.tracksapi)
    .then(response =>{
      commit('SET_TRACKS_LIST', response.data.tracks.track)
      console.log(response.data.tracks.track)
    })
  },
  buscarmundo({commit, state}){
    axios.get(state.artmundoapi)
    .then(response =>{
      commit('SET_ARTWORLD_LIST', response.data.topartists.artist)
      console.log(response.data.topartists.artist)
    })
  },

},
  getters: {
   filtrarUser(state){
     let user = state.Login.username
     let users = state.registrados
     let recuperado = users.filter(element => element.username == user)
     console.log(recuperado)

     return recuperado

    }  
  },
  
})
