import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {

  const cards = pokemon.map(poke => (
    <PokemonCard 
      
      key={poke.id}
      name={poke.name}
      hp={poke.hp}
      sprites={poke.sprites}
      
    />
  ))

  console.log(cards)

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {/* map the array of Pokemon data, creating a PokemonCard for each item */}
      {/* const projectListItems = searchResults.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  )); */}
      {cards}
    </Card.Group>
  );
}

export default PokemonCollection;
