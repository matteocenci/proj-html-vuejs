<script>
import { store } from '../store.js';
import HeroSection from '../components/HeroSection.vue';
import PlaneSection from '../components/PlaneSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import ResultsSection from '../components/ResultsSection.vue';
import CarouselSection from '../components/CarouselSection.vue'

export default {
    components: {
        HeroSection,
        PlaneSection,
        ServicesSection,
        ResultsSection,
        CarouselSection
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
    <ServicesSection :store="store.main_services" />
    <ResultsSection :results="store.results" />
    <CarouselSection :card="store.trusted_feedback" />


</template>

<style scoped lang="scss">

</style>
