<script>
export default {
    props: {
        card: Array
    },
    data() {
        return {

        }
    }
}
</script>


<template>
    <section>
        <h6>CUSTOMER TESTIMONIALS</h6>
        <h3>Trusted Feedback</h3>
        <p>We work intensively in search of ideals that can add up in the lives of our customers. is what moves us
            and we are grateful for the recognition.</p>
        <div class="carousel">
            <div class="prev">
                <i class="fa-solid fa-angles-left"></i>
            </div>
            <div class="card-container">
                <div class="card" v-for="info in card">
                    <h4>{{ info.title }}</h4>
                    <div>
                        <p>{{ info.feedback }}</p>
                        <i class="fa-solid fa-quote-right position"></i>
                    </div>
                </div>
            </div>
            <div class="next">
                <i class="fa-solid fa-angles-right"></i>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;


section {
    background-color: black;
    padding: 40px;

    h6 {
        color: $primary-color;
        text-align: center;
        margin-bottom: 20px;
    }

    h3 {
        text-align: center;
        color: white;
        font-weight: bold;
        font-size: 3rem;
        margin-bottom: 20px;
    }

    p {
        color: white;
        margin-bottom: 50px;
        text-align: center
    }

    .carousel {
        padding: 20px;
        @include flex(row, space-between, center);

        i {
            color: $primary-color;
        }

        .prev {
            font-size: 2rem;
            width: 5%;
        }

        .card-container {
            width: 80%;
            @include flex(row, space-between, center);
            gap: 20px;
            overflow-x: auto;

            .card {
                height: 200px;
                padding: 10px;
                width: calc(100% / 3 - 20px);
                position: relative;
                border-radius: 20px;
                background-color: #232328;

                h4 {
                    color: white;
                    text-align: center;
                    margin-bottom: 40px;
                }

                div {
                    background-color: #232328;

                    p {
                        margin: 0;
                    }
                }

                .position {
                    position: absolute;
                    right: 10px;
                    bottom: 10px;
                }
            }
        }


        .next {
            font-size: 2rem;
            width: 5%;
        }

    }
}
</style>