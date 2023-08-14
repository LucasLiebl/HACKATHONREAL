<script setup>
import HeaderNav from '../components/HeaderNav.vue'
import ButtonType from '../components/login/ButtonType.vue'
import InputType from '../components/login/InputType.vue'
</script>
<template>
  <header-nav text1="t1" text2="t2" localto="/" localto2="/loginpage"> </header-nav>

  <main>
    <div class="container">
      <div class="titles">
        <h1>welcome to jame’s</h1>
        <h2>login to continue</h2>
      </div>

      <div class="inputs"><InputType> </InputType> <InputType> </InputType></div>

      <a> <RouterLink to="/"> oii</RouterLink> </a>
      <div class="buttons">
        <button-type buttontext="teste"> </button-type>
        <button-type buttontext="teste"> </button-type>
      </div>
    </div>
  </main>
</template>

<style>
.buttons{
    display: grid;
    grid-template-rows: 1fr 1fr;
    row-gap: 22px;

}
.titles{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 132px;
    margin-top: 40px;
}
.inputs{
    display: grid;
    grid-template-rows: 1fr 1fr;
    row-gap: 38px;
    margin-bottom: 16px;

}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;

}
a{
    margin-bottom: 52px;

}
h1{
    color: #000;
font-family: Nunito;
font-size: 45px;
font-style: normal;
font-weight: 900;
line-height: normal;
text-transform: uppercase;
}
h2{
    color: #797373;
font-family: Nunito;
font-size: 25px;
font-style: normal;
font-weight: 900;
line-height: normal;
text-transform: uppercase;
}
</style>
