<template>
  <input
    v-bind:type="type"
    v-bind:name="placeholder"
    v-bind:placeholder="placeholder"
    v-bind:id="placeholder"
    v-model="value"
    v-on:focusout="notify"
    v-bind:data-id="dataTag"
    v-on:focusin="trigger"
    @keyup="notify"
  >
</template>

<script>
export default {
  /**
  * A generic input class designed to be used for pretty much any scenario
  * you could run into.
  * @displayName GenericInput
  */
  name: 'GenericInput',
  data() {
    return {
      /**
      * The v-model value this input will populate.
      */
      value: '',
    }
  },
  props: {
    /**
    * The type of input this will be
    * @values email, password, text
    */
    type: String,
    /**
    * The placeholder string
    * @values String
    */
    placeholder: String,
    /**
    * Regex literal for input validation
    * @values regex literal
    */
    regex: Object,
    /**
    * Data tag for input
    * @values string
    */
    dataTag: String,
    /**
    * Flag indicating whether this input should emit its value on keyup
    * @values true, false
    */
    onKeyUp: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    __isMatch() {
      return this.value.match(this.regex) !== null;
    },
    trigger() {
      this.$emit('FocusedIn', true);
    },
    notify(evt) {
      let onKeyUpEvent = evt.type == 'keyup' && this.onKeyUp;
      let focusOutEvent = evt.type == 'focusout';
      if (focusOutEvent) {
        this.$emit('FocusedIn', false);
      }
      let backSpaceEvent = evt.key == 'Backspace' && !this.__isMatch();
      if (onKeyUpEvent || focusOutEvent || backSpaceEvent) {
        this.$emit("IsValid", this.isValid);
      }
    },
  },
  computed: {
    /**
    * Computes whether or not this.value is a match for the regex prop
    */
    isValid: function() {
      if (this.__isMatch()) {
        return this.value;
      } else {
        return null;
      }
    }
  }
}
</script>


<style scoped>
</style>
