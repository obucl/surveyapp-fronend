<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <active-tiles />
      </div>
      <div class="tile is-parent">
        <active-tiles />
      </div>
      <div class="tile is-parent">
        <active-tiles />
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <active-tiles />
      </div>
      <div class="tile is-parent">
        <active-tiles />
      </div>
      <div class="tile is-parent">
        <active-tiles />
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <active-tiles />
      </div>
      <div class="tile is-parent">
        <active-tiles />
      </div>
      <div class="tile is-parent">
        <active-tiles />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import ActiveTiles from './ActiveTiles'

export default defineComponent({
  components: {
    ActiveTiles
  },
})
</script>

<style lang="scss" scoped>
.is-ancestor {
  flex-wrap: wrap !important;
}
</style>