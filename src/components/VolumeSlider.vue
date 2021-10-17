<template>
  <input
    type="range"
    :min="min"
    :max="max"
    :value="half"
    :data-id="dataTag"
  >
</template>

<script>
import {
  setStatus
} from '@/interfaces/Driver'
/**
* A volume slider that is responsible for sending Gain commands
* @displayName VolumeSlider
*/
export default {
  name: 'VolumeSlider',
  data() {
    return {
      level: 0
    }
  },
  props: {
    /**
    * Minimum volume level
    */
    min: Number,
    /**
    * Maximum volume level
    */
    max: Number,
    /**
    * Command to be sent
    */
    command: String,
    /**
    * Object of parameters to qualify the command
    */
    parameters: Object,
    /**
    * Data ID for the volume slider
    */
    dataTag: String,
  },
  computed: {
    /**
    * Watches the level in the range slider and sends the command for
    * processing.
    */
    watchLevel() {
      if (this.level >= this.min && this.level <= this.max) {
        this.sendCommand();
      }
    }
  },
  methods: {
    /**
    * Sends the input command to the device.
    */
    async sendCommand() {
      setStatus(
        this.command,
        this.level,
        this.parameters
      );
    }
  },
  computed: {}
}
</script>


<style scoped>
</style>
