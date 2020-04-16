<template>
  <div class="col-sm-6 col-md-4">
    <router-link tag="div" to="/smartphone" class="card p-2">
      <img :src="smartphone.photo" class="card-img-top img-fluid" :alt="smartphone.model" />
      <div class="card-body">
        <h5 class="card-title">
          {{ smartphone.model }}
          <small class="text-muted">{{ smartphone.brand }}</small>
        </h5>
        <h6 class="card-subtitle">{{ smartphone.price | currency }}</h6>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    smartphone: {
      type: Object,
      default: () => {
        return {
          model: "",
          photo: "",
          brand: "",
          price: 0
        };
      }
    }
  }
};
</script>