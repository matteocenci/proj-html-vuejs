<script>
export default {

}
</script>

<template>
    <section class="business-section">
        <div class="row">
            <div class="col">
                <p class="talk-expert">TALT TO AN EXPERT</p>
                <h2 class="fw-bold fs-1 text-light">Our Business Units</h2>
                <p class="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="col">
                <ul>
                    <li>
                        <AppContact />
                    </li>
                </ul>
            </div>
            <div class="col"></div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

section {
    width: 100%;
}
.business-section {
    background-color: #111117;
    height: 350px;

    .talk-expert {
        color: $primary-color;
    }
    .lorem {
        color: $form-text;
    }

}
</style>