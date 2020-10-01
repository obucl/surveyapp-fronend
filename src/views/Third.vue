<template>
  <survey-box>
    <template v-slot:back-button>
      <router-link to="/survey2" class="">
        <back-icon />
        <span class="is-size-4">
          Back
        </span>
      </router-link>
    </template>
    <template v-slot:survey-content>
      <ol start="3">
        <li class="px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ?
          <form class="py-4">
            <input class="input" type="text" placeholder="Type your answer">
          </form>
        </li>
      </ol>
    </template>
    <template v-slot:next-button>
      <router-link to="/survey4" class="button px-6 next-b">
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
.input, .textarea {
  border: 0;
  box-shadow: inset 0 0 0 #0a0a0a00;
  border-bottom: 1px solid #868686;
}
.input:focus, .textarea:focus, .select select:focus, .is-focused.input, .is-focused.textarea, .select select.is-focused, .input:active, .textarea:active, .select select:active, .is-active.input, .is-active.textarea, .select select.is-active {
  box-shadow: 0;
}
.next-b {
  background: #4512D2;
  color: #ffffff;
}
.button {
  border-radius: 0;
}
</style>