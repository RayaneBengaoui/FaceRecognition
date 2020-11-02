import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  let renderedOutput = box.map((item) => (
    <div
      className="bounding-box"
      style={{
        top: item.topRow,
        right: item.rightCol,
        bottom: item.bottomRow,
        left: item.leftCol,
      }}
    >
      ) return (
      <div className="center bottomImg">
        <div className="absolute mt2">
          <img id="input-image" src={imageUrl} alt="" />
          return (<div>{renderedOutput}</div>
          );
        </div>
      </div>
    </div>
  ));
};

export default FaceRecognition;
