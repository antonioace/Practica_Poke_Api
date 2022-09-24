import {
  makeAutoObservable,
  runInAction,
  reaction,
  observable,
  action,
  computed,
  makeObservable,
  toJS,
} from "mobx";

export class Todo {
  todos = [];
  titulo = "";
  descripcion = "";

  status = false;

  constructor(titulo, descripcion) {
    makeObservable(this, {
      todos: observable,
      titulo: observable,
      descripcion: observable,
      status: observable,
      cambiaValor: action,
      agregarValor: action,
      resetearValor: action,
      eliminarValor: action,
    });
    this.titulo = titulo;
    this.descripcion = descripcion;
  }

  cambiaValor(valor) {
    this.descripcion = valor;
  }
  resetearValor() {
    this.descripcion = "";
  }

  agregarValor(valor) {
    this.todos.push(valor);
  }

  eliminarValor(indice) {
    let nuevoArreglo = this.todos.filter((todo, index) => index !== indice);
    this.todos = nuevoArreglo;
  }
}

const state = observable({ value: 0 });

const increment = action((state) => {
  state.value++;
  state.value++;
});

export class Pokemon {
  listaPokemons = [];
  pokemonBuscado = null;

  constructor() {
    makeObservable(this, {
      listaPokemons: observable,
      pokemonBuscado: observable,
      traerLista: action,
      cambiarLista: action,
      buscarPokemon: action,
    });
    this.traerListaAwait();
  }

  async traerLista() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
    const { results } = await response.json();

    results.forEach((dataInfoPokemon) => {
      fetch(dataInfoPokemon.url)
        .then((response) => response.json())
        .then((pokemonData) => {
          this.cambiarLista(pokemonData);
        });
    });
  }

  async traerListaAwait() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?");
    const { results } = await response.json();

    const dataPokemon = results.map(async (dataInfoPokemon) => {
      const responsePokemon = await fetch(dataInfoPokemon.url);
      const infoPokemon = await responsePokemon.json();
      return infoPokemon;
    });
    const dataSinPromesa = await Promise.all([...dataPokemon]);
    this.cambiarLista(dataSinPromesa);
  }

  cambiarLista(dataPokemon) {
    this.listaPokemons = dataPokemon;
  }

  async buscarPokemon(name) {
    console.log("Si entraste");
    const responsePokemon = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + name
    );
    const dataPokemon = await responsePokemon.json();

    this.pokemonBuscado = dataPokemon;
    console.log("este es el objeto de la clase", dataPokemon);
  }

  get cantidadPokemones() {
    return this.listaPokemons.length;
  }
}
export const pokemonStore = new Pokemon();

export { state, increment };
