<script setup>
const props = defineProps({
  placeholder: String,
  vmodel: String
})

</script>

<template>

<input class="input" :v-model="props.vmodel" :placeholder="props.placeholder">

</template>

<style scoped>
.input{
    border: none;
  outline: none;
    width: 508px;
    height: 68px;
    border-radius: 10px;
background: #F1F1F1;
box-shadow: 4px 4px 4px 0px rgba(54, 53, 53, 0.25);

}
.input::placeholder{
  color: #8F8E8E;
font-family: Nunito;
font-size: 20px;
font-style: normal;
font-weight: 900;
line-height: normal;
text-transform: uppercase;
padding-left: 20px;
transform: translate(0, 10%);
}
</style>