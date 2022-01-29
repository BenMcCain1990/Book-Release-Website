import React from "react";
import map from "../Images/map.png";

const Explore = () => {
  return (
    <div className="explorepage">
      <div className="exploretext">
        <h1>Welcome to Book Title</h1>
      </div>
      <div>
        <img className="mapimage" src={map} alt="woodland map" />
      </div>
    </div>
  );
};

export default Explore;
