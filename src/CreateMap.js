import React from "react";

import MapElements from "./MapElements";

const CreateMap = React.memo(({ handleClick, mapData, svgData, selection }) => (
  <div className="game-map-container">
    <svg className="game-map" viewBox={svgData.viewBox} label={svgData.label}>
      <defs>
        <filter id="shadow">
          <feDropShadow dx="0.5" dy="1.4" stdDeviation=".5" />
        </filter>
      </defs>
      <MapElements
        svgData={svgData}
        mapData={mapData}
        handleClick={handleClick}
        selection={selection}
      />
    </svg>
  </div>
));

export default CreateMap;
