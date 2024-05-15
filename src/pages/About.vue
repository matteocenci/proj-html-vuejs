<script>
import WhoWeAre from "../components/WhoWeAre.vue";
import AppHero from "../components/AppHero.vue";
import {store} from "../store.js";


    export default {
        components: {
            WhoWeAre,
            AppHero,
        },
        data() {
            return {
                store
            }
        }
        

    }   
</script>

<template>
    <AppHero :hero="store.heroSection[0]" class="app-hero-1"/>
    <WhoWeAre />
</template>

<style scoped lang="scss">

.app-hero-1 {
    background-image: url(../assets/img/bg-about.jpg);
}
</style>

