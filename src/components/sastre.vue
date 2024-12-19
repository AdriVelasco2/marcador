<template>
    <div v-else-if="tercero===false && verTie2===false " >
      <div 
      v-if="sets1!=2 && sets2!=2"
        class="grid grid-cols-4 p-4 text-white"
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
        <div v-if="sets1 === 1 || sets2 === 1" class="grid grid-cols-2">
          <h1 class="text text-4xl p-2 col-span-2 grid content-center">SET 2</h1>
            <h2
          class="text text-9xl p-2 border-l-2 col-span-2 grid content-center justify-center relative"
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
     
        <div v-if="sets1 === 0 && sets2 === 0" class="grid grid-cols-2">
          <h1 class="text text-4xl p-2 col-span-2 grid content-center">PUNTOS</h1>
          <h2 class="text text-9xl col-span-1 grid content-center justify-center"
          :class="{ 'oro':puntos[puntos1] === 40 && puntos[puntos2] === 40 }"
          >
            {{ puntos[puntos1] }}
          </h2>
          <div v-if="sets1 <= 1 && sets2 <= 1" class="grid justify-items-start gap-6">
            <button
              class="text text-9xl grid content-start"
              @click="sumarPuntos1()"
            >
              🔼
            </button>
            <button
              class="text text-9xl grid content-start"
              @click="restarPuntos1"
            >
              🔽
            </button>
          </div>
        </div>
        <div v-else-if="sets1 === 1 || sets2 === 1" class="grid grid-cols-2">
          <h1 class="text text-4xl p-2 col-span-2 grid content-center">PUNTOS</h1>
          <h2 class="text text-9xl col-span-1 grid content-center justify-center"
          :class="{ 'oro':puntos[puntos3] === 40 && puntos[puntos4] === 40 }"
          >
            {{ puntos[puntos3] }}
          </h2>
          <div v-if="sets1 <= 1 && sets2 <= 1" class="grid justify-items-start gap-6">
            <button
              class="text text-9xl grid content-start"
              @click="sumarPuntos3();  mostrarSet3(); mostrarTie2();"
            >
              🔼
            </button>
            <button
              class="text text-9xl grid content-start"
              @click="restarPuntos3(); mostrarTie2();"
            >
              🔽
            </button>
          </div>
        </div>
      </div>
    
      <!-- COLUMNA DE ABAJO -->
  
      <div
      v-if="sets1!=2 && sets2!=2 && verTie2===false"
      class="grid grid-cols-4 border-t-2 text-white justify-evenly"
      >
        <div  class="grid content-end gap-1">
          <textarea
            v-model="jugador21"
            class="bg-black text-white p-2 rounded-md w-auto resize-none truncate text text-5xl col-span-2"
            spellcheck="false"
          ></textarea>
          <textarea
            v-model="jugador22"
            class="bg-black text-white p-2 rounded-md w-auto resize-none truncate text text-5xl col-span-2"
            spellcheck="false"
          ></textarea>
        </div>
        <div class="grid grid-cols-2">
          <h1 class="text text-4xl p-2 col-span-2 grid content-center"></h1>
          <h2
            class="text text-9xl p-2 col-span-1 grid content-center justify-center"
          >
            {{ juegos[juegos2] }}
          </h2>
          <div v-if="sets1 === 0 && sets2 === 0" class="grid justify-items-start gap-6">
            <button class="text text-9xl grid  content-start " @click="sumarJuegos2()">
              🔼
            </button>
            <button class="text text-9xl" @click="restarJuegos2()">
              🔽
            </button>
          </div>
        </div>
        <div v-if="sets2 >= 1 || sets1 >= 1" class="grid grid-cols-2">
          <h1 class="text text-4xl p-2 col-span-2 grid content-center"></h1>
          <h2
            class="text text-9xl p-2 col-span-1 grid content-center justify-center"
          >
            {{ juegos[juegos4] }}
          </h2>
          <div class="grid justify-items-start gap-6">
            <button
              class="text text-9xl grid content-start"
              @click="sumarJuegos4(); mostrarSet3(); mostrarTie2();"
            >
              🔼
            </button>
            <button
              class="text text-9xl grid content-start"
              @click="restarJuegos4();mostrarTie2();"
            >
              🔽
            </button>
          </div>
        </div>
        <div v-if="sets1 === 0 && sets2 === 0" class="grid grid-cols-2">
          <h1 class="text text-4xl p-2 col-span-2 grid content-center"></h1>
          <h2 class="text text-9xl col-span-1 grid content-center justify-center"
          :class="{ 'oro':puntos[puntos1] === 40 && puntos[puntos2] === 40 }"
          >
            {{ puntos[puntos2] }}
          </h2>
          <div v-if="sets1 <= 1 && sets2 <= 1" class="grid justify-items-start gap-6">
            <button
              class="text text-9xl grid content-start"
              @click="sumarPuntos2()"
            >
              🔼
            </button>
            <button
              class="text text-9xl grid content-start"
              @click="restarPuntos2()"
            >
              🔽
            </button>
          </div>
        </div>
        <div v-if="sets1 === 1 || sets2 === 1" class="grid grid-cols-2">
          <h1 class="text text-4xl p-2 col-span-2 grid content-center"></h1>
          <h2 class="text text-9xl col-span-1 grid content-center justify-center"
          :class="{ 'oro':puntos[puntos3] === 40 && puntos[puntos4] === 40 }"
          >
            {{ puntos[puntos4] }}
          </h2>
          <div v-if="sets1 <= 1 && sets2 <= 1" class="grid justify-items-start gap-6">
            <button
              class="text text-9xl grid content-start"
              @click="sumarPuntos4(); mostrarSet3(); mostrarTie2();"
            >
              🔼
            </button>
            <button
              class="text text-9xl grid content-start"
              @click="restarPuntos4(); mostrarTie2();"
            >
              🔽
            </button>
          </div>
        </div>
      </div>
    </div>
</template>