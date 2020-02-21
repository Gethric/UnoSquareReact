import React from "react";
import Pokemon from "../Pokemon/Pokemon.component";

const ListPokemon = props => {
	return (
		<div className="Pokemon">
			<div className="list">
				{props.pokemon.map(pokeData => (
					<Pokemon key={pokeData.id} pokeData={pokeData} />
				))}
			</div>
		</div>
	);
};

export default ListPokemon;
