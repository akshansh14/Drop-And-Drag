import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Canvas = () => {
    const [cardsArr, setCardsArr] = useState([]);

    const addCard = () => {
      setCardsArr((prev) => [...prev, { id: prev.length }]);
    };
  
    console.log(addCard)
    return (
      <div className="absolute w-full h-screen bg-gray-200">
        <button onClick={addCard} className="m-4 p-2 bg-blue-500 text-white">
          Add Card
        </button>
        {cardsArr.map((card) => (
          <Cards key={card.id} id={card.id} />
        ))}
      </div>
    );
};

export default Canvas;


