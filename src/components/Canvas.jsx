import React, { useContext } from "react";
import Cards from "./Cards";
import { AppContext } from "../context/AppContext";

const Canvas = () => {
  
  const {cardData,setCardData,count,setCount  }=useContext(AppContext)

  const addCard = () => {
    setCount(count+1)
    setCardData((prev) => [...prev, { id: count, ref: React.createRef() ,title:"" , description: ""}]);
  };



  return (
      <div className="relative w-full h-screen overflow-x-hidden  bg-white ">
        <p className="text-4xl text-center mt-3  uppercase">Canvas</p>
      <button onClick={addCard} className='absolute bg-black text-white p-2 px-4 cursor-pointer rounded-md right-8 top-5 select-none font-semibold '>
        Add Card
      </button>
      <div className="w-[90%] h-[70%]  bg-red-950 z-10 pt-[50px] pl-7 overflow-y-scroll mt-[30px]  mx-auto gap-x-6 gap-y-6 grid grid-cols-4 " >
      {cardData.map((card ) => (
        <Cards key={card.id} id={card.id} cardRef={card.ref} />

    ))}
      </div>
    </div>
  );
};

export default Canvas;
