<script setup>
const props = defineProps({
    text1: String,
    text2: String,
})

</script>
<template>
    <header class="header">
        <div class="logo"><img src="https://i.imgur.com/7TZ6Sm6.png" alt="">
            <h1>Jame's</h1>
        </div>
        <nav class="NavText">
            <h1>{{ props.text1 }}</h1>
            <h1>{{ props.text2 }}</h1>
        </nav>
    </header>
</template>

<style>
.header {
    display: flex;
    width: 100%;
    height: 100px;
    background: linear-gradient(90deg, #FF4848 0%, #FF6E4F 96.57%);
    align-items: center;
    justify-content: space-between;
    font-size: 48px;

    
}

img {
    width: 70px;
    height: 70px;
}

h1 {
    color: #FFF;
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
    align-items: center

}

.NavText h1 {
    color: #FFF;
    font-family: Nunito;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}</style>
