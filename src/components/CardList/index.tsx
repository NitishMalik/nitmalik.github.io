import React from "react";
import Card from "../Card";

const CardList = ({ robos }) => {
  console.log("Render Card List");
  return (
    <div>
      {robos.map((robo) => {
        return (
          <Card
            key={robo.id}
            id={robo.id}
            name={robo.name}
            email={robo.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
