import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  console.log(box);
  return (
    <div className="center bottomImg">
      <div className="absolute mt2">
        <img id="input-image" src={imageUrl} alt="" />

        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        >
          <div>{box.age}</div>
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
