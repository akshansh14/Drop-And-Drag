import React, { useEffect, useRef, useState } from "react";
import Moveable from "react-moveable";

const Cards = ({ id, cardRef }) => {
  // const targetRef = useRef();
  // const targetRef = `id${id}`;

    const [isReady, setIsReady] = useState(false);
  
    useEffect(() => {
      if (cardRef.current) {
        setIsReady(true);
      }
    }, [cardRef]);


  return (
    // <div className="relative w-full h-screen bg-gray-200 flex items-center justify-center">
    <div>
      {/* {
        cardRef.current && ( */}

      
          <div
          ref={cardRef}
          className="target bg-blue-400 text-white p-4 shadow-lg rounded-md cursor-pointer"
          style={{
            width: "160px",
            height: "96px",
          }}
        >
          Drag, Resize, Scale, Rotate Me {id}
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
  

        {/* )
      } */}
    </div>
  );
};

export default Cards;
