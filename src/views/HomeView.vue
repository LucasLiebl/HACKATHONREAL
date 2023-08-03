<script setup>
import InputType from '../components/login components/InputType.vue'
import ButtonType from '../components/login components/ButtonType.vue';
const placeholder = 'texto 1'
const type = 'email';
const icon = 'envelope'
</script>
<template>

  <input-type :type="type" :icon="icon" :placeholder="placeholder" />

  <button-type buttontext="teste"/>
</template>

<style>

</style>
