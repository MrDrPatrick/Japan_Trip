import React from "react";
import { Link } from "react-router-dom";
import Day from "./Day";
import tripData from "../data/trip.json";
import "./Calendar.css";

function Calendar() {
  function makeCells(cell) {
    if (cell.real) {
      return <Day key={cell.id} id={cell.id} date={cell.date} title={cell.label} on={cell.real} img={cell.img} />;
    } else {
      return (
        <div className="date empty" key={cell.id}>
          {cell.date}
        </div>
      );
    }
  }

  return (
    <div className="calendar-wrapper">
      <div className="container">
        <div className="title">
          <h1>November 2025</h1>
        </div>
        <div className="day sunday">Sunday</div>
        <div className="day">Monday</div>
        <div className="day">Tuesday</div>
        <div className="day">Wednesday</div>
        <div className="day">Thursday</div>
        <div className="day">Friday</div>
        <div className="day saturday">Saturday</div>
        {tripData.days.map(makeCells)}
      </div>
    </div>
  );
}

export default Calendar;
