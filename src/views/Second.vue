<template>
  <survey-box>
    <template v-slot:back-button>
      <router-link to="/survey1" class="">
        <back-icon />
        <span class="is-size-4">
          Back
        </span>
      </router-link>
    </template>
    <template v-slot:survey-content>
      <ol start="2">
        <li class="px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ?
          <form class="px-4 py-4">
            <label class="checkbox my-2">
              <input type="checkbox" id="optiona" name="second1" value="optiona" class="mr-3">
              A multitasker
            </label>
            <br>
            <label class="checkbox my-2">
              <input type="checkbox" id="optionb" name="second2" value="optionb" class="mr-3">
              Collaborates with team mates
            </label>
            <br>
            <label class="checkbox my-2">
              <input type="checkbox" id="optionc" name="second3" value="optionc" class="mr-3">
              Excellect customer relationship
            </label>
          </form>
        </li>
      </ol>
    </template>
    <template v-slot:next-button>
      <router-link to="/survey3" class="button px-6 next-b">
        Next
      </router-link>
    </template>
  </survey-box>
</template>

<script>
// @ is an alias to /src
import SurveyBox from '@/components/SurveyBox.vue'
import BackIcon from 'vue-material-design-icons/KeyboardBackspace.vue';

export default {
  components: {
    SurveyBox,
    BackIcon
  }
}
</script>

<style lang="scss" scoped>
.next-b {
  background: #4512D2;
  color: #ffffff;
}
.button {
  border-radius: 0;
}
</style>