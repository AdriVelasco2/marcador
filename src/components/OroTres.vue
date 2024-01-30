<template>
  <!-- TIE BREAK -->
  <div
    class="grid grid-cols-3 grid-rows-3"
    v-if="juegos1 === 6 && juegos2 === 6"
  >
    <h1
      class="grid col-start-2 content-center text text-center text-6xl text-white"
    >
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
    <div
      class="grid col-start-3 gap-2 row-start-2 content-start p-2 text-white"
    >
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
  <!-- FIN TIE BREAK -->

  <!-- SET 1 -->
  <div>
    <div
      v-if="(sets1 === 0 && sets2 === 0) || (sets1<=1 && sets2<=1)"
      class="grid grid-cols-4 p-4 text-white"
    >
      <div class="grid content-end gap-1">
        <textarea
          v-model="jugador11"
          class="bg-black text-white rounded-md resize-none truncate text text-5xl"
          spellcheck="false"
        >
        </textarea>
        <textarea
          v-model="jugador12"
          class="bg-black text-white rounded-md resize-none truncate text text-5xl"
          spellcheck="false"
          maxlength=""
        >
        </textarea>
      </div>
      <div class="grid grid-cols-2">
        <h1
          class="text text-4xl p-2 col-span-2 grid content-center justify-start"
        >
          SET 1
        </h1>
        <h2
          class="text text-9xl p-2 col-span-1 grid content-center justify-center"
        >
          {{ juegos[juegos1] }}
        </h2>
        <div v-if="sets1 === 0 && sets2 === 0" class="grid justify-items-start">
          <button class="text text-9xl" @click="sumarJuegos1">🔼</button>
          <button class="text text-9xl" @click="restarJuegos1">🔽</button>
        </div>
      </div>

      <!-- SET 2 APARECE -->
      <div v-if="sets1 === 1 || sets2 === 1" class="grid grid-cols-2">
        <h1 class="text text-4xl p-2 col-span-2 grid content-center">Set 2</h1>
        <h2
          class="text text-9xl p-2 col-span-1 grid content-center justify-center"
        >
          {{ juegos[juegos3] }}
        </h2>
        <div v-if="sets1 >= 1 || sets2 >= 1">
          <button
            class="text text-9xl grid content-start"
            @click="sumarJuegos3"
          >
            🔼
          </button>
          <button
            class="text text-9xl grid content-start"
            @click="restarJuegos3"
          >
            🔽
          </button>
        </div>
      </div>
   
      <div v-if="sets1 === 0 && sets2 === 0" class="grid grid-cols-2">
        <h1 class="text text-4xl p-2 col-span-2 grid content-center">PUNTOS</h1>
        <h2 class="text text-9xl col-span-1 grid content-center justify-center"
        :class="{ 'oro':puntos[puntos1] === 40 && puntos[puntos2] === 40 }"
        >
          {{ puntos[puntos1] }}
        </h2>
        <div v-if="sets1 <= 1 && sets2 <= 1">
          <button
            class="text text-9xl grid content-start"
            @click="sumarPuntos1"
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
        <h2 class="text text-9xl col-span-1 grid content-center justify-center">
          {{ puntos[puntos3] }}
        </h2>
        <div v-if="sets1 <= 1 && sets2 <= 1">
          <button
            class="text text-9xl grid content-start"
            @click="sumarPuntos3"
          >
            🔼
          </button>
          <button
            class="text text-9xl grid content-start"
            @click="restarPuntos3"
          >
            🔽
          </button>
        </div>
      </div>
    </div>
  
    <!-- COLUMNA DE ABAJO -->

    <div
    v-if="sets1!=2 && sets2!=2"
    class="grid grid-cols-4 border-t-2 text-white justify-evenly"
    >
      <div class="grid content-end gap-1">
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
        <div>
          <button class="text text-9xl grid content-start" @click="sumarJuegos2">
            🔼
          </button>
          <button class="text text-9xl" @click="restarSets2">🔽</button>
        </div>
      </div>
      <div v-if="sets2 >= 1 || sets1 >= 1" class="grid grid-cols-2">
        <h1 class="text text-4xl p-2 col-span-2 grid content-center"></h1>
        <h2
          class="text text-9xl p-2 col-span-1 grid content-center justify-center"
        >
          {{ puntos[puntos4] }}
        </h2>
        <div>
          <button
            class="text text-9xl grid content-start"
            @click="sumarPuntos4"
          >
            🔼
          </button>
          <button
            class="text text-9xl grid content-start"
            @click="restarPuntos4"
          >
            🔽
          </button>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <h1 class="text text-4xl p-2 col-span-2 grid content-center"></h1>
        <h2 class="text text-9xl col-span-1 grid content-center justify-center"
        :class="{ 'oro':puntos[puntos1] === 40 && puntos[puntos2] === 40 }"
        >
          {{ puntos[puntos2] }}
        </h2>
        <div>
          <button
            class="text text-9xl grid content-start"
            @click="sumarPuntos2"
          >
            🔼
          </button>
          <button
            class="text text-9xl grid content-start"
            @click="restarPuntos2"
          >
            🔽
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- tercer set -->
  <div v-if="sets1 === 1 && sets2 === 1">
    <div class="grid grid-cols-5 p-4 text-white">
      <div class="grid content-end gap-1">
        <textarea
          v-model="jugador11"
          class="bg-black text-white rounded-md resize-none truncate text text-4xl"
          spellcheck="false"
        >
        </textarea>
        <textarea
          v-model="jugador12"
          class="bg-black text-white rounded-md resize-none truncate text text-4xl"
          spellcheck="false"
          maxlength=""
        >
        </textarea>
      </div>
      <div class="grid grid-cols-2">
        <h1
          class="text text-4xl p-2 col-span-2 grid content-center justify-start"
        >
          SET 1
        </h1>
        <h2
          class="text text-9xl p-2 col-span-1 grid content-center justify-center"
        >
          {{ juegos[juegos1] }}
        </h2>
      </div>
      <div class="grid grid-cols-2">
        <h1 class="text text-4xl p-2 col-span-2 grid content-center">SET 2</h1>
        <h2
          class="text text-9xl p-2 col-span-1 grid content-center justify-center"
        >
          {{ juegos[juegos3] }}
        </h2>
      </div>

      <div class="grid grid-cols-2">
        <h1 class="text text-4xl p-2 col-span-2 grid content-center">SET 3</h1>
        <h2 class="text text-9xl col-span-1 grid content-center justify-center">
          {{ juegos[juegos5] }}
        </h2>
        <div v-if="sets1 === 1 && sets2 === 1">
          <button
            class="text text-9xl grid content-start"
            @click="sumarJuegos5"
          >
            🔼
          </button>
          <button
            class="text text-9xl grid content-start"
            @click="restarJuegos5"
          >
            🔽
          </button>
        </div>
      </div>
      <div v-if="sets1 === 1 && sets2 === 1" class="grid grid-cols-2">
        <h1 class="text text-4xl p-2 col-span-2 grid content-center">PUNTOS</h1>
        <h2 class="text text-9xl col-span-1 grid content-center justify-center">
          {{ puntos[puntos5] }}
        </h2>
        <div>
          <button
            class="text text-9xl grid content-start"
            @click="sumarPuntos5"
          >
            🔼
          </button>
          <button
            class="text text-9xl grid content-start"
            @click="restarPuntos5"
          >
            🔽
          </button>
        </div>
      </div>
    </div>

    <!-- COLUMNA ABAJO SET 3 -->
    <div class="grid grid-cols-5 border-t-2 text-white justify-evenly">
      <div class="grid content-end gap-1">
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
          {{ sets[sets2] }}
        </h2>
      </div>
      <div v-if="sets2 === 1 || sets1 === 1" class="grid grid-cols-2">
        <h1 class="text text-4xl p-2 col-span-2 grid content-center"></h1>
        <h2
          class="text text-9xl p-2 col-span-1 grid content-center justify-center"
        >
          {{ juegos[juegos4] }}
        </h2>
      </div>
      <div class="grid grid-cols-2">
        <h1 class="text text-4xl p-2 col-span-2 grid content-center"></h1>
        <h2 class="text text-9xl col-span-1 grid content-center justify-center">
          {{ juegos[juegos6] }}
        </h2>
        <div v-if="sets1 === 1 || sets2 === 1">
          <button
            class="text text-9xl grid content-start"
            @click="sumarJuegos6"
          >
            🔼
          </button>
          <button
            class="text text-9xl grid content-start"
            @click="restarJuegos6"
          >
            🔽
          </button>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <h1 class="text text-4xl p-2 col-span-2 grid content-center"></h1>
        <h2 class="text text-9xl col-span-1 grid content-center justify-center">
          {{ puntos[puntos6] }}
        </h2>
        <div v-if="sets1 === 1 || sets2 === 1">
          <button
            class="text text-9xl grid content-start"
            @click="sumarPuntos6"
          >
            🔼
          </button>
          <button
            class="text text-9xl grid content-start"
            @click="restarPuntos6"
          >
            🔽
          </button>
        </div>
      </div>
    </div>
  </div>


  <!-- MOSTRAR RESULTADO -->
  <div v-else-if="sets1 === 2 || sets2 ===2">
    <div>
      <div class="grid grid-cols-4 p-4 text-white">
        <div class="grid  gap-1">
          <textarea
            v-model="jugador11"
            class="bg-black text-white resize-none self-end truncate text text-5xl"
            spellcheck="false"
          >
          </textarea>
          <textarea
            v-model="jugador12"
            class="bg-black text-white self-center resize-none truncate text text-5xl"
            spellcheck="false"
            maxlength=""
          >
          </textarea>
        </div>
        <div class="grid grid-cols-1">
          <h1
            class="text text-4xl p-2 col-span-2 grid content-center justify-start"
          >
            SET 1
          </h1>
          <h2
            class="num-resultado p-2 col-span-1 grid justify-start"
          >
            {{ juegos[juegos1] }}
          </h2>
        </div>
        <div class="grid grid-cols-1">
          <h1 class="text text-4xl p-2 col-span-2 grid place-content-start">
            SET 2
          </h1>
          <h2
            class="num-resultado p-2 col-span-1 grid place-content-start"
          >
            {{ juegos[juegos3] }}
          </h2>
        </div>
  
        <div class="grid grid-cols-1">
          <h1 class="text text-4xl p-2 col-span-2 grid place-content-start">SET 3</h1>
          <h2 class="num-resultado col-span-1 grid place-content-start ">
            {{ juegos[juegos5] }}
          </h2>
          
        </div>
        <div v-if="sets1 === 1 && sets2 === 1" class="grid grid-cols-2">
          <h1 class="text text-4xl p-2 col-span-2 grid content-center">PUNTOS</h1>
          <h2 class="text text-9xl col-span-1 grid content-center justify-center">
            {{ puntos[puntos5] }}
          </h2>
          
        </div>
      </div>
  
      <!-- COLUMNA ABAJO SET 3 -->
      <div class="grid grid-cols-4 p-4 border-t-2 text-white">
        <div class="grid gap-1">
          <textarea
            v-model="jugador21"
            class="bg-black text-white self-end resize-none truncate text text-5xl"
            spellcheck="false"
          ></textarea>
          <textarea
            v-model="jugador22"
            class="bg-black text-white self-center resize-none truncate text text-5xl"
            spellcheck="false"
          ></textarea>
        </div>
        <div class="grid grid-cols-2">
          <h1 class="text text-4xl p-2 col-span-2 grid content-center"></h1>
          <h2
          class="num-resultado p-2 col-span-1 grid place-content-start"
          
          >
            {{ juegos[juegos2] }}
          </h2>
        </div>
        <div v-if="sets2 === 1 || sets1 === 1" class="grid grid-cols-2">
          <h1 class="text text-4xl p-2 col-span-2 grid content-center"></h1>
          <h2
          class="num-resultado p-2 col-span-1 grid place-content-start"
          >
            {{ juegos[juegos4] }}
          </h2>
        </div>
        <div class="grid grid-cols-2">
          <h1 class="text text-4xl p-2 col-span-2 grid content-center"></h1>
          <h2 class="num-resultado p-2 col-span-1 grid place-content-start"
          >
            {{ juegos[juegos6] }}
          </h2>
         
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      puntos: [0, 15, 30, 40],
      sets: [0, 1, 2, 3],
      juegos: [0, 1, 2, 3, 4, 5, 6, 7],
    };
  },
  methods: {
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
          sets3++;
        }
      } else if (this.juegos1 == 6) {
        if (this.juegos2 === 6) {
          this.tie1 = 0;
          this.tie2 = 0;
        } else {
          this.sets1 = (this.sets1 + 1) % this.sets.length;
          sets3++;
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
          sets3++;
        }
      } else if (this.juegos2 === 6) {
        if (this.juegos1 === 6) {
          this.tie1 = 0;
          this.tie2 = 0;
        } else {
          this.sets2 = (this.sets2 + 1) % this.sets.length;
          sets3++;
        }
      }
    },
    sumarPuntos3() {
      this.puntos3 = (this.puntos3 + 1) % this.puntos.length;
      if (this.puntos3 === 0) {
        this.juegos3 = (this.juegos3 + 1) % this.juegos.length;
        this.puntos4 = 0;
      }

      if (this.juegos3 >= 5 && this.juegos4 >= 5) {
        if (
          (this.juegos3 === 7 || this.juegos4 === 7) &&
          !(this.juegos3 === 6 && this.juegos4 === 6)
        ) {
          this.sets1 = (this.sets1 + 1) % this.sets.length;
          sets3++;
        }
      } else if (this.juegos3 == 6) {
        if (this.juegos4 === 6) {
          this.tie1 = 0;
          this.tie2 = 0;
        } else {
          this.sets1 = (this.sets1 + 1) % this.sets.length;
          sets3++;
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
          sets3++;
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
    restarPuntos1() {
      if (this.puntos1 > 0) {
        this.puntos1--;
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
    restarPuntos2() {
      if (this.puntos2 > 0) {
        this.puntos2--;
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
          this.sets1 = (this.sets1 + 1) % this.sets.length;
         
        }
      } else if (this.juegos2 === 6) {
        if (this.juegos1 === 6) {
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
          this.juegos1 = 0;
          this.juegos2 = 0;
        }
      } else if (this.juegos2 === 6) {
        if (this.juegos1 === 6) {
          this.tie1 = 0;
          this.tie2 = 0;
        } else {
          this.sets2 = (this.sets2 + 1) % this.sets.length;
          this.juegos1 = 0;
          this.juegos2 = 0;
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
  },
};
</script>

<style>
/* Estilo para resaltar en verde */
.num-resultado{
  font-size:12vw;
}

.no-zoom {
  touch-action: ;
  /* Opcional: otras propiedades CSS para desactivar el zoom */
}

.oro{
  color: #ffa115;
}
</style>
