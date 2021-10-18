<template>
  <input
    type="range"
    :min="min"
    :max="max"
    v-model="level"
    :data-id="dataTag"
  >
</template>

<script>
import {
  setStatus,
  getStatus
} from '@/interfaces/Driver'
/**
* A volume slider that is responsible for sending Gain commands
* @displayName VolumeSlider
*/
export default {
  name: 'VolumeSlider',
  /**
  * Sets the range slider to the device's current status.
  */
  mounted() {
    this.level = getStatus(
      this.command,
      this.parameters
    );
  },
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
    dataTag: String
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
  watch: {
    /**
    * Keeps level synchronized with the device.
    */
    synchronizeLevel() {
      this.sendCommand();
    }
  }
}
</script>


<style scoped>
</style>
