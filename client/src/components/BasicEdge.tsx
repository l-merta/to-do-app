import React from 'react';
import { EdgeProps } from 'reactflow';

const BasicEdge: React.FC<EdgeProps> = ({ id, sourceX, sourceY, targetX, targetY, style }) => {
  return (
    <path
      id={id}
      d={`M${sourceX},${sourceY}C${(sourceX + targetX) / 2},${sourceY} ${(sourceX + targetX) / 2},${targetY} ${targetX},${targetY}`}
      style={style} // Use the passed in style
      className="basic-edge" // Add custom class for more styling control
    />
  );
};

export default BasicEdge;
