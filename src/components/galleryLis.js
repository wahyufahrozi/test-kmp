import React, { useState } from "react";

import Gallery from "./gallery";
import DataDummy from "../helpers/data-dummy";
import "./gallerlist.css";
const GallerList = (props) => {
  const [valueCategory, setValueCategory] = useState("");

  const dataFilter = DataDummy.filter((v, i) => {
    return v.attributes.color === valueCategory;
  });
  return (
    <div>
      <label for="color" className="color">
        Choose a color:
      </label>
      <br />
      <select onChange={(e) => setValueCategory(e.target.value)} id="color">
        <option value="">No Option</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
        <option value="grey">Grey</option>
        <option value="purple">Purple</option>
        <option value="pink">Pink</option>
      </select>

      <div className="gallery-list">
        {dataFilter.length === 0
          ? DataDummy.map((data) => <Gallery key={data.FID} data={data} />)
          : dataFilter.map((data) => <Gallery key={data.FID} data={data} />)}
      </div>
    </div>
  );
};

export default GallerList;
