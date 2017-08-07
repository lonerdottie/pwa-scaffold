import Vue from 'vue'
import Router from 'vue-router'

// routes
import Home from '@/components/routes/Home'
import Contact from '@/components/routes/Contact'
import About from '@/components/routes/About'

// firebase auth
import Auth from '@/components/routes/Auth'
import AuthSuccess from '@/components/routes/AuthSuccess'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/about',
    component: About
  }, {
    path: '/contact',
    component: Contact
  }, {
    path: '/auth',
    component: Auth
  }, {
    path: '/success',
    component: AuthSuccess
  }]
})
