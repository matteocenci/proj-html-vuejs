<script>
export default {

}
</script>

<template>
    <div class="container">
        <p class="ms_send">SEND A MESSAGE</p>
        <h2 class="fw-bold fs-1">Get in Touch</h2>
        <p class="ms_respond">We will respond to your message as soon as possible</p>
        <div class="d-flex justify-content-between gap-4">
            <div class="flex-grow-1">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Phone">

            </div>
            <div class="flex-grow-1">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    placeholder="--Please choose an option--">

            </div>
        </div>
        <div class="mb-3 flex-grow-1">
            <label for="exampleFormControlTextarea1" class="form-label"></label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Message</textarea>
        </div>

        <button class="btn-prymary-color">SEND</button>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/mixins.scss' as *;
@use '../style/partials/variables.scss' as *;

input,
textarea {
    background-color: $bg-form;
    color: $form-text;
    padding: 13px;
    border-radius: 3px;
}

.ms_send {
    color: $primary-color;
}

.ms_respond {
    color: $form-text;
}
</style>