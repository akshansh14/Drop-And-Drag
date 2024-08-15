import React, { useRef, useState } from "react";
import Moveable from "react-moveable";

const Cards = ({ id }) => {
  const targetRef = useRef();
  // const targetRef = `id${id}`;

  return (
    // <div className="relative w-full h-screen bg-gray-200 flex items-center justify-center">
    <div>
      <div
        ref={targetRef}
        className="target bg-blue-400 text-white p-4 shadow-lg rounded-md cursor-pointer"
        style={{
          width: "160px",
          height: "96px",
        }}
      >
        Drag, Resize, Scale, Rotate Me {id}
      </div>

      <Moveable
        target={targetRef.current}
        container={null}
        origin={true}
        edge={true}
        draggable={true}
        onDragStart={({ target }) => {
          console.log("onDragStart", target);
        }}
        onDrag={({ target, transform }) => {
          target.style.transform = transform;
        }}
        keepRatio={true}
        resizable={true}
        throttleResize={0}
        onResizeStart={({ target }) => {
          console.log("onResizeStart", target);
        }}
        onResize={({ target, width, height, delta }) => {
          if (delta[0]) target.style.width = `${width}px`;
          if (delta[1]) target.style.height = `${height}px`;
        }}
        onResizeEnd={({ target }) => {
          console.log("onResizeEnd", target);
        }}
        scalable={true}
        throttleScale={0}
        onScale={({ target, transform }) => {
          target.style.transform = transform;
        }}
        onRotate={({ target, transform }) => {
          target.style.transform = transform;
        }}
        rotatable={true}
        throttleRotate={0}
        pinchable={true}
      />
    </div>
  );
};

export default Cards;
