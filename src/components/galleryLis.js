import React from "react";

import Gallery from "./gallery";
import DataDummy from "../helpers/data-dummy";
import "./gallerlist.css";
const GallerList = (props) => {
  return (
    <div>
      <label for="color">Choose a color:</label>
      <br />
      <select id="color">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
        <option value="gray">Gray</option>
        <option value="purple">Purple</option>
        <option value="pink">Pink</option>
      </select>
      <div className="gallery-list">
        {DataDummy.map((data) => (
          <Gallery key={data.FID} data={data} />
        ))}
      </div>
    </div>
  );
};

export default GallerList;
