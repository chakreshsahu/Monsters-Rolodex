import React from "react";

import { Card } from "../card/card.component.jsx";
import "./card-list.styles.css";

export const CardList = props => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map(monsters => (
        <Card key={monsters.id} monster={monsters}></Card>
      ))}
    </div>
  );
};
