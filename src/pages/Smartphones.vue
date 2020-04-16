<template>
  <div>
    <div class="mb-3">
      <h1>Smartphones</h1>
    </div>
    <div class="row">
      <div v-if="isSmartphonesEmpty" class="mx-auto">
        <h3 class="text-muted">Não tem nada aqui :(</h3>
      </div>
      <app-smartphone
        v-else
        class="col"
        v-for="(smartphone, index) in smartphones"
        :key="index"
        :smartphone="smartphone"
      ></app-smartphone>
    </div>
  </div>
</template>
<script>
import Smartphone from "../components/smartphone/Smartphone.vue";

export default {
  components: {
    "app-smartphone": Smartphone
  },
  data() {
    return {
      smartphones: []
    };
  },
  computed: {
    isSmartphonesEmpty() {
      return !this.smartphones || this.smartphones.length < 1;
    }
  }
};
</script>