import React from "react";
import "./Event.css";

function Event(props) {
  const customStyle = {
    backgroundImage: `linear-gradient(to ${props.ori}, rgba(167,207,223,0) 0%,rgb(39, 39, 39) 70%), url(${props.img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const classes = `event-card ${props.ori}`;

  if (props.main) {
    return (
      <div className={classes} style={customStyle}>
        <h3 className="title">{props.name}</h3>
        <p className="desc">{props.desc}</p>
      </div>
    );
  } else {
    return (
      <div className={"flex-card"}>
        <img className={"grid-thumbnail"} src={props.img} alt="Card Image" />
        <h3 className="title">{props.name}</h3>
        <p className="desc">{props.desc}</p>
      </div>
    );
  }
}

export default Event;
