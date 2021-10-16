<template>
  <button
    @click="logout">Logout
  </button>
</template>

<script>
import {
  getAuth,
  signOut
} from "firebase/auth";
/**
* Responsible for logging the user out if they are logged in.
* @displayName LogoutButton
*/
export default {
  name: 'LogoutButton',
  props: {},
  methods: {
    /**
    * Attempts to the log the user out of the current session.
    */
    async logout() {
      try {
        const auth = getAuth();
        await signOut(
          auth
        );
      } catch (err) {
        console.error(err);
      }
    }
  },
  computed: {}
}
</script>


<style scoped>
</style>
