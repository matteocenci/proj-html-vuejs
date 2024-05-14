<script>
export default {

}   
</script>

<template>
    <section class="hero">
        <div class="dark">
            <h4>LOGISTIC SERVICES</h4>
            <h2>CARGO TRANSPORT</h2>
            <p>Fractional or exclusive road cargo transportation to all regions, with small, medium and large vehicles.</p>
            <button class="btn-prymary-color">GET IN TOUCH</button>
            <button class="btn-secondary-color">READ MORE</button>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

.hero {

    .dark {
        width: 100%;
        @include flex(column, center, flex-start);
        height: 100vh;
        background-image: url(../assets/img/bg-9.jpg);

        h4 {
            color: $primary-color;
        }
    }
}
</style>
