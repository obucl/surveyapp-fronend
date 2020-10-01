<template>
  <nav class="navbar py-3 px-6" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="">
        <logo />
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <router-link to="/login">
            Login
          </router-link>
          /
          <router-link to="/signup">
            Signup
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from './Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  font-family: 'Amiko', sans-serif;
  font-weight: bold;
  font-size: 22px;
  color: #535353;
}
a {
  color: #535353;
}
</style>