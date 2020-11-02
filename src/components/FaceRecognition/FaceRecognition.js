import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  let boundingBoxes = box.map((item) => (
    <div
      className="bounding-box"
      style={{
        top: item.topRow,
        right: item.rightCol,
        bottom: item.bottomRow,
        left: item.leftCol,
      }}
    ></div>
  ));

  return (
    <div className="center bottomImg">
      <div className="absolute mt2">
        <img id="input-image" src={imageUrl} alt="" />
        <div>{boundingBoxes}</div>
      </div>
    </div>
  );
};

export default FaceRecognition;
