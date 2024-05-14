<script>
import { store } from '../store.js';
import HeroSection from '../components/HeroSection.vue';
import PlaneSection from '../components/PlaneSection.vue';
import ServicesSection from '../components/ServicesSection.vue';

export default {
    components: {
        HeroSection,
        PlaneSection,
        ServicesSection
    },
    data() {
        return {
            store
        }
    }
}   
</script>

<template>

    <HeroSection />
    <PlaneSection />
    <ServicesSection :store="store.main_services"/>

</template>

<style scoped lang="scss">

</style>
