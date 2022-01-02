<template>

  <div class="app">
    <nav class="vc-chair-navigation">
      <LogoutButton/>
    </nav>
    <div class="vc-center">
      <h1>Chair Assignment</h1>
      <form id="vc-chair-form">
        <draggable
            tag="ul"
            v-model="myArray"
            group="people"
            @start="drag=true"
            @end="drag=false"
            item-key="id">
          <template #item="{element}">
            <li class="vc-list-group-item">
              <span class="vc-element-name">{{ element.name }}</span>
              <input data-id="vc-chair-input" type="text" v-model="element.text"/>
            </li>
          </template>
        </draggable>
        <FirebaseSubmitButton v-bind:notValidated="notValidated"/>
      </form>
    </div>
  </div>

</template>

<script>
/**
 * The Application View
 * @displayName Application
 */
import LogoutButton from '@/components/LogoutButton.vue';
import FirebaseSubmitButton from '@/components/FirebaseSubmitButton.vue';
import draggable from 'vuedraggable';

export default {
  name: 'Application',
  /**
   * @see LogoutButton
   * @see FirebaseSubmitButton
   * @see draggable
   */
  components: {
    FirebaseSubmitButton,
    LogoutButton,
    draggable
  },
  mounted() {
    /**
     * Populate the myArray with eighteen duplicate objects containing the name, id, and text of the chair.
     * @type {*[]}
     */
    this.myArray = []
    for (let chair = 1; chair <= 18; chair += 1) {
      this.myArray.push({
        name: `Chair ${chair}`,
        id: chair - 1,
        text: '',
      })
    }
  },
  data() {
    return {
      drag: false,
      myArray: [],
      notValidated: true,
    }
  },
}
</script>

<style scoped>
#vc-chair-form {
  background-color: white;
  padding-top: 55px;
  margin: auto;
}

#vc-chair-form > div {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
</style>
