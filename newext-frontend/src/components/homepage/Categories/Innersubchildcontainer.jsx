import React from "react";

function Innersubchildcontainer(props) {
  return (
    <div className="innersubchildcontainer">
      <div className={`innersubchildcontainerimg${props.subchildIndex} imgsubchildcontainersubimg${props.img1Index} imgsubchildcontainersubimg${props.img2Index}`}></div>
      <div className="innersubchildcontainercontent">
        <h2 className="innersubchildcontainerheadline">
          {props.subchildHeadline}
        </h2>
        <p className="innersubchildcontainersummary">
          {props.subchildSummary}
        </p>
        <p className="innersubchildcontainerstatus">{props.subchildStatus}</p>
      </div>
    </div>
  );
}

export default Innersubchildcontainer;
