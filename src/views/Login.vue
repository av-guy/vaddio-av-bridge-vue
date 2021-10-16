<template>
  <div class="vad-ctrl-login-container">
    <LoginForm/>
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
  .vad-ctrl-input {
    padding: 20px;
    font-size: 20px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #545454;
    background-color: white;
    width: 300px;
    margin: 10px;
    display: block;
    background: none;
    margin-left: auto;
    margin-right: auto;
  }
  .vad-ctrl-input:hover {
    border-bottom: 2px solid red;
  }
  .vad-ctrl-input:focus {
    border-bottom: 2px solid red;
  }
</style>
