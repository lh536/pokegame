<template>

    <div class="flex justify-center border-2">
        <ul class="w-1/2 space-y-4">
            <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit( 'selectionPokemon', pokemon.id ) " class="bg-white border text-lg border-gray-500 rounded-md cursor-pointer hover:bg-gray-400 hover:text-gray-50 capitalize">{{pokemon.name}}</li>
        </ul>

    </div>

</template>

<script>
export default {

    name: 'PokemonOptions',
    props: {
        pokemons: {
            type: Array,
            required: true,
        }
    }

}
</script>