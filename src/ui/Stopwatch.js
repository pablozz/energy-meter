import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'semantic-ui-react';

import { addResultRow } from '../actions/add-result-row';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Time when interval when stopwatch has started
      startTime: 0,
      time: 0,
      // if buttons are disabled
      startDisabled: false,
      lapDisabled: true,
      lapNum: 0,
      previousTime: null
    };

    this.onStart = this.onStart.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onImp = this.onImp.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  onStart() {
    this.setState({
      startTime: new Date(),
      startDisabled: true,
      lapDisabled: false
    });
    this.timerID = setInterval(() => this.tick(), 100);
    window.navigator.vibrate(50);
  }

  onReset() {
    this.setState({
      time: 0,
      startDisabled: false,
      lapDisabled: true,
      previousTime: null,
      lapNum: 0
    });
    this.props.addResultRow([]);
    clearInterval(this.timerID);
  }

  onImp() {
    this.setState({ lapNum: this.state.lapNum + 1 });

    const newTime = new Date();

    let prevTime;
    this.state.previousTime
      ? (prevTime = this.state.previousTime)
      : (prevTime = this.state.startTime);

    const period = newTime - prevTime;
    const row = {
      nr: this.state.lapNum,
      period: period,
      kw: getKw(this.props.coeff, this.props.imp, this.props.impKwh, period)
    };
    //console.log(this.props.parameters.coeff);
    let rows = this.props.resultRows.slice();
    rows.unshift(row);

    this.props.addResultRow(rows);
    this.setState({ previousTime: newTime });
    window.navigator.vibrate(50);
  }

  // Updates time by subtracting starting time of interval from current time
  tick() {
    this.setState({
      time: new Date() - this.state.startTime
    });
  }

  render() {
    return (
      <div className="align-center">
        <TimeText time={this.state.time} />
        <Buttons
          onStart={this.onStart}
          onImp={this.onImp}
          onReset={this.onReset}
          startDisabled={this.state.startDisabled}
        />
      </div>
    );
  }
}

const getKw = (coeff, imp, impKwh, period) => {
  return ((coeff * imp * 3600) / ((impKwh * period) / 1000)).toFixed(3);
};

const TimeText = props => {
  const millis = parseInt((props.time % 1000) / 100);
  const secs = parseInt(props.time / 1000) % 60;
  const mins = parseInt(props.time / 60000);

  return (
    <div className="time-text-container align-center">
      <p>
        {mins} : {('0' + secs).slice(-2)} : {millis}
      </p>
    </div>
  );
};

const Buttons = props => {
  if (!props.startDisabled) {
    return (
      <div className="btn-container">
        <Button.Group size={'big'} fluid>
          <Button
            focus={false}
            className="stopwatch-button"
            onClick={props.onReset}
            content="Reset"
          />
          <Button
            className="stopwatch-button"
            onClick={props.onStart}
            content="Start"
          />
        </Button.Group>
      </div>
    );
  } else {
    return (
      <div className="btn-container">
        <Button.Group size={'big'} fluid>
          <Button
            className="stopwatch-button"
            onClick={props.onReset}
            content="Reset"
          />
          <Button
            className="stopwatch-button"
            onClick={props.onImp}
            content="Imp"
          />
        </Button.Group>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    resultRows: state.resultRows,
    coeff: state.coeff,
    imp: state.imp,
    impKwh: state.impKwh
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addResultRow: addResultRow
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Stopwatch);
