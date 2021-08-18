<template>

    <div class="flex justify-center relative my-2 lg:my-6">
        <img class="border-2 border-gray-500 shadow-xl rounded-xl p-2 filter brightness-0 select-none relative w-48 h-48 lg:w-80 lg:h-80" :src="imgSrc" alt="pokemon">
        <img class="border-2 border-gray-500 shadow-xl rounded-xl p-2 animate-fade-in absolute w-48 h-48 lg:w-80 lg:h-80" v-if="showPokemon" :src="imgSrc" alt="pokemon">
    </div>

</template>

<script>

export default {
    name: 'PokemonPicture',
    props: {
        pokemonId: {
            type: Number,
            required: true
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        },
    },

    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`

        }
    }
};
</script>

<style>
</style>