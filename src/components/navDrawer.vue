<template>
    <!-- drawer -->
      <div class="mdl-layout__drawer" id='nav-drawer'>
        <span class="mdl-layout-title">
          App Name
        </span>
        <nav class="mdl-navigation">
          <slot>
            <router-link class="mdl-navigation__link" to="/" @click.native="hideDrawer">Home</router-link>
            <router-link class="mdl-navigation__link" to="/contact" @click.native="hideDrawer">Contact</router-link>
            <router-link class="mdl-navigation__link" to="/about" @click.native="hideDrawer">About</router-link>
            <div id="firebaseui-auth-container"></div>
            <div id="userBadgeContainer" v-if="user">
                <img :src="user.photoURL" id="userBadgePhoto">
                <div id="userBadgeName">
                  <h6 style="margin: 0">Hello {{ user.displayName.split(' ')[0] }}</h6>
                </div>
                <div style="position: relative;">
                <button id="userBadgeMenu" class="mdl-button mdl-js-button mdl-button--icon" style="position: absolute; bottom: 0; right: 0">
                  <i class="material-icons">more_vert</i>
                </button>
              <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="userBadgeMenu">
                <li class="mdl-menu__item">Some Action</li>
              </ul>
              </div>
            </div>
            <router-link class="mdl-navigation__link" to="/" @click.native="userLogout" v-if="user">Logout</router-link>
          </slot>
        </nav>
      </div>
    <!-- end drawer -->
</template>

<script>
  import firebase from 'firebase'
  import firebaseui from 'firebaseui'

  console.log(firebaseui)

  var data = {
    user: false
  }

  export default {
    name: 'nav-drawer',
    data: function () {
      return data
    },
    methods: {
      hideDrawer: function () {
        document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
        document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
      },
      userLogout: function () {
        firebase.auth().signOut().then(function () {
          console.log('signed out successfully')
        }).catch(function (error) {
          console.log('error signing out: ' + error)
        })
      },
      userLoginContainer: function () {
        var uiConfig = {
          callbacks: {
            signInSuccess: function (currentUser, credential, redirectUrl) {
              console.log('signin success call')
              return false
            }
          },
          signInFlow: 'redirect',
          /* signInSuccessUrl: 'https://www.newbrains.net/',
          queryParameterForWidgetMode: 'select',
          queryParameterForSignInSuccessUrl: 'https://www.newbrains.net/', */
          signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
            // firebase.auth.EmailAuthProvider.PROVIDER_ID
          ]
        }
        if (!this.ui) this.ui = new firebaseui.auth.AuthUI(firebase.auth())
        this.ui.start('#firebaseui-auth-container', uiConfig)
      }
    },
    created: function () {
      this.standalone = window.matchMedia('(display-mode: standalone)').matches
      console.log(this.standalone)
      var vm = this
      window.addEventListener('keyup', function (event) {
        var drawOpen = document.getElementsByClassName('mdl-layout__drawer')[0].classList.contains('is-visible')
        if (event.keyCode === 27 && drawOpen) {
          // console.log('closing drawer')
          vm.hideDrawer()
        }
      })
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user.displayName + ' logged in')
          this.user = user
          // console.log(this)
        } else {
          this.user = false
          this.userLoginContainer()
          console.log('not logged in')
        }
      })
    },
    mounted: function () {
      /**
      this.userLoginContainer()
      var uiConfig = {
        callbacks: {
          signInSuccess: function (currentUser, credential, redirectUrl) {
            return false
          }
        },
        signInFlow: 'popup',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      }
      var ui = new firebaseui.auth.AuthUI(firebase.auth())
      ui.start('#firebaseui-auth-container', uiConfig)
      **/
    }
  }
</script>

<style>
  #userBadgeContainer {
    padding-top: 32px;
  }

  #userBadgeName {
    white-space: nowrap;
    vertical-align: middle;
    display: inline-block;
  }

  #userBadgePhoto {
    width: 32px;
    margin: 0px 16px 0px 16px;
    height: auto;
    display: inline;
    border-radius: 100%;
    border: 1px solid black;
    background: #eee no-repeat center;
    background-size: cover;
  }
</style>
