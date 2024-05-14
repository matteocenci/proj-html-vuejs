<script>
export default {

}
</script>

<template>
    <label for="exampleFormControlInput1" class="form-label"></label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name">
    <label for="exampleFormControlInput1" class="form-label"></label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email">
    <button class="btn-prymary-color mt-3">SUBSCRIBE</button>
</template>

<style scoped lang="scss">
@use '../style/partials/mixins.scss' as *;
@use '../style/partials/variables.scss' as *;
  input {
        border-radius: 3px;
        padding: 13px;
        background-color: $bg-form;
        color: $form-text;
    }
</style>