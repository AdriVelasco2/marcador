<template>
  <div
  class="grid grid-cols-3 grid-rows-3"
  v-if="juegos1 === 6 && juegos2 === 6"
>
  <h1 class="grid col-start-2 content-center text text-center text-6xl text-white">
    Tie Break
  </h1>

  <!-- Jugadores equipo 1 -->
  <div class="grid col-start-1 content-center text-white">
    <div class="grid grid-cols-1 col-span-1 gap-2">
      <h2 class="text text-6xl text-center">{{ jugador11 }}</h2>
      <h2 class="text text-6xl text-center">{{ jugador12 }}</h2>
    </div>
  </div>

  <!-- Puntuación del equipo 1 -->
  <div
    class="grid col-start-2 row-start-2 content-center text-center text-white relative"
  >
    <p class="text text-9xl truncate text-center relative z-10">{{ tie1 }}</p>
    <div class="absolute inset-0 flex flex-col">
      <!-- Botón sumar -->
      <div
        class="flex-1 bg-green-500 hover:bg-green-600 cursor-pointer"
        @click="sumarTieBreak1"
        title="Sumar puntos"
      ></div>
      <!-- Botón restar -->
      <div
        class="flex-1 bg-red-500 hover:bg-red-600 cursor-pointer"
        @click="restarTieBreak1"
        title="Restar puntos"
      ></div>
    </div>
  </div>

  <!-- Jugadores equipo 2 -->
  <div class="grid grid-cols-1 row-start-3 content-center text-white">
    <div class="grid grid-cols-1 col-span-2 gap-3">
      <h2 class="text text-6xl text-center">{{ jugador21 }}</h2>
      <h2 class="text text-6xl text-center">{{ jugador22 }}</h2>
    </div>
  </div>

  <!-- Puntuación del equipo 2 -->
  <div
    class="grid col-start-2 row-start-3 content-center text-center text-white relative"
  >
    <p class="text text-9xl truncate relative z-10">{{ tie2 }}</p>
    <div class="absolute inset-0 flex flex-col">
      <!-- Botón sumar -->
      <div
        class="flex-1 bg-green-500 hover:bg-green-600 cursor-pointer"
        @click="sumarTieBreak2"
        title="Sumar puntos"
      ></div>
      <!-- Botón restar -->
      <div
        class="flex-1 bg-red-500 hover:bg-red-600 cursor-pointer"
        @click="restarTieBreak2"
        title="Restar puntos"
      ></div>
    </div>
  </div>
</div>

</template>

<script>
export default {
data(){
  methods: {
    sumarTieBreak1() {
      this.tie1++;
      if (this.tie1 === 6 && this.tie2 <= 5) {
        this.sets1 = (this.sets1 + 1) % this.sets.length;
        this.juegos1 = 0;
        this.juegos2 = 0;
        this.tie1 = 0;
        this.tie2 = 0;
      } else if (
        this.tie1 >= 6 &&
        this.tie2 >= 6 &&
        this.tie1 - this.tie2 === 2
      ) {
        this.sets1 = (this.sets1 + 1) % this.sets.length;
        this.juegos1 = 0;
        this.juegos2 = 0;
        this.tie1 = 0;
        this.tie2 = 0;
      }
    },
    sumarTieBreak2() {
      this.tie2++;
      if (this.tie2 === 6 && this.tie1 <= 5) {
        this.sets2 = (this.sets2 + 1) % this.sets.length;
        this.juegos1 = 0;
        this.juegos2 = 0;
        this.tie1 = 0;
        this.tie2 = 0;
      } else if (
        this.tie2 >= 6 &&
        this.tie1 >= 6 &&
        this.tie2 - this.tie1 === 2
      ) {
        this.sets2 = (this.sets2 + 1) % this.sets.length;
        this.juegos1 = 0;
        this.juegos2 = 0;
        this.tie1 = 0;
        this.tie2 = 0;
      }
    }
}
}
}
</script>

<style>

</style>