<template>
  <div>
    <div class="grid grid-cols-3 gap-2">
      <div  class="grid place-content-evenly">
        <img :src="logoWpc" />
      </div>
      <div  class="grid place-content-evenly">
        <img :src="marca" />
      </div>
      <div  class="grid place-content-evenly">
        <img :src="iturcemi" class="" />
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Inicializa la variable rutaImagen con la ruta de la imagen
      logoWpc: "src/assets/5.png",
      iturcemi: "src/assets/R.png",
      marca: "src/assets/pavel.png",

    };
  },
};
</script>

<style></style>
