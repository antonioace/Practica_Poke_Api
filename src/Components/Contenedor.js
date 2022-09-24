import { Divider, Input, List, Typography } from "antd";
import { observer } from "mobx-react";
import { increment, state } from "../mob/Todo";

export const Contenedor = observer((props) => {

  const data=props.todo.todos
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>{props.todo.descripcion}</ul>

      <Input
      style={{width:"50%"}}
        type="text"
        onChange={(e) => {
          props.todo.cambiaValor(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.target.value.trim().length !== 0) {
            if (e.key === "Enter") {
              console.log("esto si es un enter");
              props.todo.agregarValor(e.target.value);
              e.target.value = "";
              props.todo.cambiaValor(e.target.value);
            }
          }
        }}
      />

<Divider orientation="left">Lista de tareas</Divider>
    <List
    style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginRight:"50px",marginLeft:"50px"}}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item
        style={{width:"200px"}}>
          <Typography.Text mark>[TAREA]</Typography.Text> {item}
        </List.Item>
      )}
    />

      <ul>
        {props.todo.todos.length <= 0 ? (
          <p>No hay ninguna tarea Agregada</p>
        ) : (
          <p>La cantida de tareas agregadas es: {props.todo.todos.length}</p>
        )}

        {props.todo.todos.length > 0
          ? props.todo.todos.map((item, index) => (
              <li key={index}>
                {item}{" "}
                <button
                  onClick={() => {
                    props.todo.eliminarValor(index);
                  }}
                >
                  X
                </button>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
});
