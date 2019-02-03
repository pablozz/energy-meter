import React, { Component } from "react";
import "../App.css";

import Stopwatch from "./Stopwatch";
import LapTable from "./LapTable";
import Parameters from "./Parameters";

class App extends Component {
  render() {
    return (
      <div>
        <Parameters />
        <Stopwatch />
        <LapTable />
      </div>
    );
  }
}

export default App;
