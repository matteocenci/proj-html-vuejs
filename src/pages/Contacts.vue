<script>
import AppBusiness from "../components/AppBusiness.vue";
import AppFormVue from "../components/AppForm.vue";
import AppHero from "../components/AppHero.vue";
import AppNewsletter from "../components/AppNewsletter.vue";
import AppSubscribe from "../components/AppSubscribe.vue";
import { store } from '../store';
export default {
    components: {
        AppFormVue, AppSubscribe,
        AppBusiness,
        AppHero,
        AppNewsletter
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
    <AppHero />
    <!-- /contact-us section -->
    <div class="container">
        <div class="row">
            <div class="col mt-5">
                <!-- newsletter section -->
                <AppNewsletter />
                <!-- /newsletter section -->
            </div>

            <div class="col mt-5">
                <!-- subscribe section -->
                <AppSubscribe />
                <!-- /subscribe section -->
            </div>
        </div>
    </div>


    <!-- business section -->
    <AppBusiness :contacts="store.contacts" />
    <!-- /business section -->
    <!-- form section -->
    <AppFormVue />
    <!-- /form section -->
</template>

<style scoped lang="scss">
@use '../style/partials/mixins.scss' as *;
@use '../style/partials/variables.scss' as *;
</style>