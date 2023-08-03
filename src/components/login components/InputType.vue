<script setup>
const props = defineProps({
  placeholder: String,
  type: String,
  icon: String,
})

</script>

<template>
  <div class="inputTotal">
    <input class="input" :v-model="props.type" :placeholder="props.placeholder">

<div class="inputSquare">
  <font-awesome-icon class="icon"  :icon="props.icon" style="color: #000000;" />
</div>
  </div>



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
.inputSquare{
  height: 68px;
  width: 68px;
  background-color: red;
  border-radius: 10px;
background: #DC1B1B;
box-shadow: 4px 4px 4px 0px rgba(54, 53, 53, 0.25);
display: flex;
justify-content: center;
    align-items: center;

}
.inputTotal{
  display: flex;
  column-gap: 12px;
}
.icon{
  width: 40px;
height: 40px;
}
</style>