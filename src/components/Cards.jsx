import React, { useContext, useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import Moveable from "react-moveable";
import CardModal from "./CardModal";
import { AppContext } from "../context/AppContext";

const Cards = ({ id, cardRef }) => {


  const [isEditing,setIsEditing]=useState(false)
  const[showmore,setShowmore]=useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const {cardData,activeId ,deleteCard, setactiveId }=useContext(AppContext)
  
   
    const openModal =()=>{
        setIsModalOpen(true);
        console.log(isModalOpen)
      }
    
      const closeModal =()=>{
        setIsModalOpen(false);
      }

      const handelclick=()=>{
        if(!showmore){
          setactiveId(id)
          setIsEditing(true)
        }
      }

  

  return (
    <div onClick={handelclick} className="" >
      <div
        ref={cardRef}
        className= {` target bg-white relative text-black border-2 shadow-lg rounded-md cursor-pointer  w-[200px] ${showmore ? (`scale-110`) : (`scale-100`) } `}
      >
        <div className="w-full h-full">
        <div className="min-h-[40px] bg-black text-white py-2 flex z-10 rounded-t-md justify-center items-center">
          <h1 className="text-xl tracking-wide ">
            {
              cardData[id].title ? (cardData[id].title):(<p>Title</p>)
            }
            </h1>
          <div className="absolute left-2 z-50" onClick={()=>openModal()}><MdEdit /></div>
          <div className="absolute right-2 z-50" onClick={()=>deleteCard()}><MdDelete /></div>
        </div>
         <div className="my-2 px-3 min-h-[230px]">
         <div className="text-sm ">
          {
          cardData[id].title ? 
          (<>
          {showmore ? (<p> {`${cardData[id].description}`}<span className="text-blue-900" onClick={()=>setShowmore(false)}>Show Less</span></p>): (<p> {`${cardData[id].description.substring(0,300)}...`}<span className="text-blue-900" onClick={()=>setShowmore(true)}>Show More</span></p>)}
          </>
           )
          :(<span>Description</span>)
          }
          </div>
         </div>

        </div>
        
      </div>

      {activeId===id && (
        <Moveable
          target={cardRef.current}
          container={null}
          origin={true}
          edge={true}
          draggable={true}
          onDrag={({ target, transform }) => {
            target.style.transform = transform;
          }}
          keepRatio={false}
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


        <CardModal id={id}
        openModal={openModal}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        />

    
    </div>
  );
};

export default Cards;
