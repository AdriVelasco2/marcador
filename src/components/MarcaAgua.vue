<template>
  <div>
    <div>
        <!-- Contenido principal -->
       <img :src="marca" class="" style="opacity: 0.8;">
      </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      // Inicializa la variable rutaImagen con la ruta de la imagen
      marca: "src/assets/pavel.png",
      iturcemi: "src/assets/R.png",
    };
  },
}
</script>

<style>

</style>