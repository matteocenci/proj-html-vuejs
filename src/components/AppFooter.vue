<script>
import { store } from '../store.js';
export default {
    props: {
        contacts: Object
    },
}
</script>

<template>
    <section class="footer-section">
        <div class="row">
            <div class="col">
                <router-link :to="{ name: 'home' }"><img
                        src="https://nexgen.codings.dev/wp-content/uploads/2021/03/logo.svg" alt=""></router-link>
                <p>Built to the smallest detail with a focus on feature availability.</p>
                <ul>
                    <li>
                        <i class="fa-solid fa-phone"></i>
                        <span>{{ contacts.telephoneNumber }}</span>
                    </li>
                </ul>
            </div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/mixins.scss' as *;
@use '../style/partials/variables.scss' as *;

.footer-section {
    background-color: #111117;
    padding-top: 100px;

    img {
        width: 75%;
        padding-left: 30px;
    }
}
</style>