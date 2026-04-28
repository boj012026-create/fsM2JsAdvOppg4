import axios from 'axios';
import { randInt } from 'pretty-random' //In honor of Sander

const api = {
	baseUrl: "https://pokeapi.co/api/",
	version2: "v2/",
	pokeIndex: function(i) {
		return `${this.baseUrl}${this.version2}pokemon/?offset=${i}&limit=1`;
	}
}

/**
 * returns a random pokemon obj 
*/
export async function randPokemon() {
	const maxIndex = 1350;//2026-04-28 
	const index = randInt(0, maxIndex);
	const pokeIndex = await axios.get(api.pokeIndex(index));
	const pokeUrl = pokeIndex.data.results[0].url;
	console.log(pokeUrl) ;
	const pokemon = await axios.get(pokeUrl);
	console.log(pokemon.data);
	return pokemon.data; 
}

