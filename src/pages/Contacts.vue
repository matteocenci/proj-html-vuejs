<script>
import AppFormVue from "../components/AppForm.vue"
export default {
    components: {
        AppFormVue
    }
}
</script>

<template>
    <!-- contact-us section -->
    <section class="ms_contact text-center fs-5">
           <h1>Contact Us</h1> 
           <router-link :to="{name: 'home'}" class="ms_home text-light">Home</router-link>
           <a href=""> / Contact Us</a>          
    </section>
    
<AppFormVue />
</template>

<style scoped lang="scss">
@use '../style/partials/mixins.scss' as *;
@use '../style/partials/variables.scss' as *;

.ms_contact {
    background-image: url(../assets/img/bg-1.jpg);
    background-position: center;
    background-size: cover;
    padding: 100px;

    h1 {
        color: white;
        font-weight: 900;
        font-size: 4rem;
    }

    .ms_home, a {
        text-decoration: none;
        color: $primary-color;
    }

}
</style>