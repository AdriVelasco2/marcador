<template>
    <div
    class="grid grid-cols-3 grid-rows-3"
    v-if="juegos1 === 6 && juegos2 === 6"
  >
    <h1 class="grid col-start-2 content-center text text-center text-6xl text-white">
      Tie Break
    </h1>
    <div class="grid col-start-1 content-center text-white">
      <div class="grid grid-cols-1 col-span-1 gap-2">
        <h2 class="text text-6xl text-center">{{ jugador11 }}</h2>
        <h2 class="text text-6xl text-center">{{ jugador12 }}</h2>
      </div>
    </div>
    <div
      class="grid col-start-2 row-start-2 content-center text-center text-white"
    >
      <p class="text text-9xl truncate text-center">{{ tie1 }}</p>
    </div>
    <div class="grid col-start-3 gap-2 row-start-2 content-start p-2 text-white">
      <button class="text text-9xl text-center" @click="sumarTieBreak1">
        🔼
      </button>
      <button class="text text-9xl text-center" @click="restarTieBreak1">
        🔽
      </button>
    </div>
    <div class="grid grid-cols-1 row-start-3 content-center text-white">
      <div class="grid grid-cols-1 col-span-2 gap-3">
        <h2 class="text text-6xl text-center">{{ jugador21 }}</h2>
        <h2 class="text text-6xl text-center">{{ jugador22 }}</h2>
      </div>
    </div>
    <div
      class="grid col-start-2 row-start-3 content-center text-center text-white"
    >
      <p class="text text-9xl truncate">{{ tie2 }}</p>
    </div>
    <div class="grid col-start-3 gap-2 row-start-3 content-start text-white">
      <button class="text text-9xl" @click="sumarTieBreak2">🔼</button>
      <button class="text text-9xl" @click="sumarTieBreak2">🔽</button>
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