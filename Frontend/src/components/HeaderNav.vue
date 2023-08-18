<script setup>
// import {useRouter} from 'vue-router';
// const router = useRouter();
const props = defineProps({
  text1: String,
  text2: String,
  localto: String,
  localto2: String,
  localto3: String
})
</script>
<template>
  <header class="header">
    <div>
      <RouterLink to="/" class="logo">
        <img src="https://i.imgur.com/7TZ6Sm6.png" alt="" />
        <h1>Jame's</h1>
      </RouterLink>
    </div>
    <nav class="NavText">
      <div class="box-text">
        <RouterLink :to="props.localto">
          <h1>{{ props.text1 }}</h1>
        </RouterLink>
      </div>
      <div class="box-text">
        <RouterLink :to="props.localto2">
          <h1>{{ props.text2 }}</h1>
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  width: 100%;
  height: 100px;
  background: linear-gradient(90deg, #ff4848 0%, #ff6e4f 96.57%);
  align-items: center;
  justify-content: space-between;
  font-size: 48px;
  box-shadow: 5px 4px 4px 0px rgba(54, 53, 53, 0.068);
}

.logo img {
  width: 70px;
  height: 70px;
}

.logo h1 {
  color: #fff;
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}

.logo {
  display: grid;
  justify-items: center;
  margin-left: 20px;
  margin-bottom: -5px;
}

.NavText {
  display: flex;
  flex-direction: row;
  gap: 10%;
  justify-content: flex-end;
  margin-right: 20px;
  align-items: center;
}

a{
  text-decoration: none;
}
.NavText h1 {

  text-decoration: none;
  color: #ffffff;
  font-family: Nunito;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}
.box-text {
  display: flex;
  height: 70px;
  border-radius: 15px;
  justify-content: center;
}
</style>
