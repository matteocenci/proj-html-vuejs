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
    <section class="ms_contact d-flex justify-content-center">
        <h1 class="align-content-center">Contact Us</h1>
    </section>
<AppFormVue />
</template>

<style scoped lang="scss">
@use '../style/partials/mixins.scss' as *;
@use '../style/partials/variables.scss' as *;

.ms_contact {
    background-image: url(../assets/img/bg-1.jpg);
    height: 350px;
    background-position: center;
    background-size: cover;

    h1 {
        color: white;
        font-weight: 900;
        font-size: 4rem;
    }
}
</style>