<template>

    <!-- <div class="bg-gray-100 text-blue-400 px-4 mb-4 text-2xl font-semibold rounded-md border-2 border-re-500 flex justify-end">
        <FhUrl />
    </div> -->

    <h1 v-if="!pokemon" class="animate-pulse text-3xl lg:text-5xl">Espere por favor...</h1>


    <div v-else>
        <h1 class="text-2xl lg:text-4xl font-semibold bg-pink-600 text-pink-300 py-1 lg:py-2 rounded-md">¿Cuál es este pokemon?</h1>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <PokemonOptions :pokemons="pokemonArr" @selectionPokemon="checkAnswer" />

        <template v-if="showAnswer">
            <h2 class="text-2xl lg:text-4xl my-2 lg:my-10 py-2 bg-pink-600 text-pink-300 rounded-md">{{message}}</h2>
            <button @click="newGame" class="bg-pink-600 mb-1 px-4 py-2 rounded-md text-pink-300 font-bold uppercase tracking-wider hover:bg-pink-700 hover:shadow-md">Nuevo Juego</button>
        </template>
    </div>

    



</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue"
import PokemonOptions from "@/components/PokemonOptions.vue"
// import FhUrl from "@/components/FhUrl.vue"

import getPokemonOptions from "@/helpers/getPokemonOptions.js"

// console.log( getPokemonOptions() );

export default {
    name: 'PokemonPage',
    components: {
        PokemonPicture,
        PokemonOptions,
        // FhUrl,
    },

    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: '',
        }
    },

    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            // console.log(this.pokemonArr);
            const rndInt = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArr[rndInt]
        },
        checkAnswer(selectedId) {
            this.showPokemon = true
            this.showAnswer = true

            if (selectedId === this.pokemon.id) {
                this.message = `Bien!! era ${this.pokemon.name}`
            } else {
                this.message = `mmm... que lástima era ${this.pokemon.name}`
            }

        },

        newGame() {
            this.pokemonArr = []
            this.pokemon = null
            this.showPokemon = false
            this.showAnswer = false
            this.mixPokemonArray()
        }
        
    },

    mounted() {
        this.mixPokemonArray()
    }
}
</script>