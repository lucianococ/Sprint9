import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
   path: '/tracks/:name',
   name: 'Trackitem',
   component: () => import(/* webpackChunkName: "name" */ '../views/TrackItem.vue'),
   meta: { requiresAuth2: true }
  },
  {
    path: '/artist/:name',
    name: 'Artistitem',
    component: () => import(/* webpackChunkName: "name" */ '../views/ArtistItem.vue'),
    meta: { requiresAuth2: true },
    
},
{
  path: '/album/:name',
  name: 'Albumitem',
  component: () => import(/* webpackChunkName: "name" */ '../views/AlbumItem.vue'),
  meta: { requiresAuth2: true}
  
},
{
  path:'/buscador',
  name:'Buscador',
  component: ()=> import(/* webpackChunkName: "name" */ '../views/Buscador.vue'),
  meta: { requiresAuth1: true }
},
{
  path:'/topmundo',
  name:'TopMundo',
  component: ()=> import(/* webpackChunkName: "name" */ '../views/TopMundo.vue'),
  meta: { requiresAuth1: true }
},
{
  path:'/comparador',
  name:'Comparador',
  component: ()=> import(/* webpackChunkName: "name" */ '../views/Comparador.vue'),
  meta: { requiresAuth1: true }
},
{
  path: '/signup',
  name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
},

  

  
]

const router = new VueRouter({
  mode: "history",
  routes
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(route => route.meta.requiresAuth1)){
    if (!store.state.autentificacion){
      next({
        name:'Signup'
      }
      );
    } else{
      next();
    }
  }else {
    next();
  }
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(route => route.meta.requiresAuth2)){
    if (!store.state.autentificacion2 && !store.state.autentificacion){
      next({
        name:'Signup'
      });
    } else {
      next(
      );
    }
  }else {
    next();
  }
})

export default router
