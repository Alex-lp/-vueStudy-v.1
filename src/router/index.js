import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import LoginContainer from '@/components/Login/LoginContainer'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    // component: () => import('@/components/HelloWorld')
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'LoginContainer',
    component: () => import('@/components/Login/LoginContainer')
  }
]

const router = new VueRouter({
  routes: routes
})
export default router
