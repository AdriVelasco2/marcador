<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <div v-if="sets1 <2 && sets2<2">
    <banner-top />
  </div>
      <!-- TIE BREAK SET 2-->
      <div
    class="grid grid-cols-3 gap-4 grid-rows-3"
    v-if="verTie2 === true && juegos3 === 6 && juegos4 === 6"
  >
  <div class="grid col-start-2 row-start-1">
      <h1
        class="grid col-start-2 row-start-1  text text-center text-6xl text-white"
      >
        Tie Break set 2
      </h1>
    </div>
    <div class="grid col-start-1 row-start-2 content-end text-white">
      <div class="grid grid-cols-1 col-span-1 gap-2">
        <h2
          class="bg-black text-white justify-center rounded-md resize-none truncate text text-5xl text-center leading-normal h-20"
        >
          {{ jugador11 }}
        </h2>
        <h2
          class="bg-black text-white justify-center rounded-md resize-none truncate text text-5xl text-center leading-normal h-20"
        >
          {{ jugador12 }}
        </h2>
      </div>
    </div>
    <div class="grid col-start-2 row-start-2 text-center text-white">
      <h2 class="text text-9xl truncate text-center relative">
        <!-- Número visible -->
        <span class="relative z-10 text-white">
          {{ tie3 }}
        </span>

        <!-- Fondos superpuestos para sumar y restar -->
        <div class="absolute inset-0 flex flex-col">
          <!-- Fondo verde para sumar -->
          <div
            class="flex-1 bg-rose-900"
            @click="sumarTieBreak3"
            title="Sumar puntos"
          ></div>

          <!-- Fondo rojo para restar -->
          <div
            class="flex-1 bg-rose-800"
            @click="restarTieBreak3"
            title="Restar puntos"
          ></div>
        </div>
      </h2>
    </div>

    <div class="grid grid-cols-1 row-start-3 content-center text-white">
      <div class="grid grid-cols-1 col-span-2 gap-3">
        <h2
          class="bg-black text-white justify-center rounded-md resize-none truncate text text-5xl text-center leading-normal h-20"
        >
          {{ jugador21 }}
        </h2>
        <h2
          class="bg-black text-white justify-center rounded-md resize-none truncate text text-5xl text-center leading-normal h-20"
        >
          {{ jugador22 }}
        </h2>
      </div>
    </div>
    <div class="grid col-start-2 row-start-3 text-center text-white">
      <h2 class="text text-9xl truncate relative">
        <!-- Número visible -->
        <span class="relative z-10 text-white">
          {{ tie4 }}
        </span>

        <!-- Fondos superpuestos para sumar y restar -->
        <div class="absolute inset-0 flex flex-col">
          <!-- Fondo verde para sumar -->
          <div
            class="flex-1 bg-rose-900"
            @click="sumarTieBreak4"
            title="Sumar puntos"
          ></div>

          <!-- Fondo rojo para restar -->
          <div
            class="flex-1 bg-rose-800"
            @click="restarTieBreak4"
            title="Restar puntos"
          ></div>
        </div>
      </h2>
    </div>
  </div>
    <!-- FIN TIE BREAK SET 2-->
  
      <!-- SÚPER TIE-->
      <div
      class="grid grid-cols-3 gap-4 grid-rows-3"
      v-if="sets1=== 1 && sets2 === 1"
    >
      
    <div class="grid col-start-2 gap-4 row-start-1">
      <h1
        class="grid col-start-2 row-start-1 content-start text text-start text-6xl text-white"
      >
        Súper Tie
      </h1>
    </div>
    <div class="grid col-start-1 row-start-2 content-end text-white">
      <div class="grid grid-cols-1 col-span-1 gap-2">
        <h2
          class="bg-black text-white justify-center rounded-md resize-none truncate text text-5xl text-center leading-normal h-20"
        >
          {{ jugador11 }}
        </h2>
        <h2
          class="bg-black text-white justify-center rounded-md resize-none truncate text text-5xl text-center leading-normal h-20"
        >
          {{ jugador12 }}
        </h2>
      </div>
    </div>
    <div class="grid col-start-2 row-start-2 text-center text-white">
      <h2 class="text text-9xl truncate text-center relative">
        <!-- Número visible -->
        <span class="relative z-10 text-white">
          {{ tie5 }}
        </span>

        <!-- Fondos superpuestos para sumar y restar -->
        <div class="absolute inset-0 flex flex-col">
          <!-- Fondo verde para sumar -->
          <div
            class="flex-1 bg-rose-900"
            @click="sumarTieBreak5"
            title="Sumar puntos"
          ></div>

          <!-- Fondo rojo para restar -->
          <div
            class="flex-1 bg-rose-800"
            @click="restarTieBreak5"
            title="Restar puntos"
          ></div>
        </div>
      </h2>
    </div>

    <div class="grid grid-cols-1 row-start-3 content-center text-white">
      <div class="grid grid-cols-1 col-span-2 gap-3">
        <h2
          class="bg-black text-white justify-center rounded-md resize-none truncate text text-5xl text-center leading-normal h-20"
        >
          {{ jugador21 }}
        </h2>
        <h2
          class="bg-black text-white justify-center rounded-md resize-none truncate text text-5xl text-center leading-normal h-20"
        >
          {{ jugador22 }}
        </h2>
      </div>
    </div>
    <div class="grid col-start-2 row-start-3 text-center text-white">
      <h2 class="text text-9xl truncate relative">
        <!-- Número visible -->
        <span class="relative z-10 text-white">
          {{ tie6 }}
        </span>

        <!-- Fondos superpuestos para sumar y restar -->
        <div class="absolute inset-0 flex flex-col">
          <!-- Fondo verde para sumar -->
          <div
            class="flex-1 bg-rose-900"
            @click="sumarTieBreak6"
            title="Sumar puntos"
          ></div>

          <!-- Fondo rojo para restar -->
          <div
            class="flex-1 bg-rose-800"
            @click="restarTieBreak2"
            title="Restar puntos"
          ></div>
        </div>
      </h2>
    </div>
    </div>
    <!-- FIN TIE BREAK 3-->
  
  
    <!-- SET 1 -->
     <!-- TIE BREAK SET 1-->
    <div
    class="grid grid-cols-3 gap-4 grid-rows-3"
    v-if="juegos1 === 6 && juegos2 === 6"
  >
    <div class="grid col-start-2 row-start-1">
      <h1
        class="grid col-start-2 row-start-1 content-start text text-center text-6xl text-white"
      >
        Tie Break set 1
      </h1>
    </div>
    <div class="grid col-start-1 row-start-2 content-end text-white">
      <div class="grid grid-cols-1 col-span-1 gap-2">
        <h2
          class="bg-black text-white justify-center rounded-md resize-none truncate text text-5xl text-center leading-normal h-20"
        >
          {{ jugador11 }}
        </h2>
        <h2
          class="bg-black text-white justify-center rounded-md resize-none truncate text text-5xl text-center leading-normal h-20"
        >
          {{ jugador12 }}
        </h2>
      </div>
    </div>
    <div class="grid col-start-2 row-start-2 text-center text-white">
      <h2 class="text text-9xl truncate text-center relative">
        <!-- Número visible -->
        <span class="relative z-10 text-white">
          {{ tie1 }}
        </span>

        <!-- Fondos superpuestos para sumar y restar -->
        <div class="absolute inset-0 flex flex-col">
          <!-- Fondo verde para sumar -->
          <div
            class="flex-1 bg-rose-900"
            @click="sumarTieBreak1"
            title="Sumar puntos"
          ></div>

          <!-- Fondo rojo para restar -->
          <div
            class="flex-1 bg-rose-800"
            @click="restarTieBreak1"
            title="Restar puntos"
          ></div>
        </div>
      </h2>
    </div>

    <div class="grid grid-cols-1 row-start-3 content-center text-white">
      <div class="grid grid-cols-1 col-span-2 gap-3">
        <h2
          class="bg-black text-white justify-center rounded-md resize-none truncate text text-5xl text-center leading-normal h-20"
        >
          {{ jugador21 }}
        </h2>
        <h2
          class="bg-black text-white justify-center rounded-md resize-none truncate text text-5xl text-center leading-normal h-20"
        >
          {{ jugador22 }}
        </h2>
      </div>
    </div>
    <div class="grid col-start-2 row-start-3 text-center text-white">
      <h2 class="text text-9xl truncate relative">
        <!-- Número visible -->
        <span class="relative z-10 text-white">
          {{ tie2 }}
        </span>

        <!-- Fondos superpuestos para sumar y restar -->
        <div class="absolute inset-0 flex flex-col">
          <!-- Fondo verde para sumar -->
          <div
            class="flex-1 bg-rose-900"
            @click="sumarTieBreak2"
            title="Sumar puntos"
          ></div>

          <!-- Fondo rojo para restar -->
          <div
            class="flex-1 bg-rose-800"
            @click="restarTieBreak2"
            title="Restar puntos"
          ></div>
        </div>
      </h2>
    </div>
  </div>
   <!-- FIN TIE BREAK SET 1-->
    <div v-else-if="tercero===false && verTie2===false " >
      <div 
      v-if="sets1!=2 && sets2!=2"
        class="grid grid-cols-4  mb-4 text-white"
      >
        <div class="grid content-end gap-1">
          <textarea
          v-model="jugador11"
          class="bg-black text-white justify-center rounded-md resize-none truncate text text-5xl text-center leading-normal h-20"
          spellcheck="false"
        ></textarea>
        <textarea
          v-model="jugador12"
          class="bg-black text-white rounded-md resize-none truncate text text-5xl text-center leading-normal align-baseline h-20"
          spellcheck="false"
        ></textarea>
        </div>
        <div class="grid">
        <h1
          class="text text-4xl p-2 col-span-2 grid content-center justify-center"
        >
          SET 1
        </h1>
        <h2
          class="text text-9xl p-2 col-span-2 grid content-center justify-center relative"
        >
          <!-- Número visible -->
          <span class="relative z-10 text-white">
            {{ juegos[juegos1] }}
          </span>
          <!-- Botones superpuestos -->
          <div class="absolute inset-0 flex flex-col">
            <!-- Botón para sumar -->
            <div
              class="flex-1 bg-rose-900"
              @click="sumarJuegos1"
              title="Sumar puntos"
            ></div>
            <!-- Botón para restar -->
            <div
              class="flex-1 bg-rose-800"
              @click="restarJuegos1"
              title="Restar puntos"
            ></div>
          </div>
        </h2>
      </div>
  
        <!-- SET 2 APARECE -->
        <div v-if="sets1 === 1 || sets2 === 1" class="grid ">
          <h1 class="text text-4xl p-2 col-span-2 grid content-center">SET 2</h1>
            <h2
          class="text text-9xl p-2 border-l-4 col-span-2 grid content-center justify-center relative"
        >
          <!-- Número visible -->
          <span class="relative z-10 text-white">
            {{ juegos[juegos3] }}
          </span>
          <!-- Botones superpuestos -->
          <div class="absolute inset-0 flex flex-col">
            <!-- Botón para sumar -->
            <div
              class="flex-1 bg-rose-900"
              @click="sumarJuegos3(); mostrarSet3(); mostrarTie2();"
              title="Sumar puntos"
            ></div>
            <!-- Botón para restar -->
            <div
              class="flex-1 bg-rose-800"
             @click="restarJuegos3(); mostrarTie2();"
              title="Restar puntos"
            ></div>
          </div>
        </h2>
        </div>
     
        <div v-if="sets1 === 0 && sets2 === 0" class="grid">
  <!-- Encabezado -->
  <h1 class="text text-4xl  grid content-center">PUNTOS</h1>

  <!-- Marcador de puntos -->
  <h2
    class="text text-9xl col-span-1 border-l-4 grid content-center justify-center relative"
    :class="{ 'oro': puntos[puntos1] === 40 && puntos[puntos2] === 40 }"
  >
    <!-- Número visible -->
    <span class="relative z-10 text-white">
      {{ puntos[puntos1] }}
    </span>

    <!-- Fondos superpuestos para sumar y restar -->
    <div class="absolute inset-0 flex flex-col">
      <!-- Fondo verde para sumar -->
      <div
      class="flex-1 bg-rose-900"
      @click="sumarPuntos1"
        title="Sumar puntos"
      ></div>

      <!-- Fondo rojo para restar -->
      <div
      class="flex-1 bg-rose-800"
      @click="restarPuntos1"
        title="Restar puntos"
      ></div>
    </div>
  </h2>
</div>

<div v-else-if="sets1 === 1 || sets2 === 1" class="grid">
  <!-- Encabezado -->
  <h1 class="text text-4xl  grid content-center">PUNTOS</h1>

  <!-- Marcador de puntos -->
  <h2
    class="text text-9xl col-span-1 border-l-4 grid content-center justify-center relative"
    :class="{ 'oro': puntos[puntos3] === 40 && puntos[puntos4] === 40 }"
  >
    <!-- Número visible -->
    <span class="relative z-10 text-white">
      {{ puntos[puntos3] }}
    </span>

    <!-- Fondos superpuestos para sumar y restar -->
    <div class="absolute inset-0 flex flex-col">
      <!-- Fondo verde para sumar -->
      <div
      class="flex-1 bg-rose-900"
      @click="sumarPuntos3(); mostrarSet3(); mostrarTie2();"
        title="Sumar puntos"
      ></div>

      <!-- Fondo rojo para restar -->
      <div
      class="flex-1 bg-rose-800"
      @click="restarPuntos3(); mostrarTie2();"
        title="Restar puntos"
      ></div>
    </div>
  </h2>
</div>

      </div>
    
      <!-- COLUMNA DE ABAJO -->
  
      <div
      v-if="sets1!=2 && sets2!=2 && verTie2===false"
      class="grid grid-cols-4 border-t-2 text-white justify-evenly"
      >
        <div  class="grid content-end gap-1">
          <textarea
          v-model="jugador11"
          class="bg-black text-white justify-center rounded-md resize-none truncate text text-5xl text-center leading-normal h-20"
          spellcheck="false"
        ></textarea>
        <textarea
          v-model="jugador12"
          class="bg-black text-white rounded-md resize-none truncate text text-5xl text-center leading-normal align-baseline h-20"
          spellcheck="false"
        ></textarea>
        </div>
        <div class="grid">
  <!-- Título (vacío en este caso) -->
  <h1 class="text text-4xl grid content-center"></h1>

  <!-- Marcador de juegos -->
  <h2
    class="text text-9xl col-span-1 grid  content-center justify-center relative"
    :class="{ 'oro': puntos[puntos3] === 40 && puntos[puntos4] === 40 }"
  >
    <!-- Número visible -->
    <span class="relative z-10 text-white">
      {{ juegos[juegos2] }}
    </span>

    <!-- Fondos superpuestos para sumar y restar -->
    <div class="absolute inset-0 flex flex-col">
      <!-- Fondo verde para sumar -->
      <div
      class="flex-1 bg-rose-900"
        @click="sumarJuegos2()"
        title="Sumar juegos"
      ></div>

      <!-- Fondo rojo para restar -->
      <div
      class="flex-1 bg-rose-800"
        @click="restarJuegos2()"
        title="Restar juegos"
      ></div>
    </div>
  </h2>
</div>

<div v-if="sets2 >= 1 || sets1 >= 1" class="grid ">
  <!-- Título vacío -->
  <h1 class="text text-4xl  grid content-center"></h1>

  <!-- Marcador de juegos -->
  <h2 class="text text-9xl grid content-center justify-center relative border-l-4">
    <!-- Número visible -->
    <span class="relative z-10 text-white">
      {{ juegos[juegos4] }}
    </span>

    <!-- Fondos superpuestos para sumar y restar -->
    <div class="absolute inset-0 flex flex-col">
      <!-- Fondo verde para sumar -->
      <div
      class="flex-1 bg-rose-900"
        @click="sumarJuegos4(); mostrarSet3(); mostrarTie2();"
        title="Sumar juegos"
      ></div>

      <!-- Fondo rojo para restar -->
      <div
      class="flex-1 bg-rose-800"
        @click="restarJuegos4(); mostrarTie2();"
        title="Restar juegos"
      ></div>
    </div>
  </h2>
</div>

        <div v-if="sets1 === 0 && sets2 === 0" class="grid">
          <h1 class="text text-4xl  grid content-center"></h1>

<!-- Marcador de puntos -->
<h2
  class="text text-9xl col-span-1 grid content-center justify-center relative border-l-4"
  :class="{ 'oro': puntos[puntos1] === 40 && puntos[puntos2] === 40 }"
>
  <!-- Número visible -->
  <span class="relative z-10 text-white">
    {{ puntos[puntos2] }}
  </span>

  <!-- Fondos superpuestos para sumar y restar -->
  <div class="absolute inset-0 flex flex-col">
    <!-- Fondo verde para sumar -->
    <div
    class="flex-1 bg-rose-900"
    @click="sumarPuntos2"
      title="Sumar puntos"
    ></div>

    <!-- Fondo rojo para restar -->
    <div
    class="flex-1 bg-rose-800"
    @click="restarPuntos2"
      title="Restar puntos"
    ></div>
  </div>
</h2>
        </div>
        <div v-if="sets1 === 1 || sets2 === 1" class="grid ">
            <h1 class="text text-4xl  grid content-center"></h1>

  <!-- Marcador de puntos -->
  <h2
    class="text text-9xl  grid content-center justify-center relative border-l-4"
    :class="{ 'oro': puntos[puntos1] === 40 && puntos[puntos2] === 40 }"
  >
    <!-- Número visible -->
    <span class="relative z-10 text-white">
      {{ puntos[puntos4] }}
    </span>

    <!-- Fondos superpuestos para sumar y restar -->
    <div class="absolute inset-0 flex flex-col">
      <!-- Fondo verde para sumar -->
      <div
      class="flex-1 bg-rose-900"
      @click="sumarPuntos4(); mostrarSet3(); mostrarTie2();"
        title="Sumar puntos"
      ></div>

      <!-- Fondo rojo para restar -->
      <div
      class="flex-1 bg-rose-800"
      @click="sumarPuntos4(); mostrarTie2();"
        title="Restar puntos"
      ></div>
    </div>
  </h2>
        </div>
      </div>
    </div>
  
   
  
  
    <!-- MOSTRAR RESULTADO -->
    <div v-if="sets1===2 || sets2===2">
      <div class="bg-rose-800">
      <div class="place-items-center bg-rose-800 text-center">
        <button
          class=" mt-4 text-white"
          @click="irAinicio"
        ><img :src="marca" class="h-32 w-48" /></button>
      </div>
      <div class="grid grid-cols-4 p-4 text-white">
        <div class="grid gap-1">
          <div
          class=" text-white self-end justify-center rounded-md resize-none truncate text text-5xl leading-normal h-20"
          >
            {{ jugador11 }}
          </div>
          <div
          class=" text-white justify-center rounded-md resize-none truncate text text-5xl leading-normal h-20"
          >
            {{ jugador12 }}
          </div>
        </div>
        <div class="grid grid-cols-1">
          <h1
            class="text text-4xl p-2 col-span-2 grid content-center justify-start"
          >
            SET 1
          </h1>
          <h2 class="num-resultado p-2 col-span-1 grid justify-start">
            {{ juegos[juegos1] }}
          </h2>
        </div>
        <div class="grid grid-cols-1">
          <h1 class="text text-4xl p-2 col-span-2 grid place-content-start">
            SET 2
          </h1>
          <h2 class="num-resultado p-2 col-span-1 grid place-content-start">
            {{ juegos[juegos3] }}
          </h2>
        </div>

        <div v-if="tercero === true" class="grid grid-cols-1">
          <h1 class="text text-4xl p-2 col-span-2 grid place-content-start">
            SúperTie
          </h1>
          <h2 class="num-resultado col-span-1 grid place-content-start">
            {{ tie5 }}
          </h2>
        </div>
        <div v-if="sets1 === 1 && sets2 === 1" class="grid grid-cols-2">
          <h1 class="text text-4xl p-2 col-span-2 grid content-center">
            PUNTOS
          </h1>
          <h2
            class="text text-9xl col-span-1 grid content-center justify-center"
          >
            {{ puntos[puntos5] }}
          </h2>
        </div>
      </div>

      <!-- COLUMNA ABAJO SET 3 -->
      <div class="grid grid-cols-4 p-4 border-t-2 text-white">
        <div class="grid gap-1">
          <div
            class=" text-white self-end justify-center rounded-md resize-none truncate text text-5xl leading-normal h-20"
            spellcheck="false"
          >
            {{ jugador21 }}
          </div>
          <div
            class=" text-white justify-center rounded-md resize-none truncate text text-5xl leading-normal h-20"
            spellcheck="false"
          >
            {{ jugador22 }}
          </div>
        </div>
        <div class="grid grid-cols-2">
          <h1 class="text text-4xl p-2 col-span-2 grid content-center"></h1>
          <h2 class="num-resultado p-2 col-span-1 grid place-content-start">
            {{ juegos[juegos2] }}
          </h2>
        </div>
        <div v-if="sets2 >= 1 || sets1 >= 1" class="grid grid-cols-2">
          <h1 class="text text-4xl p-2 col-span-2 grid content-center"></h1>
          <h2 class="num-resultado p-2 col-span-1 grid place-content-start">
            {{ juegos[juegos4] }}
          </h2>
        </div>
        <div v-if="tercero === true" class="grid grid-cols-2">
          <h1 class="text text-4xl p-2 col-span-2 grid content-center"></h1>
          <h2 class="num-resultado p-2 col-span-1 grid place-content-start">
            {{ tie6 }}
          </h2>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
import BannerTop from "./BannerTop.vue";

  export default {
  components: { BannerTop },
    
  
    data() {
      return {
      marca: "/pavel.png",
        jugador11: "Jugador 1",
        jugador12: "Jugador 2",
        jugador21: "Jugador 3",
        jugador22: "Jugador 4",
        puntos1: 0,
        puntos2: 0,
        puntos3: 0,
        puntos4: 0,
        puntos5: 0,
        puntos6: 0,
        juegos1: 0,
        juegos2: 0,
        juegos3: 0,
        juegos4: 0,
        juegos5: 0,
        juegos6: 0,
        sets1: 0,
        sets2: 0,
        sets3: 0,
        tie1: 0,
        tie2: 0,
        tie3: 0,
        tie4: 0,
        tie5: 0,
        tie6: 0,
        puntos: [0, 15, 30, 40],
        sets: [0, 1, 2, 3],
        juegos: [0, 1, 2, 3, 4, 5, 6, 7],
        mostrar: false,
        tercero: false,
        verTie2: false,
        verTie3: false,
      };
    },
    methods: {
      
      
      mostrarSet3(){
        if(this.sets1===1 && this.sets2 ===1){
          this.tercero = true;
        }
      },
      mostrarTie2(){
        if (this.juegos3 === 6 && this.juegos4===6) {
          this.verTie2=true;
      }else{
        this.verTie2=false;
      }
    },
    mostrarTie3(){
        if (this.juegos5 === 6 && this.juegos6===6) {
          this.verTie3=true;
      }else{
        this.verTie3=false;
      }
    },
      sumarPuntos1() {
        this.puntos1 = (this.puntos1 + 1) % this.puntos.length;
        if (this.puntos1 === 0) {
          this.juegos1 = (this.juegos1 + 1) % this.juegos.length;
          this.puntos2 = 0;
        }
  
        if (this.juegos1 >= 5 && this.juegos2 >= 5) {
          if (
            (this.juegos1 === 7 || this.juegos2 === 7) &&
            !(this.juegos1 === 6 && this.juegos2 === 6)
          ) {
            this.sets1 = (this.sets1 + 1) % this.sets.length;
          }
        } else if (this.juegos1 == 6) {
          if (this.juegos2 === 6) {
            this.tie1 = 0;
            this.tie2 = 0;
          } else {
            this.sets1 = (this.sets1 + 1) % this.sets.length;
          }
        }
      },
  
      sumarPuntos2() {
        this.puntos2 = (this.puntos2 + 1) % this.puntos.length;
        if (this.puntos2 === 0) {
          this.juegos2 = (this.juegos2 + 1) % this.juegos.length;
          this.puntos1 = 0;
        }
  
        if (this.juegos1 >= 5 && this.juegos2 >= 5) {
          if (
            (this.juegos1 === 7 || this.juegos2 === 7) &&
            !(this.juegos1 === 6 && this.juegos2 === 6)
          ) {
            this.sets2 = (this.sets2 + 1) % this.sets.length;
          }
        } else if (this.juegos2 === 6) {
          if (this.juegos1 === 6) {
            this.tie1 = 0;
            this.tie2 = 0;
          } else {
            this.sets2 = (this.sets2 + 1) % this.sets.length;
          }
        }
      },
      sumarPuntos3() {
        this.puntos3 = (this.puntos3 + 1) % this.puntos.length;
        if (this.puntos3 === 0) {
          this.juegos3 = (this.juegos3 + 1) % this.juegos.length;
          this.puntos4 = 0;
        }
  
        if (this.juegos3 >= 5 && this.juegos4>= 5) {
          if (
            (this.juegos3 === 7 || this.juegos4 === 7) &&
            !(this.juegos3 === 6 && this.juegos4=== 6)
          ) {
            this.sets1 = (this.sets1 + 1) % this.sets.length;
          }
        } else if (this.juegos3 == 6) {
          if (this.juegos4=== 6) {
            this.tie3 = 0;
            this.tie4 = 0;
          } else {
            this.sets1 = (this.sets1 + 1) % this.sets.length;
          }
        }
      },
      sumarPuntos4() {
        this.puntos4 = (this.puntos4 + 1) % this.puntos.length;
        if (this.puntos4=== 0) {
          this.juegos4= (this.juegos4 + 1) % this.juegos.length;
          this.puntos3 = 0;
        }
  
        if (this.juegos3 >= 5 && this.juegos4 >= 5) {
          if (
            (this.juegos3 === 7 || this.juegos4 === 7) &&
            !(this.juegos3 === 6 && this.juegos4 === 6)
          ) {
            this.sets2 = (this.sets2 + 1) % this.sets.length;
          }
        } else if (this.juegos4 === 6) {
          if (this.juegos3 === 6) {
            this.tie3 = 0;
            this.tie4 = 0;
          } else {
            this.sets2 = (this.sets2 + 1) % this.sets.length;
          }
        }
      },
      sumarPuntos5() {
        this.puntos5 = (this.puntos5 + 1) % this.puntos.length;
        if (this.puntos5 === 0) {
          this.juegos5 = (this.juegos5 + 1) % this.juegos.length;
          this.puntos6 = 0;
        }
  
        if (this.juegos5 >= 5 && this.juegos6 >= 5) {
          if (
            (this.juegos5 === 7 || this.juegos6 === 7) &&
            !(this.juegos5 === 6 && this.juegos6 === 6)
          ) {
            this.sets1 = (this.sets1 + 1) % this.sets.length;
          }
        } else if (this.juegos5 === 6) {
          if (this.juegos6 === 6) {
            this.tie1 = 0;
            this.tie2 = 0;
          } else {
            this.sets1 = (this.sets1 + 1) % this.sets.length;
          }
        }
      },
      sumarPuntos6() {
        this.puntos6 = (this.puntos6 + 1) % this.puntos.length;
        if (this.puntos6 === 0) {
          this.juegos6 = (this.juegos6 + 1) % this.juegos.length;
          this.puntos5 = 0;
        }
  
        if (this.juegos5 >= 5 && this.juegos6 >= 5) {
          if (
            (this.juegos5 === 7 || this.juegos6 === 7) &&
            !(this.juegos5 === 6 && this.juegos6 === 6)
          ) {
            this.sets2 = (this.sets2 + 1) % this.sets.length;
          }
        } else if (this.juegos6 === 6) {
          if (this.juegos5 === 6) {
            this.tie5 = 0;
            this.tie6= 0;
          } else {
            this.sets2 = (this.sets2 + 1) % this.sets.length;
          }
        }
      },
      sumarTieBreak1() {
        this.tie1++;
        if (this.tie1 >6 && this.tie2 <= 5) {
          this.sets1 = (this.sets1 + 1) % this.sets.length;
          this.juegos1 = (this.juegos1 + 1) % this.juegos.length;
          this.tie1 = 0;
          this.tie2 = 0;
        } else if (
          this.tie1 >= 6 &&
          this.tie2 >= 6 &&
          this.tie1 - this.tie2 === 2
        ) {
          this.sets1 = (this.sets1 + 1) % this.sets.length;
          this.juegos1 = (this.juegos1 + 1) % this.juegos.length;
          this.tie1 = 0;
          this.tie2 = 0;
        }
      },
      sumarTieBreak2() {
        this.tie2++;
        if (this.tie2 > 6 && this.tie1 <= 5) {
          this.sets2 = (this.sets2 + 1) % this.sets.length;
          this.juegos2 = (this.juegos2 + 1) % this.juegos.length;
  
          this.tie1 = 0;
          this.tie2 = 0;
        } else if (
          this.tie2 >= 6 &&
          this.tie1 >= 6 &&
          this.tie2 - this.tie1 === 2
        ) {
          this.sets2 = (this.sets2 + 1) % this.sets.length;
          this.juegos2 = (this.juegos2 + 1) % this.juegos.length;
  
          this.tie1 = 0;
          this.tie2 = 0;
        }
      },
      sumarTieBreak3() {
        this.tie3++;
        if (this.tie3 >6 && this.tie4 <= 5) {
          this.sets1 = (this.sets1 + 1) % this.sets.length;
          this.juegos3 = (this.juegos3 + 1) % this.juegos.length;
          this.tie3 = 0;
          this.tie4 = 0;
        } else if (
          this.tie3 >= 6 &&
          this.tie4 >= 6 &&
          this.tie3 - this.tie4 === 2
        ) {
          this.sets1 = (this.sets1 + 1) % this.sets.length;
          this.juegos3 = (this.juegos3 + 1) % this.juegos.length;
          this.tie3 = 0;
          this.tie4 = 0;
        }
      },
      sumarTieBreak4() {
        this.tie4++;
        if (this.tie4 > 6 && this.tie3 <= 5) {
          this.sets2 = (this.sets2 + 1) % this.sets.length;
          this.juegos4 = (this.juegos4 + 1) % this.juegos.length;
  
          this.tie3 = 0;
          this.tie4 = 0;
        } else if (
          this.tie4 >= 6 &&
          this.tie3 >= 6 &&
          this.tie4 - this.tie3 === 2
        ) {
          this.sets2 = (this.sets2 + 1) % this.sets.length;
          this.juegos4 = (this.juegos4 + 1) % this.juegos.length;
  
          this.tie3 = 0;
          this.tie4 = 0;
        }
      },
      sumarTieBreak5() {
        this.tie5++;
        if (this.tie5 >9 && this.tie6 <= 8) {
          this.sets1 = (this.sets1 + 1) % this.sets.length;
          this.juegos5 = (this.juegos5 + 1) % this.juegos.length; 
        } else if (
          this.tie5 >= 9 &&
          this.tie6 >= 9 &&
          this.tie5 - this.tie6 === 2
        ) {
          this.sets1 = (this.sets1 + 1) % this.sets.length;
          this.juegos5 = (this.juegos5 + 1) % this.juegos.length;
        }
      },
      sumarTieBreak6() {
        this.tie6++;
        if (this.tie6 >9 && this.tie5<= 8) {
          this.sets2 = (this.sets2 + 1) % this.sets.length;
          this.juegos6 = (this.juegos6 + 1) % this.juegos.length;
      
        } else if (
          this.tie6 >= 9 &&
          this.tie5 >= 9 &&
          this.tie6 - this.tie5 === 2
        ) {
          this.sets2 = (this.sets2 + 1) % this.sets.length;
          this.juegos6 = (this.juegos6 + 1) % this.juegos.length;
        }
      },
      restarPuntos1() {
        if (this.puntos1 > 0) {
          this.puntos1--;
        }
      },
      restarPuntos2() {
        if (this.puntos2 > 0) {
          this.puntos2--;
        }
      },
      restarPuntos3() {
        if (this.puntos3 > 0) {
          this.puntos3--;
        }
      },
      restarPuntos4() {
        if (this.puntos4 > 0) {
          this.puntos4--;
        }
      },
      restarPuntos5() {
        if (this.puntos5 > 0) {
          this.puntos5--;
        }
      },
      restarPuntos6() {
        if (this.puntos6 > 0) {
          this.puntos6--;
        }
      },
      restarJuegos1() {
        if (this.juegos1 > 0) {
          this.juegos1--;
        }
      },
      restarJuegos2() {
        if (this.juegos2 > 0) {
          this.juegos2--;
        }
      },
      restarJuegos3() {
        if (this.juegos3 > 0) {
          this.juegos3--;
        }
      },
      restarJuegos4() {
        if (this.juegos4 > 0) {
          this.juegos4--;
        }
      },
      restarJuegos5() {
        if (this.juegos5 > 0) {
          this.juegos5--;
        }
      },
      restarJuegos6() {
        if (this.juegos6 > 0) {
          this.juegos6--;
        }
      },
      
      restarSets1() {
        if (this.sets1 > 0) {
          this.sets1--;
        }
      },
     
      sumarJuegos1() {
        this.juegos1 = (this.juegos1 + 1) % this.juegos.length;
        if (this.juegos1 >= 5 && this.juegos2 >= 5) {
          if (
            (this.juegos1 === 7 || this.juegos2 === 7) &&
            !(this.juegos1 === 6 && this.juegos2 === 6)
          ) {
            this.sets1 = this.sets1 % this.sets.length;
           
          }
        } else if (this.juegos1 === 6) {
          if (this.juegos2 === 6) {
            this.tie1 = 0;
            this.tie2 = 0;
          } else {
            this.sets1 = (this.sets1 + 1) % this.sets.length;
            
          }
        }
      },
      sumarJuegos2() {
        this.juegos2 = (this.juegos2 + 1) % this.juegos.length;
        if (this.juegos1 >= 5 && this.juegos2 >= 5) {
          if (
            (this.juegos1 === 7 || this.juegos2 === 7) &&
            !(this.juegos1 === 6 && this.juegos2 === 6)
          ) {
            this.sets2 = this.sets2 % this.sets.length;
            
          }
        } else if (this.juegos2 === 6) {
          if (this.juegos1 === 6) {
            this.tie1 = 0;
            this.tie2 = 0;
          } else {
            this.sets2 = (this.sets2 + 1) % this.sets.length;
           
          }
        }
      },
      sumarJuegos3() {
        this.juegos3 = (this.juegos3+ 1) % this.juegos.length;
        if (this.juegos3 >= 5 && this.juegos4 >= 5) {
          if (
            (this.juegos3 === 7 || this.juegos4 === 7) &&
            !(this.juegos3 === 6 && this.juegos4 === 6)
          ) {
            this.sets1 = this.sets1 % this.sets.length;
            
          }
        } else if (this.juegos3 === 6) {
          if (this.juegos4 === 6) {
            this.tie3 = 0;
            this.tie4 = 0;
          } else {
            this.sets1 = (this.sets1 + 1) % this.sets.length;
           
        }
      }
      },
      sumarJuegos4() {
        this.juegos4 = (this.juegos4+ 1) % this.juegos.length;
        if (this.juegos4 >= 5 && this.juegos3 >= 5) {
          if (
            (this.juegos4 === 7 || this.juegos3 === 7) &&
            !(this.juegos4 === 6 && this.juegos3 === 6)
          ) {
            this.sets2 = this.sets2 % this.sets.length;
            
          }
        } else if (this.juegos4 === 6) {
          if (this.juegos3 === 6) {
            this.tie3 = 0;
            this.tie4 = 0;
          } else {
            this.sets2 = (this.sets2 + 1) % this.sets.length;
           
          }
        }
      },
      sumarJuegos5() {
        this.juegos5 = (this.juegos5 + 1) % this.juegos.length;
        if (this.juegos5 >= 5 && this.juegos6 >= 5) {
          if (
            (this.juegos5 === 7 || this.juegos6 === 7) &&
            !(this.juegos5 === 6 && this.juegos6 === 6)
          ) {
            this.sets1 = this.sets1 % this.sets.length;
           
          }
        } else if (this.juegos5 === 6) {
          if (this.juegos6 === 6) {
            this.tie5 = 0;
            this.tie6 = 0;
          } else {
            this.sets1 = (this.sets1 + 1) % this.sets.length;
            
          }
        }
      },
      sumarJuegos6() {
        this.juegos6 = (this.juegos6 + 1) % this.juegos.length;
        if (this.juegos6 >= 5 && this.juegos5 >= 5) {
          if (
            (this.juegos6 === 7 || this.juegos5=== 7) &&
            !(this.juegos6 === 6 && this.juegos5 === 6)
          ) {
            this.sets2 = this.sets2 % this.sets.length;
           
          }
        } else if (this.juegos6 === 6) {
          if (this.juegos5 === 6) {
            this.tie5 = 0;
            this.tie6 = 0;
          } else {
            this.sets2 = (this.sets2 + 1) % this.sets.length;
            
          }
        }
      },
      sumarSets1() {
        this.sets1 = (this.sets1 + 1) % this.sets.length;
      },
      sumarSets2() {
        this.sets2 = (this.sets2 + 1) % this.sets.length;
      },
      restarSets2() {
        if (this.sets2 > 0) {
          this.sets2--;
        }
        
      },
      restarTieBreak1() {
        if (this.tie1 > 0) {
          this.tie1--;
        }
      },
      restarTieBreak2() {
        if (this.tie2 > 0) {
          this.tie2--;
        }
      },
      restarTieBreak3() {
        if (this.tie3 > 0) {
          this.tie3--;
        }
      },
      restarTieBreak4() {
        if (this.tie4 > 0) {
          this.tie4--;
        }
      },
      restarTieBreak5() {
        if (this.tie5 > 0) {
          this.tie5--;
        }
      },
      restarTieBreak6() {
        if (this.tie6 > 0) {
          this.tie6--;
        }
      },
      irAinicio() {
        // Navegar a la nueva página utilizando Vue Router
        this.$router.push('/');
      }
    },
    mounted() {
      // Desactivar el zoom de la página
      window.addEventListener('wheel', function(event) {
        if (event.ctrlKey === true) {
          event.preventDefault();
        }
      }, { passive: false });
  
      window.addEventListener('keydown', function(event) {
        if (event.ctrlKey === true && (event.key === '+' || event.key === '-' || event.key === '0')) {
          event.preventDefault();
        }
      });
    }
  };
  </script>
  
  <style>
  /* Estilo para resaltar en verde */
  .num-resultado{
    font-size:12vw;
  }
  
  html,body {
    zoom: 1;
    touch-action: manipulation ; /* Evita que el usuario pueda hacer gestos en dispositivos móviles*/
    /* Opcional: otras propiedades CSS para desactivar el zoom */
  }
  
  .oro{
    color: #ffa115;
  }
  </style>
  