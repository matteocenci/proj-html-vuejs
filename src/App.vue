<script>

</script>

<template>
  <Home/>
  
  <router-link :to="{name: 'home'}">home</router-link>
  <router-link :to="{name: 'about'}">about</router-link>
  <router-link :to="{name: 'contacts'}">contacts</router-link>
  <router-view></router-view>
  
</template>

<style scoped>


</style>
