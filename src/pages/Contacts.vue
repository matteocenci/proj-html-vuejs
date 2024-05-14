<script>
import AppFormVue from "../components/AppForm.vue";
import AppSubscribe from "../components/AppSubscribe.vue";
import { store } from '../store';
export default {
    components: {
        AppFormVue, AppSubscribe
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <!-- contact-us section -->
    <section class="ms_contact text-center fs-6">
        <h1 class="pb-4">Contact Us</h1>
        <router-link :to="{ name: 'home' }" class="ms_home text-light">Home</router-link>
        <a href=""> / Contact Us</a>
    </section>
    <!-- /contact-us section -->
    <!-- newsletter section -->
    <section class="ms_newsletter container d-flex mb-3 mt-3">
        <div class="p-5">
            <p class="ms_send">NEWSLETTER</p>
            <h3 class="fs-1 fw-bold">Know First</h3>
            <p class="ms_respond">Follow closely and receive content about our company <br>and the news of the current
                market</p>
        </div>
        <div class="flex-grow-1 p-5">
            <AppSubscribe />
        </div>
    </section>
    <!-- /newsletter section -->
    <!-- business section -->
    <section class="business-section">

    </section>
    <!-- /business section -->
    <div class="container">
       <AppFormVue /> 
    </div>  
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
  background-color: rgba(0,0,0,0.3);
}

.ms_newsletter {
    .ms_send {
        color: $primary-color;
    }

    .ms_respond {
        color: $form-text;
    }
}

.business-section {
    background-color: #111117;
    height: 350px;
}

</style>