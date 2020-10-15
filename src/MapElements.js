import React, { useState } from "react";

const MapElements = (props) => {
  const groups = props.svgData.elements.map((obj, index) => {
    const elements = obj.render.map((e, index) => {
      let element = <div key={index}></div>;
      if (e.type === "path") element = <path key={index} {...e.attributes} />;
      return element;
    });
    return (
      <g
        className={`place${
          props.selection.includes(obj.id) ? " selected" : ""
        }`}
        id={obj.id}
        onClick={props.handleClick}
      >
        {elements}
      </g>
    );
  });
  return <>{groups}</>;
};

export default MapElements;
