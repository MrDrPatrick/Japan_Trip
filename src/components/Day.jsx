import React from "react";
import { Link } from "react-router-dom";
import "./Day.css";

function Day(props) {
  const customStyle = {
    backgroundImage: `url(${props.img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Link className="date" to={`/day/${props.id}`} style={customStyle}>
      <div>
        <p className="cnumber">{props.date}</p>
        <p className="c-text">{props.title}</p>
        <div className="overlay"></div>
      </div>
    </Link>
  );
}

export default Day;
