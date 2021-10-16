<template>
  <div class="app">
    <h1>This is the main page</h1>
  </div>
  <LogoutButton />
</template>

<script>
/**
* The Application View
* @displayName Application
*/
import LogoutButton from '@/components/LogoutButton.vue'

export default {
  name: 'Application',
  /**
  * @see LogoutButton
  */
  components: {
    LogoutButton
  },
  methods: {}
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
