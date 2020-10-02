<template>
  <div class="columns m-0">
    <div class="column is-half first m-0 pt-6">
      <p class="title head">
        <slot name="head-text"></slot>
      </p>
      <img src="../assets/login.png" width="500px">
    </div>
    <div class="column is-half"></div>
    <div class="column second">
      <logo class="mx-auto pt-2 pb-6"></logo>
      <slot name="form-body"></slot>
    </div>
  </div>
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
.first {
  left: 0px;
  text-align: center;
  height: 100vh;
  position: fixed;
  background: linear-gradient(180deg, #4612D1 36.04%, #12D18C 121.28%);
}
.head {
  color: #ffffff;
  margin: 6rem auto 3rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
  width: 16.5%;
}
.second {
  right: 0px;
  height: 100vh;
  padding: 4rem 8rem;
  background: #ffffff;
}
</style>
