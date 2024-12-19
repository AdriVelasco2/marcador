<template>
  <div>
    <div class="grid grid-cols-10 gap-2 bg-white border-b-4 border-pink-600">
      <div  class="grid place-content-evenly">
        <img :src="logo1" />
      </div>
      <div  class="grid place-content-evenly">
        <img :src="logo2" />
      </div>
      <div  class="grid place-content-evenly">
        <img :src="logo3" class="" />
      </div>
      <div  class="grid place-content-evenly">
        <img :src="logo4" class="" />
      </div>
      <div  class="grid place-content-evenly">
        <img :src="logo5" class="" />
      </div>
      <div  class="grid place-content-evenly">
        <img :src="logo8" class="" />
      </div>
      <div  class="grid place-content-evenly">
        <img :src="logo9" class="" />
      </div>
      <div  class="grid place-content-evenly">
        <img :src="logo10" class="" />
      </div>
      <div  class="grid place-content-evenly">
        <img :src="logo13" class="" />
      </div>
      <div  class="grid place-content-evenly">
        <img :src="logo14" class="" />
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Inicializa la variable rutaImagen con la ruta de la imagen
      logo1: "/1.png",
      logo2: "/2.png",
      logo3: "/3.png",
      logo4: "/4.png",
      logo5: "/5.png",
      logo8: "/8.png",
      logo9: "/9.png",
      logo10: "/10.png",
      logo11: "/11.png",
      logo12: "/12.png",
      logo13: "/13.png",
      logo14: "/14.png",
      

    };
  },
};
</script>

<style></style>
