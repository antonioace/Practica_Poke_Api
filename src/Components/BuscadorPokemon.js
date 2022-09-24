import { Button, Input, Row } from "antd";
import { observer } from "mobx-react";
import React, { useEffect, useRef, useState } from "react";
import { Pokemon, pokemonStore } from "../mob/Todo";
import ListaItemPokemon from "./ListaItemPokemon";

function BuscadorPokemon() {
  const [nombre, setNombre] = useState("");
  const [pokemones, setPokemones] = useState([]);
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    if (nombre.trim().length === 0) {
      setEnviado(false);
    }
  }, [enviado, nombre]);

  return (
    <div>
      <label>Escribe tu pokemon</label>
      <Input
        type="text"
        style={{ width: "50%", marginTop: "200px" }}
        onChange={(e) => {
          setNombre(e.target.value.toLowerCase());
        }}
      />
      <Button
        type="primary"
        onClick={() => {
          pokemonStore.buscarPokemon(nombre);
          setEnviado(true);
          pokemonStore.traerListaAwait();
        }}
      >
        Buscar
      </Button>

      <div style={{ marginTop: "20px" }}>
        <h1>Lista de pokemones</h1>
        <h3>Cantidad de pokemones :{pokemonStore.cantidadPokemones}</h3>

        <Row gutter={[24, 24]}>
          {pokemonStore.pokemonBuscado &&
            nombre.length > 0 &&
            enviado === true && (
              <ListaItemPokemon
                imagen={pokemonStore.pokemonBuscado.sprites.front_default}
                name={pokemonStore.pokemonBuscado.name}
                peso={Number(pokemonStore.pokemonBuscado.weight / 10)}
                altura={Number(pokemonStore.pokemonBuscado.height / 10)}
              />
            )}
          {enviado === false &&
            pokemonStore.listaPokemons.length > 0 &&
            pokemonStore.listaPokemons.map((pokemon) => (
              <ListaItemPokemon
                imagen={pokemon.sprites.front_default}
                name={pokemon.name}
                peso={Number(pokemon.weight)}
                altura={Number(pokemon.height)}
              />
            ))}
        </Row>
      </div>
    </div>
  );
}

export default observer(BuscadorPokemon);
