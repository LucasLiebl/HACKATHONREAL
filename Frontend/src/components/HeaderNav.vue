<script setup>
import {useRouter} from 'vue-router';
const router = useRouter();
const props = defineProps({
    text1: String,
    text2: String,
    localto: String
})

</script>
<template>
    <header class="header">
        <div class="logo"><img src="https://i.imgur.com/7TZ6Sm6.png" alt="">
            <h1>Jame's</h1>
        </div>
        <nav class="NavText">
            <div class="box-text"><RouterLink :to="props.localto"> <h1>{{ props.text1 }}</h1></RouterLink> </div>
            
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

.logo img {
    width: 70px;
    height: 70px;
}

.logo h1 {
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
    text-decoration: underline;
    color: #FF4848;
    font-family: Nunito;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}
.box-text{
    display: flex;
    width: 145px;
    height: 70px;
    border-radius: 15px;
    background-color: white;
    justify-content: center;
}
</style>
