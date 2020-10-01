<template>
  <div class="home">
    <nav-bar />
    <div class="splash">
      <span>
        WELCOME
      </span>
    </div>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <surveys />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Surveys from '@/components/Surveys.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Surveys
  }
}
</script>

<style lang="scss" scoped>
.splash {
  width: 100%;
  height: 444px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #4612D1 36.04%, #12D18C 121.28%);
}
.splash span {
  margin: auto;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 45px;
  color: #FFFFFF;
}
</style>
