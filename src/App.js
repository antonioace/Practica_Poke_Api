import logo from "./logo.svg";
import "./App.css";
import { increment, state, Todo } from "./mob/Todo";
import Rutas from "./rutas/rutas";
import { observer } from "mobx-react";

const store = new Todo("Titulo", "descripcion");

function App() {
  return (
    <div className="App">
      <Rutas todo={store}></Rutas>
      
    </div>
  );
}

export default (App);
