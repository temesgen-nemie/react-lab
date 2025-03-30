import React from "react";
import PropTypes from "prop-types";
import img from "./assets/img.jpg";

function Card({ info }) {
  return (
    <div className="card">
      <img className="card-image" src={img} alt="my-picture" />
      <h1>Name: {info.name}</h1>
      <p>Age: {info.age}</p>
      <p>Student: {info.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Card.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Card;
