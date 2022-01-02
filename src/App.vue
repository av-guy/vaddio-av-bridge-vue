<template>
  <router-view/>
</template>

<style>
@import url("./fonts/font-awesome-4.7.0/css/font-awesome.css");

@font-face {
  font-family: Poppins-Regular;
  src: url('./fonts/poppins/Poppins-Regular.ttf');
}

@font-face {
  font-family: Poppins-Medium;
  src: url('./fonts/poppins/Poppins-Medium.ttf');
}

@font-face {
  font-family: Poppins-Bold;
  src: url('./fonts/poppins/Poppins-Bold.ttf');
}

@font-face {
  font-family: Poppins-SemiBold;
  src: url('./fonts/poppins/Poppins-SemiBold.ttf');
}

#app {
  height: 100vh;
  font-family: Poppins-Regular, sans-serif;
  padding: 0;
  margin: 0;
}

body {
  padding: 0;
  margin: 0;
}

@keyframes autofill {
  to {
    color: inherit;
    background: transparent;
  }
}

</style>
