<template>
    <div class="grid content-center">
  <h1><banner-top/></h1>
  </div>
  <div class="flex justify-center p-6">
    <h2 class="text text-white text-8xl">Elija tipo de partido</h2>
  </div>
  <div>
    <boton-especial/>
  </div>
</template>

<script>
import BannerTop from './BannerTop.vue';
import BotonEspecial from './BotonEspecial.vue';
export default {
  components: { BannerTop, BotonEspecial },};
</script>

<style></style>
