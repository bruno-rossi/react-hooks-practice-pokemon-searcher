import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokemon, setPokemon}) {



  function handleAddPokemon(event) {

    const newPokemon = {
      "name": event.target.name.value,
      "hp": event.target.hp.value,
      "sprites": {
        "front": event.target.frontUrl.value,
        "back": event.target.backUrl.value
      }
    }
    console.log(newPokemon);

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(response => response.json())
    .then(jsonData => setPokemon([...pokemon, newPokemon]))

  }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={event => {
          event.preventDefault();
          handleAddPokemon(event);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
