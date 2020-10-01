<template>
  <survey-box>
    <template v-slot:back-button>
      <router-link to="/survey3" class="">
        <back-icon />
        <span class="is-size-4">
          Back
        </span>
      </router-link>
    </template>
    <template v-slot:survey-content>
      <ol start="4">
        <li class="px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ?
          <form class="px-4 py-4">
            <div class="control">
              <label class="radio my-2">
                <input type="radio"  name="fourth" value="true">
                True
              </label>
              <br>
              <label class="radio my-2">
                <input type="radio" name="fourth" value="false">
                False
              </label>
            </div>
          </form>
        </li>
      </ol>
    </template>
    <template v-slot:next-button>
      <router-link to="/complete" class="button px-6 next-b">
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