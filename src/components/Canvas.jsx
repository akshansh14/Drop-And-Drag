import React, { useContext, useEffect, useState } from "react";
import Cards from "./Cards";
import { AppContext } from "../context/AppContext";

const Canvas = () => {
  
  const {cardData,setCardData}=useContext(AppContext)
  const addCard = () => {
    setCardData((prev) => [...prev, { id: prev.length, ref: React.createRef() ,title:"" , description: ""}]);
  };
console.log(cardData)

useEffect(()=>{
  
    addCard()
   
},[])
  return (
      <div className="relative w-full h-screen bg-gray-200">
      <button onClick={addCard} className="m-4 p-2 bg-blue-500 text-white">
        Add Card
      </button>
      {cardData.map((card ,index) => (
        <Cards key={card.id} id={card.id} cardRef={card.ref} />

    ))}
    </div>
  );
};

export default Canvas;
