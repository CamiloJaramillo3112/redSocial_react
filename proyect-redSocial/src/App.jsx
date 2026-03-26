import React from "react";
import Navbar from "./components/Navbar";
import SidebarLeft from "./components/SidebarLeft";
import Feed from "./components/Feed";
import SidebarRight from "./components/SidebarRight";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w3-theme-l5">
      <Navbar />
      <div
        className="w3-container w3-content"
        style={{ maxWidth: "1400px", marginTop: "80px" }}
      >
        <div className="w3-row">
          <SidebarLeft />
          <Feed />
          <SidebarRight />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
