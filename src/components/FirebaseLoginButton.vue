<template>
  <button
    type="submit"
    :disabled="notValidated"
    @click="login">Login
  </button>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
/**
* Responsible for managing signInWithEmailAndPassword Firebase Login
* @displayName FirebaseLoginButton
*/
export default {
  name: 'FirebaseLoginButton',
  props: {
    /**
    * The email to be used when trying to login.
    */
    email: String,
    /**
    * The password to be used when trying to login.
    */
    password: String,
    /**
    * Boolean flag indicating whether or not this button should
    * be enabled.
    */
    notValidated: Boolean
  },
  methods: {
    /**
    * Attempts to the log the user in; emits IsValidated status
    * to indicate whether or not the login attempt was succesful.
    */
    async login() {
      try {
        let auth = getAuth()
        await signInWithEmailAndPassword(
          auth, this.email, this.password
        );
        this.$emit('IsValidated', true);
      } catch (err) {
        this.$emit('IsValidated', false);
      }
    }
  },
  computed: {}
}
</script>


<style scoped>
</style>
