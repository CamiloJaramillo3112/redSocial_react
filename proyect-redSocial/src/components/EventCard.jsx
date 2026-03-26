import React from "react";

function EventCard({ title, time, image }) {
  return (
    <div className="w3-card w3-round w3-white w3-center w3-margin">
      <div className="w3-container">
        <p>Upcoming Events:</p>
        <img src={image} alt={title} style={{ width: "100%" }} loading="lazy" />
        <p><strong>{title}</strong></p>
        <p>{time}</p>
        <p>
          <button className="w3-button w3-block w3-theme-l4">Info</button>
        </p>
      </div>
    </div>
  );
}

export default EventCard;
