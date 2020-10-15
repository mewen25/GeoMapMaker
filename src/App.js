import React, { useState } from "react";
import "./styles.css";
import data from "./svgData.js";

import { ReactComponent as Map } from "./bit_better_europe.svg";
// import MapElements from "./MapElements";
import CreateMap from "./CreateMap";

export default function App() {
  const [selection, setSelection] = useState([]);
  const handleClick = (e) => {
    const clicked = e.currentTarget?.id;
    e.persist();
    console.log(clicked);
    if (!selection.includes(clicked))
      setSelection((prev) => [...prev, clicked]);
  };

  const handleComplete = () => {
    const newMap = data.elements.filter((e) =>
      selection.some((s) => s === e.id)
    );
    console.log(selection, data, newMap);
  };

  return (
    <div className="App">
      <button onClick={handleComplete}>Complete</button>
      <CreateMap
        selection={selection}
        svgData={data}
        handleClick={handleClick}
      />
    </div>
  );
}
