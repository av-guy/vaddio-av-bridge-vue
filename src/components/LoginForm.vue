<template>
  <div class="vc-login-form-container vc-full-height">
    <form @submit.prevent="login"
      class="vc-full-height vc-login-form">
      <div class="vc-login-input-container">
        <h2 class="vc-login-header vc-text-center">Welcome</h2>
        <i class="fa fa-microchip fa-4x vc-login-icon" aria-hidden="true"></i>

        <!-- Username Input -->

        <label class="vc-login-label">E-mail</label>
        <GenericInput
          type="email"
          v-bind:regex="emailRegex"
          dataTag="vc-username"
          placeholder="Email"
          v-on:IsValid="handleEmail"
          class="vc-input vc-email-input"
        />

        <!-- Password Input -->

        <label class="vc-login-label">Password</label>
        <GenericInput
          type="password"
          v-bind:regex="passwordRegex"
          dataTag="vc-password"
          placeholder="Password"
          v-on:IsValid="handlePassword"
          class="vc-input vc-password-input"
          :on-key-up="true"
        />

        <!-- Login Button -->

        <FirebaseLoginButton
          v-bind:email="email"
          v-bind:password="password"
          v-bind:notValidated="notValidated"
          v-on:IsValidated="handleSuccess"
          class="vc-login-button"
        />

        <!-- Error Message -->

        <transition name="fade">
          <ErrorMessage v-if="errorMessage"
            v-bind:message="errorMessage"
            dataTag="vc-err"
            class="vc-err-msg"
          />
        </transition>

        </div>
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
  name: 'LoginForm',
  /**
  * @see GenericInput
  * @see ErrorMessage
  * @see FirebaseLoginButton
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
    triggerFocus(status) {
        this.emailFocused = status;
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
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
