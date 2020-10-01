<template>
  <div>
    <header class="columns mx-0 my-5">
      <div class="column"></div>
      <div class="column is-8 has-background-white">
        <div class="level columns">
          <div class="column level-item" @click="toActive" :class="{current: active.value}">
            <h5 class="has-text-weight-bold">Active Surveys</h5>
          </div>
          <div class="column level-item" @click="toClosed" :class="{current: closed.value}">
            <h5 class="has-text-weight-bold">Closed Surveys</h5>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </header>
    <div class="main-set">
      <active-surveys
        v-if="active.value"
      >
      </active-surveys>
      <closed-surveys
        v-if="closed.value"
      >
      </closed-surveys>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from '@vue/composition-api'
import ActiveSurveys from './ActiveSurveys'
import ClosedSurveys from './ClosedSurveys'

export default defineComponent({
  name: 'AccountSet',
  components: {
    ActiveSurveys,
    ClosedSurveys
  },
  setup () {
    const { active, closed, toActive, toClosed } = all()

    function all () {
      const active = reactive({
        value: true
      })
      const closed = reactive({
        value: false
      })
      const toActive = () => {
        if (active.value === false) {
          active.value = true
          closed.value = false
        }
      }
      const toClosed = () => {
        if (closed.value === false) {
          active.value = false
          closed.value = true
        }
      }
      return { active, closed, toActive, toClosed }
    }
    return {
      active,
      closed,
      all,
      toActive,
      toClosed
    }
  }
})
</script>

<style scoped>
/* .level {
  margin-bottom: 0px !important;
  justify-content: flex-start;
} */
.level-left {
  margin-left: 24px;
  padding-bottom: 20px;
  cursor: pointer;
}
.level-item h5 {
  text-align: center;
}
.current {
  color: #4612D1;
  border-bottom: 10px solid #4612D1;
}
.main-set {
  padding: 24px;
  border: 1px solid #E4E2E2;
  border-radius: 6px;
  height: inherit;
}
input {
  width: 45%;
  border-radius: 15px;
  font-style: italic;
}
</style>
