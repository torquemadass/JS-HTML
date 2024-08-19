const idOrName = "pikachu";
const url = `https://pokeapi.co/api/v2/pokemon/${idOrName}`;

// V1 (.then)
fetch (url)
    .then((response) => {
        if (response.ok) {
        return response.json();
        } else {
            throw `${response.status}: ${response.statusText}`; //or throw new Error(response.statusText)
        }
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })

// V2 (Async Await)
async function getPokemonStats(nameOrId) {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const pokemon = await response.json();

    const pokemonStats = pokemon.stats.map((status) => {
        return {
            name: status.stat.name,
            value: status.base_stat
        }
    })
    
    console.log(pokemonStats);
    } catch (error) {
        console.log(error);
    }
}

getPokemonStats("pikachu");