import { Card, Col, Row } from "antd";
import React from "react";

function ListaItemPokemon(props) {
  return (
    <div className="site-card-wrapper">

        <Col span={3}>
          <Card
            style={{ width: "400px", height: "100px" }}
            title={props.name}
            bordered={true}
            cover={<img alt="example" className="logo" src={props.imagen} />}
          >
            Peso: {props.peso} Kilogramos <br />
            Altura: {props.altura} Metros
          </Card>
        </Col>
     
    </div>
  );
}

export default ListaItemPokemon;
