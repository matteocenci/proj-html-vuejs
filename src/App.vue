<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store.js';

export default {
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      store,
    }
  }
}

</script>

<template>
  <Home />

  <AppHeader />
  <AppMain />
  <!-- <router-link :to="{name: 'home'}">home</router-link> -->
  <!-- <router-link :to="{name: 'about'}">About</router-link> -->
  <!-- <router-link :to="{name: 'contacts'}">contacts</router-link> -->
  <router-view></router-view>
    <AppFooter :contacts="store.contacts" :footerCard="store.cardsArray" /> 
</template>

<style scoped lang="scss"></style>
