import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

// Deliverable 1
// Create an index displaying Pokemon 'cards'
// - Fetch the Pokemon data in the PokemonPage component
// Render each Pokemon name, sprite, and hp in a card
// - Map the pokemonArray in the PokemonCollection component
// - In PokemonCard, pass name, hp, and both sprites (front and back).
// When clicked, the card should toggle between displaying the front and back sprites
// - Store the prite as a state with setSprite to toggle between front and back!

// Deliverable 2
// Allow users to search a Pokemon by its name in order to narrow down the cards shown on the page
// - Define a callback function in PokemonPage and pass it down to Search to get the input value
// - Store the search input value as a state in PokemonCollection. In the Collection, map to this new state instead of the full list. Re-render the collection based on the new items.

// Deliverable 3
// Wire up the form to add a missing Pokemon (Bulbasaur is missing, and you can probably intuit the image links to use based on the data you have). When a new Pokemon is added, it should show on the page without having to refresh.
// - PokemonForm should have a callback function to pass the new Pokemon up to its parent and include it in the state. Re-render the collection based on the updated list of Pokemon

function PokemonPage() {

  const [ pokemon, setPokemon ] = useState([]);
  const [ search, setSearch ] = useState("");

  // useEffect(() => {}, [])
  useEffect(() => {

    fetch("http://localhost:3001/pokemon")
    .then(response => response.json())
    .then(jsonData => setPokemon(jsonData));
    }, [])

    const pokemonToDisplay = pokemon.filter(poke => {
      return poke.name.toLowerCase().includes(search.toLowerCase());
    })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemon={pokemon} setPokemon={setPokemon}/>
      <br />
      <Search setSearch={setSearch} search={search}/>
      <br />
      <PokemonCollection pokemon={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
