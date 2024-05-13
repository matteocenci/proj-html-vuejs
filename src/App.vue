<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';



export default {
  components: {
    AppHeader,
  }
}

</script>

<template>
  <Home/>
  
  <AppHeader />
  <AppMain />
  <router-link :to="{name: 'home'}">home</router-link>
  <router-link :to="{name: 'about'}">about</router-link>
  <router-link :to="{name: 'contacts'}">contacts</router-link>
  <router-view></router-view>
  
</template>

<style scoped lang="scss">


</style>
