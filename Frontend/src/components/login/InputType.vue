<script setup>

const props = defineProps({
  placeholder: String,
  type: String,
  icon: String,
})

const emits = defineEmits(['buttonClicked'])

</script>

<template>
  <div class="inputTotal">
    <input class="input" :v-model="props.type" :type="props.type" :placeholder="props.placeholder">

<div class="inputSquare" @click="emits('buttonClicked')">
  <font-awesome-icon class="icon"  :icon="props.icon" style="color: #000000;" />
</div>
  </div>



</template>

<style scoped>
.input{
    border: none;
  outline: none;
    width: 26.46vw;
    height: 6.20vh;
    border-radius: 10px;
background: #F1F1F1;
box-shadow: 4px 4px 4px 0px rgba(54, 53, 53, 0.25);
color: #000000;
font-family: Nunito;
font-size: 15px;
font-style: normal;
font-weight: 900;
line-height: normal;
text-transform: uppercase;
padding-left: 20px;

}

.inputSquare{
  height: 6.30vh;
  width: 6.30vh;
  background-color: red;
  border-radius: 10px;
background: #DC1B1B;
box-shadow: 4px 4px 4px 0px rgba(54, 53, 53, 0.25);
display: flex;
justify-content: center;
    align-items: center;
    cursor: pointer;

}
.inputTotal{
  display: flex;
  column-gap: 12px;
}
.icon{
  width: 40px;
height: 40px;
}
.input::placeholder{
  font-size: 15px;
  color: #8F8E8E;
}
</style>