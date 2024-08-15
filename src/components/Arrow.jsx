import React from "react";
import Xarrow from "react-xarrows"; 

const Arrow = ({ startId, endId }) => {
  return <Xarrow start={`card-${startId}`} end={`card-${endId}`} />;
};

export default Arrow;
