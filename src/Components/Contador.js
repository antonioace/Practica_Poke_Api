import { Button } from "antd";
import { observer } from "mobx-react";
import React from "react";
import { increment, Pokemon, pokemonStore, state } from "../mob/Todo";

const Contador = () => {
  return (
    <div>
      <p>{state.value}</p>
      <Button
        htmlType="button"
        onClick={() => {
          increment(state);
        }}
      >
        Incrementar
      </Button>

    
    </div>
  );
};

export default observer(Contador);
