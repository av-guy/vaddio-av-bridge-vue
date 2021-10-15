<template>
  <div class="login">
    <form @submit.prevent="login">
      <h2>Login</h2>

      <!-- Username Input -->

      <GenericInput
        type="email"
        v-bind:regex="emailRegex"
        dataTag="vad-ctrl-username"
        placeholder="Email"
        v-on:IsValid="handleEmail"
        class="vad-ctrl-input vad-ctrl-email"
      />

      <!-- Password Input -->

      <GenericInput
        type="password"
        v-bind:regex="passwordRegex"
        dataTag="vad-ctrl-password"
        placeholder="Password"
        v-on:IsValid="handlePassword"
        class="vad-ctrl-input vad-ctrl-email"
      />

      <!-- Login Button -->

      <FirebaseLoginButton
        v-bind:email="email"
        v-bind:password="password"
        v-bind:notValidated="notValidated"
        v-on:IsValidated="handleSuccess"
      />

      <!-- Error Message -->

      <ErrorMessage v-if="errorMessage"
        v-bind:message="errorMessage"
        dataTag="vad-ctrl-err"
      />
    </form>
  </div>
</template>

<script>
/**
* The Login Screen
* @displayName Login
*/
import GenericInput from '@/components/GenericInput.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';
import FirebaseLoginButton from '@/components/FirebaseLoginButton.vue';

export default {
  name: 'Login',
  /**
  * Uses GenericInput component for Email and Password values
  * @see GenericInput
  */
  components: {
    GenericInput,
    ErrorMessage,
    FirebaseLoginButton
  },
  data() {
    return {
      /**
      * The email value emitted by the GenericInput on valid text entry.
      * @values /^[^\s@]+@[^\s@]+\.[^\s@]+$/ or null.
      */
      email: null,
      /**
      * Value informing Login component of last element focused out.
      * @values 'email', 'password'
      */
      lastFocusOut: null,
      /**
      * The password value emitted by GenericInput on valid text entry.
      * @values /.{1,30}/ or null.
      */
      password: null,
      /**
      * Error message to be displayed if invalid entry is detected.
      * @values 'Invalid Email!', 'Invalid Password!'
      */
      errorMessage: null,
      emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      passwordRegex: /.{1,30}/,
      /**
      * Indicates whether or not the form is not validated. Disables or enables
      * the login button.
      * @values true, false
      */
      notValidated: true,
    }
  },
  methods: {
    /**
    * Routes user to app if they have been succesfully validated.
    * @arg status - true or false value indicating login status
    */
    handleSuccess(status) {
      if (status) {
        this.$router.push('/app');
      } else {
        this.errorMessage = 'Incorrect Email or Password';
      }
    },
    /**
    * handleCredentials checks to see if the email and password are valid.
    * If they aren't, depending upon whether or not the email was the element
    * last focused out, it populates this.errorMessage.
    *
    * @arg email - The email to check
    * @arg password - The password to check
    */
    handleCredentials(email, password) {
      email = this.email;
      password = this.password;
      if (email !== null && password !== null) {
        this.errorMessage = null;
        this.notValidated = false;
      } else {
        this.notValidated = true;
        if (email === null) {
          this.errorMessage = 'Invalid Email!';
        } else {
          if (this.lastFocusOut !== 'email') {
            this.errorMessage = 'Invalid Password!';
          } else {
            this.errorMessage = null;
          }
        }
      }
    },
    /**
    * handlePassword stores the password on focusout and assigns 'password'
    * as a value to this.lastFocusOut
    *
    * @arg password - The password value
    */
    handlePassword(password) {
      this.password = password;
      this.lastFocusOut = 'password';
      this.handleCredentials();
    },
    /**
    * handleEmail stores the email on focusout and assigns 'email'
    * as a value to this.lastFocusOut
    *
    * @arg email - The email value
    */
    handleEmail(email) {
      this.email = email;
      this.lastFocusOut = 'email';
      this.handleCredentials();
    }
  }
}
</script>
