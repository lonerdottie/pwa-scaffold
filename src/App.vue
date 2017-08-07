<template>
  <div id="app">
    <app-layout>
    </app-layout>
  </div>
</template>

<script>
  require('material-design-lite')

  import appLayout from './components/appLayout'

  export default {
    name: 'app',
    components: {
      appLayout
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.3.0/material.teal-pink.min.css');
  @import url('../node_modules/firebaseui/dist/firebaseui.css');
</style>
