import React from "react";

const CatchPokemon = props => {
	console.log(props);
	return (
		<div className="catch_pokemon">
			<input
				type="text"
				name="name"
				placeholder="Enter Pokemon name"
				value={props.state.name}
				onChange={props.handleChange}
			/>

			<button onClick={props.onClick}>Catch</button>
		</div>
	);
};

export default CatchPokemon;
