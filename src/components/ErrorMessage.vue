<template>
  <div class="err">
    <span
      class="err-msg"
      v-bind:data-id="dataTag">{{message}}</span>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    message: String,
    dataTag: String
  },
  methods: {},
  computed: {
    visible() {
      console.log(this.message, 'is message');
      return this.message !== null;
    }
  }
}
</script>


<style scoped>
</style>
