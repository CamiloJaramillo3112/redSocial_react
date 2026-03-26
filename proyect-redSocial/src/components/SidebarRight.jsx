import React from "react";
import EventCard from "./EventCard";
import FriendRequest from "./FriendRequest";
import { eventsData } from "../data/eventsData";
import { friendsData } from "../data/friendsData";

function SidebarRight() {
  return (
    <aside className="w3-col m2">
      {eventsData.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}

      {friendsData.map((friend, index) => (
        <FriendRequest key={index} {...friend} />
      ))}

      <div className="w3-card w3-round w3-white w3-padding-16 w3-center w3-margin">
        <p>ADS</p>
      </div>

      <div className="w3-card w3-round w3-white w3-padding-32 w3-center w3-margin">
        <p aria-hidden="true">
          <i className="fa fa-bug w3-xxlarge" title="Bug icon"></i>
        </p>
      </div>
    </aside>
  );
}

export default SidebarRight;
