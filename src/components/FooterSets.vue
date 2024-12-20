<template>
  <div>
    <div class="grid grid-cols-2 gap-2">
      <div class="grid place-content-evenly">
        <img :src="logo11" class="h-64 w-64" />
      </div>
      <div class="grid place-content-evenly">
        <img :src="logo12" class="h-64 w-64" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Inicializa la variable rutaImagen con la ruta de la imagen
      logo11: "/11.png",
      logo12: "/12.png",
    };
  },
};
</script>

<style></style>
