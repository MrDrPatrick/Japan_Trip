import React from "react";
import { Link } from "react-router-dom";
import "./ButtonBar.css";

function ButtonBar(props) {
  return (
    <div className="barContainer">
      <div>
        {props.id - 1 !== 5 && (
          <Link className="button prev" to={`/day/${props.id - 1}`}>
            Previous
          </Link>
        )}
      </div>
      <div>
        <Link className="button back" to="/">
          Calendar
        </Link>
      </div>
      <div>
        {props.id + 1 !== 28 && (
          <Link className="button next" to={`/day/${props.id + 1}`}>
            Next
          </Link>
        )}
      </div>
    </div>
  );
}

export default ButtonBar;
