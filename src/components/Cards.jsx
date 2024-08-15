import React, { useContext, useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import Moveable from "react-moveable";
import CardModal from "./CardModal";
import { AppContext } from "../context/AppContext";

const Cards = ({ id, cardRef }) => {

  //ref error
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      setIsReady(true);
    }
  }, [cardRef]);
 

  //Card Data
  const [isEditing,setIsEditing]=useState(false)
 const {openModal,closeModal,cardData,isModalOpen}=useContext(AppContext)
 




  

  return (
    <div onClick={()=>setIsEditing(true)}>
      <div
        ref={cardRef}
        className="target bg-white relative  text-black border-2 shadow-lg rounded-md cursor-pointer  w-[200px]  min-h-[200px]"
      >
        <div className="min-h-[40px] bg-black text-white py-2 flex z-10 justify-center items-center">
          <h1 className="text-xl ">
            {
              cardData.title ? (cardData.title):(<p>Title</p>)
            }
            </h1>
          <div className="absolute right-2" onClick={()=>openModal()}><MdEdit /></div>
        </div>
         <div className="my-2">
         <p>
          {
          cardData.title ? (cardData.title):(<p>Description</p>)
          }
          </p>
         </div>

        
      </div>

      {isReady && (
        <Moveable
          target={cardRef.current}
          container={null}
          origin={true}
          edge={true}
          draggable={true}
          onDrag={({ target, transform }) => {
            target.style.transform = transform;
          }}
          keepRatio={true}
          resizable={true}
          onResize={({ target, width, height }) => {
            target.style.width = `${width}px`;
            target.style.height = `${height}px`;
          }}
          scalable={true}
          onScale={({ target, transform }) => {
            target.style.transform = transform;
          }}
          rotatable={true}
          onRotate={({ target, transform }) => {
            target.style.transform = transform;
          }}
          pinchable={true}
        />
      )}


        <CardModal/>

    
    </div>
  );
};

export default Cards;
