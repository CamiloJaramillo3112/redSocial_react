import React from "react";

function FriendRequest({ name, avatar }) {
  return (
    <div className="w3-card w3-round w3-white w3-center w3-margin">
      <div className="w3-container">
        <p>Friend Request</p>
        <img src={avatar} alt={`Avatar de ${name}`} style={{ width: "50%" }} className="w3-circle" loading="lazy" />
        <p>{name}</p>
        <div className="w3-row w3-opacity">
          <div className="w3-half">
            <button className="w3-button w3-block w3-green w3-section" title="Accept">
              <i className="fa fa-check"></i>
            </button>
          </div>
          <div className="w3-half">
            <button className="w3-button w3-block w3-red w3-section" title="Decline">
              <i className="fa fa-remove"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendRequest;
