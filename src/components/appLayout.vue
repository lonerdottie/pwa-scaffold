<template>
 <div id="app-navigation">
  
  <!-- layout --> 
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
              mdl-layout--fixed-header">
    
    <nav-bar></nav-bar>
    <!-- navigation bar 
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                    mdl-textfield--floating-label mdl-textfield--align-right">
          <label class="mdl-button mdl-js-button mdl-button--icon"
                 for="fixed-header-drawer-exp">
            <i class="material-icons">search</i>
          </label>
          <div class="mdl-textfield__expandable-holder">
            <input class="mdl-textfield__input" type="text" name="sample"
                   id="fixed-header-drawer-exp">
          </div>
        </div>
      </div>
    </header>
    
    <!-- end navigation bar -->
    
    <nav-drawer>
    </nav-drawer>
    
    <!-- content-->
   <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view> 
      </div>
    </main>
    <!-- end content-->
    
  </div>
  <!-- end layout -->
 </div>
</template>

<script>
  import navDrawer from './navDrawer'
  import navBar from './navBar'
  
  export default {
    name: 'app-navigation',
    components: {
      navDrawer,
      navBar
    }
  }
</script>

<style>
</style>
