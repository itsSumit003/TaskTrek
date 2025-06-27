import React from 'react';
import './DropArea.css';

const DropArea = ({ onDrop }) => {
  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (e) => {
    e.preventDefault();
    onDrop();
  };

  return <div className="drop_area" onDragOver={handleDragOver} onDrop={handleDrop}></div>;
};

export default DropArea;
