import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center bottomImg">
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default FaceRecognition;
