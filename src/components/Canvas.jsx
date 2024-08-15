import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Canvas = () => {
  const [cardsArr, setCardsArr] = useState([]);
  const addCard = () => {
    setCardsArr((prev) => [...prev, { id: prev.length, ref: React.createRef() }]);
  };


useEffect(()=>{
  
    addCard()
   
},[])
  return (
      <div className="relative w-full h-screen bg-gray-200">
      <button onClick={addCard} className="m-4 p-2 bg-blue-500 text-white">
        Add Card
      </button>
      {console.log(cardsArr)}
      {cardsArr.map((card ) => (
        <Cards key={card.id} id={card.id} cardRef={card.ref} />

    ))}
    </div>
  );
};

export default Canvas;
