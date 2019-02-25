import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'
import GlobalSettings from './views/GlobalSettings.vue'
import TableList from './views/TableList.vue'
import TableAdd from './views/TableAdd.vue'
import TableDelte from './views/TableDelte.vue'
import CategoryList from './views/CategoryList.vue'
import CategoryAdd from './views/CategoryAdd.vue'
import CategoryDelte from './views/CategoryDelte.vue'
import CategoryUpdate from './views/CategoryUpdate.vue'
import dishList from './views/dishList.vue'
import dishAdd from './views/dishAdd.vue'
import dishDelte from './views/dishDelte.vue'
import dishUpdate from './views/dishUpdate.vue'
import OrderList from './views/OrderList.vue'
import Securifty from './views/Securifty.vue'


Vue.use(Router)

export default new Router({
  routes:[
    {path: '/',redirect: '/Login'},
    {path: '/login', component:Login},
    {
      path: '/main',
      component:Main,
      children:[
        {path:'',redirect:'table/list'},
        {path:'/settings',component:GlobalSettings},
        {path:'/table/list',component:TableList},
        {path:'/table/add',component:TableAdd},
        {path:'/table/delte',component:TableDelte},
        {path:'/category/list',component:CategoryList},
        {path:'/category/add',component:CategoryAdd},
        {path:'/category/delte',component:CategoryDelte},
        {path:'/category/update',component:CategoryUpdate},
        {path:'/dish/list',component:dishList},
        {path:'/dish/add',component:dishAdd},
        {path:'/dish/delte',component:dishDelte},
        {path:'/dish/update',component:dishUpdate},
        {path:'/order/list',component:OrderList},
        {path:'/security',component:Securifty},
      ]
       
    },
    {path: '*', component:NotFound},
  ]
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: Home
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  //   }
  // ]
})
