import React from "react";

function MenuItem({ image, name, price,description }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {price}dhs </p>
      <p>{description} </p>
    </div>
  );
}

export default MenuItem