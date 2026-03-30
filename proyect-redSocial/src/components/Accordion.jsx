import React, { useState } from "react";

function Accordion() {

  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  return (

    <div className="w3-card w3-round">

      <div className="w3-white">

        <button
          onClick={() => toggle("groups")}
          className="w3-button w3-block w3-theme-l1 w3-left-align"
        >
          My Groups
        </button>

        {open === "groups" && (
          <div className="w3-container">
            <p>Some text..</p>
          </div>
        )}

        <button
          onClick={() => toggle("events")}
          className="w3-button w3-block w3-theme-l1 w3-left-align"
        >
          My Events
        </button>

        {open === "events" && (
          <div className="w3-container">
            <p>Some other text..</p>
          </div>
        )}

        <button
          onClick={() => toggle("photos")}
          className="w3-button w3-block w3-theme-l1 w3-left-align"
        >
          My Photos
        </button>

        {open === "photos" && (

          <div className="w3-row-padding w3-container">

            <br />

            <div className="w3-half">
              <img src="https://www.w3schools.com/w3images/lights.jpg" style={{width:"100%"}} />
            </div>

            <div className="w3-half">
              <img src="https://www.w3schools.com/w3images/nature.jpg" style={{width:"100%"}} />
            </div>

          </div>

        )}

      </div>

    </div>

  );
}

export default Accordion;