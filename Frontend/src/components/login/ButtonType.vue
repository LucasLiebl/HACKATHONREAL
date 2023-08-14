<script setup>
const props = defineProps({
  buttontext: String,
})

</script>
<template>

<button class="button"> {{props.buttontext}} </button>
</template>

<style>
.button{
    border: none;
  outline: none;
    width: 270px;
height: 45px;
flex-shrink: 0;
border-radius: 10px;
background: linear-gradient(90deg, #FF4848 0%, #FF6E4F 100%);
box-shadow: 5px 4px 4px 0px rgba(54, 53, 53, 0.25);
color: #FFF;
font-family: Nunito;
font-size: 20px;
font-style: normal;
font-weight: 900;
line-height: normal;
text-transform: uppercase;
transition: .3s ;
}
.button:hover{
cursor: pointer;
}
.button:active{
transform: scale(0.9);
}
</style>
