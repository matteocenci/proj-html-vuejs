<script>
import { store } from '../store.js';
import HeroSection from '../components/HeroSection.vue';
import PlaneSection from '../components/PlaneSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import ResultsSection from '../components/ResultsSection.vue';

export default {
    components: {
        HeroSection,
        PlaneSection,
        ServicesSection,
        ResultsSection
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
    <ResultSection :results="store.results"/>


</template>

<style scoped lang="scss">

</style>
