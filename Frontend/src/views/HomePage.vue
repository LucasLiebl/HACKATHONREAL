<script setup>
import HeaderNav from '../components/HeaderNav.vue'
import ButtonType from '../components/login/ButtonType.vue';
</script>
<template>
  <header-nav text1="Login" text2="SignUp" localto="" localto2="" localto3=""> </header-nav>
  <main class="container">
      <div class="title"><h1>the ideal chef for your will!</h1></div>
    <button-type buttontext="HIRE NOW">

    </button-type>
  </main>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1126"
        height="934"
        viewBox="0 0 1126 934"
        fill="none"
      >
        <g filter="url(#filter0_d_5_36)">
          <path
            d="M364.356 482.198C-156.844 565.398 9.856 845.865 158.356 975.698L1368.86 1185.7C1696.52 870.365 2150.96 204.598 1347.36 64.1984C543.756 -76.2016 576.523 46.0317 693.356 124.698C800.856 209.198 885.556 398.998 364.356 482.198Z"
            fill="url(#paint0_linear_5_36)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_5_36"
            x="0"
            y="0"
            width="1796.82"
            height="1189.7"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-10" dy="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_36" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_5_36"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_5_36"
            x1="1026.86"
            y1="-59.3017"
            x2="-155.644"
            y2="731.198"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0461369" stop-color="#FD6A4A" />
            <stop offset="0.860139" stop-color="#FF2121" />
          </linearGradient>
        </defs>
      </svg>
</template>

<style scoped>
.container{
    display: flex;
}

h1 {
  color: #000;
  text-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
  font-family: Nunito;
  font-size: 110px;
  font-style: normal;
  font-weight: 900;
  line-height: 84.9%; /* 108.672px */
}
svg {
  overflow: hidden;
  position: fixed;
  left: 725px;
  z-index: -1;
  top: 140px;
}
.title {
  width: 57.19vw;
  height: 19.91vh;
  flex-shrink: 0;
}
</style>
