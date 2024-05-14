<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    }
}   
</script>

<template>
    <section class="hero">
        <div class="dark">
            <h6>LOGISTIC SERVICES</h6>
            <h2>CARGO <hr> TRANSPORT</h2>
            <p>Fractional or exclusive road cargo transportation to all regions, <hr> with small, medium and large vehicles.</p>
            <div class="container-btn">
                <button class="btn-prymary-color">GET IN TOUCH</button>
                <button class="btn-secondary-color">READ MORE</button>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

.hero {
    background-image: url(../assets/img/bg-9.jpg);

    hr {
        border: 0;
        margin: 0;
    }

    .dark {
        padding: 80px;
        width: 100%;
        @include flex(column, center, flex-start);
        height: 100vh;

        h6 {
            color: $primary-color;
        }

        h2 {
            color: white;
            font-weight: bold;
            font-size: 4rem;
        }

        p {
            color: white;
            font-size: 1.2rem;
        }

        .container-btn {
            @include flex(row, flex-start, center);

            button {
                margin-right: 15px;
            }
        }
    }
}
</style>
