<script>
import { store } from '../store.js';
import HeroSection from '../components/HeroSection.vue';
import PlaneSection from '../components/PlaneSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import ResultsSection from '../components/ResultsSection.vue';
import CarouselSection from '../components/CarouselSection.vue'
import AppBusiness from '../components/AppBusiness.vue';
import AppForm from '../components/AppForm.vue';

export default {
    components: {
        HeroSection,
        PlaneSection,
        ServicesSection,
        ResultsSection,
        CarouselSection,
        AppBusiness,
        AppForm
    },
    data() {
        return {
            store,
            flag: true
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
    <AppBusiness :contacts="store.contacts" :flag="flag" />
    <AppForm />


</template>

<style scoped lang="scss">

</style>
