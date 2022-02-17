<template>
  <div id="app">
    <div class="contenedor">
    <Header></Header>
   <router-view :key="$route.path" />

   <br>
  <footer >
    <div class="footer-content">
        <div class="copyright">
          Designed and Developed by   
          <a href="lucianococcio.com">Luciano Coccio</a>
          @copyright 2021
        </div>
      
      
   </div>
  </footer>

   </div>
    
  </div>
</template>
<script>
import Header from '../src/components/Header.vue'


export default {
  components: {  Header },
       
 
}
</script>

<style lang="scss">

#app {
  height: calc(100vh - 40px);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #000;  
  text-decoration: none;
}

#nav {
  //padding-top: 10px;
  a {
    font-weight: bold;
    color: #fff;
    font-style: none;
    font-size: 20px;

    &.router-link-exact-active {
      color: rgb(196, 38, 41);
    }
   
   
  }
}
footer{
  //position: absolute;
  bottom: 0;
  a {
       color: rgb(196, 38, 41)
    }

}
 
.router-link{
  &.router-link{
      text-decoration: none;
    }
}

.card-title{
  font-family: Arial, Helvetica, sans-serif ;
  color: rgb(196, 38, 41)
}

.logo {
  width: 30%;
}



 


</style>
