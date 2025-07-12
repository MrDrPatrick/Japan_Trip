import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import eventData from "../data/events.json";
import Event from "./Event";
import ButtonBar from "./ButtonBar";
import "./EventDay.css";

function EventDay() {
  const params = useParams();
  const [day, setDay] = React.useState(() => {
    return eventData.eventDays.find((d) => d.dayID === parseInt(params.dayid));
  });
  // const day = eventData.eventDays.find((d) => d.dayID === parseInt(params.dayid));

  React.useEffect(() => {
    console.log("Params.dayid is:", params.dayid);

    const newDay = eventData.eventDays.find((d) => d.dayID === parseInt(params.dayid));
    setDay(newDay);
  }, [params.dayid]);

  if (!day) {
    return <div>Loading...</div>;
  }

  function makeEvent(e) {
    if (e.main) {
      return <Event key={e.id} id={e.id} name={e.name} desc={e.desc} img={e.img} ori={e.ori} main={e.main} />;
    }
  }
  function makeEventG(e) {
    if (!e.main) {
      return <Event key={e.id} id={e.id} name={e.name} desc={e.desc} img={e.img} ori={e.ori} main={e.main} />;
    }
  }

  if (day.hasOptions) {
    return (
      <div>
        <div className="topper">
          <h1 className="page-title">{day.title}</h1>
          <h2 className="page-subtitle">{day.subtitle}</h2>
          <ButtonBar id={day.dayID} />
        </div>

        <div className="event-card-container">
          <h3>Main Events</h3>
          {day.events.map(makeEvent)}
        </div>

        {day.hasLive && (
          <div className="special-livestream">
            <h3>LIVE STREAM</h3>
            <iframe className="stream" src="https://www.youtube.com/embed/tujkoXI8rWM?si=tPYBAptLQjkBxf3z" title="YouTube video player" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        )}

        <div className="optional-container">
          <h3 className="grid-title">Optional Events</h3>
          <div className="grid-container">{day.events.map(makeEventG)}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="topper">
          <h1 className="page-title">{day.title}</h1>
          <h2 className="page-subtitle">{day.subtitle}</h2>
          <ButtonBar id={day.dayID} />
        </div>

        <div className="event-card-container">
          <h3>Events</h3>
          {day.events.map(makeEvent)}
        </div>
      </div>
    );
  }
}

export default EventDay;
