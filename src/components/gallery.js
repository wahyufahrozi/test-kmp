import React from "react";
import "./gallery.css";
export default function Gallery(props) {
  return <div className="square">{props.data.attributes.name}</div>;
}
