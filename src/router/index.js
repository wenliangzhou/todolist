import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from './../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todolsit',
    components: {
      default:() => import(/* webpackChunkName: "ToDoList" */ '../views/ToDoList.vue'),
    },
    children:[
      { path: '', component: () => import(/* webpackChunkName: "List" */ '../views/List.vue'), },
      { path: 'test', component: () => import(/* webpackChunkName: "Test" */ '../views/Test.vue'), },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {

//   // ...
// })

export default router
