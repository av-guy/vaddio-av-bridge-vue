<template>
  <button
    type="submit"
    :disabled="notValidated"
    @click="synchronizeData">Login
  </button>
</template>

<script>
export default {
  name: 'FirebaseSubmitButton',
  props: {
    notValidated: Boolean
  },
  methods: {
    async synchronizeData() {
      return 1;
    }
  },
  computed: {}
}
</script>

<style scoped>
</style>
