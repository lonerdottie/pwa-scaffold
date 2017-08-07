<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>
<script>
  import firebase from 'firebase'
  import firebaseui from 'firebaseui'
  // import { config } from '@/helpers/firebaseConfig'

  export default {
    name: 'auth',
    mounted: function () {
      var uiConfig = {
        signInSuccessUrl: '/success',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      }
      var ui = new firebaseui.auth.AuthUI(firebase.auth())
      ui.start('#firebaseui-auth-container', uiConfig)
    }
  }
</script>
<style>
  @import url('../../../node_modules/firebaseui/dist/firebaseui.css');
</style>
