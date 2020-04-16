<template>
  <div id="app" class="col-md-10 col-xl-8 m-auto">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    'app-header': Header
  }
}
</script>

<style>
</style>
