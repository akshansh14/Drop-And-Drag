import React, { useRef, useState } from 'react';
import Moveable from 'react-moveable';





const Cards = () => {


    
      const targetRef = useRef();
    
      

      return (
        <div className="relative w-full h-screen bg-gray-200 flex items-center justify-center">
          <div
            ref={targetRef}
            className="target bg-blue-400 text-white p-4 shadow-lg rounded-md cursor-pointer"
            style={{
              width: '160px',
              height: '96px',
            }}
          >
            Drag, Resize, Scale, Rotate Me
          </div>
    
          <Moveable
            target={targetRef.current}
            container={null}
            origin={true}
    
            /* Resize event edges */
            edge={false}
    
            /* Draggable */
            draggable={true}
            throttleDrag={0}
            onDragStart={({ target, clientX, clientY }) => {
              console.log("onDragStart", target);
            }}
            onDrag={({
              target,
              beforeDelta, beforeDist,
              left, top,
              right, bottom,
              delta, dist,
              transform,
              clientX, clientY,
            }) => {
              console.log("onDrag left, top", left, top);
              console.log("onDrag translate", dist);
              target.style.transform = transform;
            }}
            onDragEnd={({ target, isDrag, clientX, clientY }) => {
              console.log("onDragEnd", target, isDrag);
            }}
    
            /* Keep ratio during resize or scale */
            keepRatio={true}
    
            /* Resizable */
            resizable={true}
            throttleResize={0}
            onResizeStart={({ target, clientX, clientY }) => {
              console.log("onResizeStart", target);
            }}
            onResize={({
              target, width, height,
              dist, delta, direction,
              clientX, clientY,
            }) => {
              console.log("onResize", target);
              if (delta[0]) target.style.width = `${width}px`;
              if (delta[1]) target.style.height = `${height}px`;
            }}
            onResizeEnd={({ target, isDrag, clientX, clientY }) => {
              console.log("onResizeEnd", target, isDrag);
            }}
    
            /* Scalable */
            scalable={true}
            throttleScale={0}
            onScaleStart={({ target, clientX, clientY }) => {
              console.log("onScaleStart", target);
            }}
            onScale={({
              target, scale, dist, delta, transform,
              clientX, clientY,
            }) => {
              console.log("onScale scale", scale);
              target.style.transform = transform;
            }}
            onScaleEnd={({ target, isDrag, clientX, clientY }) => {
              console.log("onScaleEnd", target, isDrag);
            }}
    
            /* Rotatable */
            rotatable={true}
            throttleRotate={0}
            onRotateStart={({ target, clientX, clientY }) => {
              console.log("onRotateStart", target);
            }}
            onRotate={({
              target,
              delta, dist,
              transform,
              clientX, clientY,
            }) => {
              console.log("onRotate", dist);
              target.style.transform = transform;
            }}
            onRotateEnd={({ target, isDrag, clientX, clientY }) => {
              console.log("onRotateEnd", target, isDrag);
            }}
    
            /* Pinchable */
            pinchable={true}
            onPinchStart={({ target, clientX, clientY, datas }) => {
              console.log("onPinchStart");
            }}
            onPinch={({ target, clientX, clientY, datas }) => {
              console.log("onPinch");
            }}
            onPinchEnd={({ isDrag, target, clientX, clientY, datas }) => {
              console.log("onPinchEnd");
            }}
          />
        </div>
      );
}

export default Cards












