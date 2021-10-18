<template>
  <div class="app">

    <!-- Input Volume Sliders -->

    <section id="input-volume-sliders">
      <VolumeSlider v-for="slider in sliders"
        :key="slider.id"
        :min="slider['Min']"
        :max="slider['Max']"
        :command="slider['Command']"
        :parameters="slider['Parameters']"
        :dataTag="slider['DataTag']"
      />
    </section>

  </div>
  <LogoutButton />
</template>

<script>
/**
* The Application View
* @displayName Application
*/
import LogoutButton from '@/components/LogoutButton.vue';
import VolumeSlider from '@/components/VolumeSlider.vue';
import { componentConfiguration } from '@/config/config.js';

export default {
  name: 'Application',
  /**
  * @see LogoutButton
  * @see VolumeSlider
  */
  components: {
    LogoutButton,
    VolumeSlider
  },
  data() {
    return {
      sliders: componentConfiguration['AudioInputSliders']
    }
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
