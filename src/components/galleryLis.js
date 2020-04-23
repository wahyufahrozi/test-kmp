import React from "react";

import Gallery from "./gallery";
import DataDummy from "../helpers/data-dummy";
import "./gallerlist.css";
const GallerList = (props) => {
  return (
    <div>
      <input className="input-data" />
      <div className="gallery-list">
        {DataDummy.map((data) => (
          <Gallery key={data.FID} data={data} />
        ))}
      </div>
    </div>
  );
};

export default GallerList;
