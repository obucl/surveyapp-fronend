<template>
  <div class="bg">
    <nav-bar />
    <div class="tile is-parent">
      <article class="tile is-child">
        <div class="notification head mb-1">
          Effect of Labor
        </div>
        <div class="notification mt-1">
          <slot name="back-button"></slot>
          <div class="content px-6">
            <slot name="survey-content"></slot>
          </div>
          <nav class="level">
            <div class="level-right">
              <slot name="next-button"></slot>
            </div>
          </nav>
        </div>
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
  margin: 2rem 10rem 2rem;
}
.head {
  font-weight: bold;
  font-size: 1.8rem;
  color: #585757;
}
.notification, .notification a:not(.button):not(.dropdown-item) {
  background: #ffffff;
  text-decoration: none;
}
.level-right {
  margin-left: auto;
}
</style>