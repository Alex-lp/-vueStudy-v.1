import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import LoginContainer from '@/components/Login/LoginContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // component: HelloWorld
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'LoginContainer',
      component: LoginContainer
    }
  ]
})
