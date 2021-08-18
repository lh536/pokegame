import pokemonApi from "../api/pokemonApi"

const getPokemons = () => {

    const pokemonsArr = Array.from(Array(650))
    return pokemonsArr.map( ( _ , index ) => index + 1 )

}


const getPokemonOptions = async () => {
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 )
    const pokemons = await getPokemonNames( mixedPokemons.splice( 0,4 ) )

    // console.table(pokemons);

    return pokemons
}


const getPokemonNames = async ( [ pok1 , pok2 , pok3 , pok4 ] = [] ) => {

    // const serverResponse = await pokemonApi.get(`/1`)

    // console.log(serverResponse.data.name, serverResponse.data.id);

    // console.log( pok1, pok2, pok3, pok4 );


    const promisesArr = [
        pokemonApi.get(`/${pok1}`),
        pokemonApi.get(`/${pok2}`),
        pokemonApi.get(`/${pok3}`),
        pokemonApi.get(`/${pok4}`),
    ]

    const [ pokemon1 , pokemon2 , pokemon3 , pokemon4 ] = await Promise.all ( promisesArr )

    // console.log( pokemon1 , pokemon2 , pokemon3 , pokemon4 );

    return [
        { name: pokemon1.data.name , id: pokemon1.data.id },
        { name: pokemon2.data.name , id: pokemon2.data.id },
        { name: pokemon3.data.name , id: pokemon3.data.id },
        { name: pokemon4.data.name , id: pokemon4.data.id },
    ]

}

export default getPokemonOptions