<template>
  <div class="bg">
    <nav-bar />
    <div class="tile is-parent">
      <article class="tile is-child notification">
        <p class="title mt-4 is-size-3">
          Take a Quick Survey
        </p>
        <img class="my-5" src="../assets/start.png" width="300px">
        <p class="subtitle is-size-4">
          Effect of Labor
        </p>
        <nav class="level">
          <div class="level-right">
            <router-link to="/survey1" class="button px-5 next-b">
              Take Survey
              <img src="../assets/forward.svg" class="ml-3">
            </router-link>
          </div>
        </nav>
      </article>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.bg {
  background: #4612D1;
  width: 100%;
  height: 100vh;
  font-family: 'Open Sans', sans-serif !important;
}
.is-parent {
  margin: 3rem 10rem 2rem;
}
.notification {
  text-align: center;
  background: #ffffff;
}
.title {
  color: #4512D2 !important;
}
.next-b {
  background: #4512D2;
  color: #ffffff;
}
.level-right {
  margin-left: auto;
}
.button {
  border-radius: 0;
}
.level {
  margin-top: 4rem
}
</style>