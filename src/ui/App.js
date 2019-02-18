import React, { Component } from "react";
import "../App.css";

import Stopwatch from "./Stopwatch";
import LapTable from "./LapTable";
import Parameters from "./Parameters";
import Navbar from "./Navbar";
import SidebarMenu from "./SidebarMenu";
import ParamModal from "./ParamModal";
import InfoModal from "./InfoModal";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SidebarMenu />
        <Parameters />
        <Stopwatch />
        <LapTable />
        <ParamModal />
        <InfoModal />
      </div>
    );
  }
}

export default App;
