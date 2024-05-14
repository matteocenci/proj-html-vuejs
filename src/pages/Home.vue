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
        <div class="dark container">
            <h6>LOGISTIC SERVICES</h6>
            <h2>CARGO
                <hr> TRANSPORT
            </h2>
            <p>Fractional or exclusive road cargo transportation to all regions,
                <hr> with small, medium and large vehicles.
            </p>
            <div class="container-btn">
                <button class="btn-prymary-color">GET IN TOUCH</button>
                <button class="btn-secondary-color">READ MORE</button>
            </div>
        </div>
    </section>
    <section class="container who-we-are">
        <div class="info">
            <h6>WHO WE ARE</h6>
            <h3>Excellence in Transport</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit tortor, interdum sed cursus eu,
                sagittis ut nunc. Sed vitae tellus et arcu aliquet faucibus fermentum non lacus.</p>
            <p>Praesent fringilla quis massa et placerat. Mauris eu dui eget urna pellentesque gravida vitae quis nibh.
                Ut at augue tortor. Pellentesque quis suscipit magna.</p>
            <p class="item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam tortor, ultrices accumsan mauris eget,
                pulvinar tincidunt erat. Sed nisi nisi, rutrum sit amet elit</p>
            <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
            </ul>
        </div>
        <div class="card">
            <div class="top-card">
                <i class="fa-solid fa-dolly"></i>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <div class="main-card">
                <h4>Basic Plan</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h3>$  <span class="price">490</span>/ mo</h3>
            </div>
            <div class="bottom-card">
                <ul>
                    <li>Fractional Load <i class="fa-solid fa-check"></i></li>
                    <li>Refrigerated Cargo <i class="fa-solid fa-check"></i></li>
                    <li>Regional Delivery <i class="fa-solid fa-check"></i></li>
                    <li>Hazardous Cargo <i class="fa-solid fa-xmark"></i></li>
                    <li>Mobile Tracking <i class="fa-solid fa-xmark"></i></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

h6 {
    color: $primary-color;
}

section {
    width: 100%;
}

.hero {
    background-image: url(../assets/img/bg-9.jpg);

    hr {
        border: 0;
        margin: 0;
    }

    .dark {
        width: 100%;
        @include flex(column, center, flex-start);
        height: 100vh;

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

.who-we-are {
    padding-top: 40px;
    display: flex;
    gap: 20px;

    .info {
        width: 60%;

        h3 {
            font-weight: bold;
            font-size: 3rem;
        }

        .item {
            border-left: 3px solid black;
            padding: 20px;
        }
    }

    .card {
        width: 40%;
        padding: 20px;
        background-color: #ededed;
        border: 0;
        border-radius: 20px;

        .top-card {
            @include flex(row, space-between, flex-start);

            i {
                font-size: 2rem;
                color: $primary-color;
            }
        }

        .main-card {
            margin-top: 30px;

            h4 {
                font-size: 2rem;
            }

            h3 {
                color: $primary-color;
                font-size: 3rem;
                font-weight: lighter;

                span {
                    font-weight: bold;
                }
            }
        }

        .bottom-card {

            ul {
                padding: 0;
                li {
                    list-style-type: none;
                    @include flex(row, space-between, space-between);
                    margin-top: 15px;
    
                    i {
                        color: $primary-color;
                        font-size: 1.4rem;
                    }
                }
            }
        }
    }
}


</style>
