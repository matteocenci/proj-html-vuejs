<script>
export default {

}
</script>

<template>
     <section class="ms_contact text-center fs-6">
        <h1 class="pb-4">Contact Us</h1>
        <router-link :to="{ name: 'home' }" class="ms_home text-light">Home</router-link>
        <a href=""> / Contact Us</a>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/mixins.scss' as *;
@use '../style/partials/variables.scss' as *;
.ms_contact {
    background-image: url(../assets/img/bg-1.jpg);
    background-position: center;
    background-size: cover;
    padding: 100px;
    position: relative;

    h1 {
        color: white;
        font-weight: 900;
        font-size: 4rem;
    }

    .ms_home,
    a {
        text-decoration: none;
        color: $primary-color;
    }
}

.ms_contact::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}

</style>