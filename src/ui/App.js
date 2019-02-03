import React, { Component } from "react";
import "../App.css";

import Stopwatch from "./Stopwatch";
import LapTable from "./LapTable";
import Parameters from "./Parameters";

class App extends Component {
  componentDidMount() {
    // Connect to home server so I know number of connections
    try {
      fetch("http://77.79.16.147/logs");
    } catch (err) {
      console.log(err);
    }
  }

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
