<template>
<div class="vc-login-bg vc-full-height">
  <LoginForm />
</div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
  name: 'Login',
  /**
   * @see LoginForm
   */
  components: {
    LoginForm
  }
}
</script>

<style>
.vc-email-input {
  height: 50px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.vc-err-msg {
  font-family: Poppins-Bold;
  margin-left: 30px;
  margin-top: 35px;
}

.vc-full-height {
  height: 100%;
}

.vc-login-bg {
  background: linear-gradient(309deg, #e0e2db, #255f85, #d16014);
  background-size: 1000% 1000%;
  width: 100%;
  min-height: 800px;
  -webkit-animation: FluidBG 30s ease infinite;
  -moz-animation: FluidBG 30s ease infinite;
  animation: FluidBG 30s ease infinite;
  display: flex;
}

.vc-login-button {
  font-family: Poppins-Bold;
  padding: 12px;
  background: linear-gradient(309deg, #AA4465, #255F85, #D16014);
  background-size: 400% 400%;
  background-position: 0%;
  margin-top: 45px;
  border-radius: 25px;
  width: 88%;
  border: none;
  left: 18%;
  color: white;
  font-size: 20px;
  margin-left: 5%;
  transition: box-shadow 0.5s ease-in-out, opacity 0.5s ease-in, background-position 0.5s ease-in-out;
}

.vc-login-button:disabled {
  opacity: 0.5;
}

.vc-login-button:focus, .vc-login-button:hover {
  background-position: 100% 15%;
  box-shadow: 5px 5px 20px gray;
  outline: none;
}

.vc-login-form {
  margin: auto;
  width: 100%;
  display: flex;
}

.vc-login-form-container {
  width: 400px;
  padding-left: 10px;
  padding-right: 10px;
  margin: auto;
}

.vc-login-header {
  margin-bottom: 10%;
  padding-top: 15px;
}

.vc-login-icon {
  display: block;
  margin-left: 43%;
  margin-bottom: 45px;
}

.vc-login-input-container {
  background-color: white;
  border-radius: 5px;
  width: 100%;
  height: 95%;
  min-height: 650px;
  padding-left: 20px;
  padding-right: 20px;
  max-height: 650px;
  box-shadow: 1px 1px 15px #14110F;
  margin: auto;
}

.vc-input {
  font-family: Poppins-Regular;
  font-size: 15px;
  display: block;
  width: 85%;
  margin-top: 10px;
  border: none;
  margin-left: 5%;
  padding: 5px;
  border-bottom: 3px solid #f2f2f2;
  transition: border 2s;
}

.vc-input:focus {
  border-bottom: 3px solid #255F85;
  outline: none;
}

.vc-login-label {
  padding-left: 6%;
}

.vc-password-input {
  height: 50px;
  margin-top: 20px;
}

.vc-text-center {
  text-align: center;
}

@-webkit-keyframes FluidBG {
  0% {
    background-position: 11%
  }

  50% {
    background-position: 90% 100%
  }

  100% {
    background-position: 11%
  }
}

@-moz-keyframes FluidBG {
  0% {
    background-position: 11%
  }

  50% {
    background-position: 90% 100%
  }

  100% {
    background-position: 11%
  }
}

@keyframes FluidBG {
  0% {
    background-position: 11%
  }

  50% {
    background-position: 90% 100%
  }

  100% {
    background-position: 11%
  }
}
</style>
