import React from "react";

const Pokemon = ({ pokeData }) => {
	return (
		<div className="pokemon">
			<div className="image">
				<img src={pokeData.sprites.front_default} alt="pokemon" />
			</div>

			<div className="pokemon_info">
				<span className="id">ID: {pokeData.id} </span>
				<span className="name">NAME: {pokeData.name}</span>
			</div>
		</div>
	);
};

export default Pokemon;
