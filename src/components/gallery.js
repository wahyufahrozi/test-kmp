import React from "react";
import "./gallery.css";
export default function Gallery(props) {
  return (
    <div
      className="square"
      style={{ backgroundColor: props.data.attributes.color }}
    >
      {props.data.attributes.name}
    </div>
  );
}
