<template>
  <div class="bg">
    <nav-bar />
    <div class="tile is-parent">
      <article class="tile is-child notification">
        <p class="title mt-4">
          Survey Completed
        </p>
        <img class="my-5" src="../assets/completed.png" width="300px">
        <nav class="level">
          <div class="level-right">
            <router-link to="/survey1" class="button px-6 mr-2 cancel-b">
              Cancel
            </router-link>
            <router-link to="/survey1" class="button px-6 next-b">
              Submit
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
.cancel-b {
  background: #E3E3E3;
  color: #474747;
}
.level {
  margin-top: 4rem
}
</style>