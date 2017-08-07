// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// firebase
import firebase from 'firebase'
import { config } from './helpers/firebaseConfig'

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created: function () {
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // console.log(user)
        // this.$router.push('/success')
      } else {
        // console.log('not logged in')
        // this.$router.push('/auth')
      }
    })
  }
})
