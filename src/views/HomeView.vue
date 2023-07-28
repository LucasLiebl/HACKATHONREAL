<script setup>
import InputType from '../components/InputType.vue'
const placeholders = ['texto 1', 'texto2', 'kjfkdjkjdk  ']
const vmodel = ['texto dsds', 'texto2dds', 'dsdsds  ']
</script>
<template>

  <input-type v-for="(placeholder, i) in placeholders" :key="i" :placeholder="placeholder" :vmodel="vmodel" />

</template>

<style>

</style>
