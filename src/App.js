import React from "react";
import "./App.css";
import ListPokemon from "./components/ListPokemon/ListPokemon.component";
import CatchPokemon from "./components/CatchPokemon/CatchPokemon.component";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			pokemons: []
		};
		this.catchEmAll = this.catchEmAll.bind(this);
	}

	handleChange = event => {
		console.log(event);
		this.setState({ [event.target.name]: event.target.value.toLowerCase() });
	};

	catchEmAll(event) {
		event.preventDefault();
		fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}/`)
			.then(res => res.json())
			.then(data => {
				this.setState({
					pokemons: this.state.pokemons.concat(data)
				});
			})
			.catch(console.log);
	}

	render() {
		let pokeData = this.state.pokemons;
		console.log(pokeData);
		return (
			<div className="App">
				{pokeData.length ? (
					<ListPokemon pokemon={pokeData} />
				) : (
					<span className="empty">No Pokemons captured yet</span>
				)}
				<CatchPokemon
					onClick={this.catchEmAll}
					handleChange={this.handleChange}
					state={this.state}
				/>
			</div>
		);
	}
}

export default App;
