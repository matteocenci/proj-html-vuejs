<script>
export default {
    props: {
        contacts: Object,
    }
}
</script>

<template>
    <h4 class="fw-bold ms-5">Example Inc.</h4>
    <p class="ms-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <ul>
        <li>
            <i class="fa-solid fa-phone"></i>
            <span>{{ contacts.telephoneNumber }}</span>
        </li>

        <li>
            <i class="fa-solid fa-envelope"></i>
            <span>{{ contacts.secondaryMailAdress }}</span>
        </li>

        <li>
            <i class="fa-solid fa-location-dot"></i>
            <span>{{ contacts.secondaryAdress }}</span>
        </li>

        <li>
            <i class="fa-solid fa-location-dot"></i>
            <span>{{ contacts.mainAdress }}</span>
        </li>
    </ul>
    <button class="btn-prymary-color ms-5">VIEW MAP</button>
</template>

<style scoped lang="scss">
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

p {
    color: $form-text;
}

 ul {
        list-style-type: none;

        li {
            padding: 10px;

            i {
                color: $primary-color;
                padding: 10px;
                border: 1px solid #E4F1F2;
                border-radius: 50%;
                background-color: #E4F1F2;
                margin-right: 10px;

                &:hover {
                    background-color: $primary-color;
                    color: white;
                }
            }

            span {
                color: $primary-color;
            }
        }
 }

 .btn-prymary-color {
    background-color: #E4F1F2;
    color: $primary-color;

    &:hover {
        background-color: $primary-color;
        color: white
    }
 }
</style>