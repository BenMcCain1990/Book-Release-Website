import React from "react";
import map from "../Images/map.png";
import Victor from "../Images/Victor.png";
import Viola from "../Images/Viola.png";
import Ernest from "../Images/Ernest.png";
import Cynthia from "../Images/Cynthia.png";
import Cabin from "../Images/cabin.png";
import Mansion from "../Images/mansion.png";
import Tree from "../Images/tree.png";
import Shack from "../Images/shack.png";

const Explore = () => {
  return (
    <div className="explorepage">
      <div className="exploreheader">
        <h1>WELCOME TO LONG BOOK TITLE</h1>
      </div>
      <hr className="headerHR" />
      <div className="boroughselection">
        <div className="boroughHR">
          <hr />
        </div>
        <h3>THIS IS THE H3</h3>
        <div className="boroughHR">
          <hr />
        </div>
      </div>
      <div className="boroughs">
        <div className="borough">
          <h1>Title</h1>
          <img src={Viola} alt="Viola" />
          <h2>Name</h2>
          <hr />
          <h3>Title</h3>
        </div>
        <div className="borough">
          <h1>Title</h1>
          <img src={Victor} alt="Victor" />
          <h2>Name</h2>
          <hr />
          <h3>Title</h3>
        </div>
        <div className="borough">
          <h1>Title</h1>
          <img src={Ernest} alt="Ernest" />
          <h2>Name</h2>
          <hr />
          <h3>Title</h3>
        </div>
        <div className="borough">
          <h1>Title</h1>
          <img src={Cynthia} alt="Cynthia" />
          <h2>Name</h2>
          <hr />
          <h3>Title</h3>
        </div>
      </div>
      <img className="mapimage" src={map} alt="woodland map" />
      <div className="locations">
        <h1>Locations</h1>
        <hr className="locationHR" />
        <div className="locationcards">
          <div className="location">
            <img src={Cabin} alt="cabin" />
            <hr />
            <h2>Cabin</h2>
          </div>
          <div className="location">
            <img src={Tree} alt="Tree" />
            <hr />
            <h2>Tree</h2>
          </div>
          <div className="location">
            <img src={Mansion} alt="Mansion" />
            <hr />
            <h2>Mansion</h2>
          </div>
          <div className="location">
            <img src={Shack} alt="Shack" />
            <hr />
            <h2>Shack</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
