import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Input, Label } from "semantic-ui-react";
import { changeParameter } from "../actions/change-parameter";

class Parameters extends Component {
  constructor(props) {
    super(props);

    this.changeVal = this.changeVal.bind(this);
  }

  changeVal(e) {
    const type = e.target.id;
    const param = e.target.value;
    this.props.changeParameter(type, param);
  }

  render() {
    return (
      <div className="align-center">
        <div className="parameters">
          <Parameter
            id="coeffInput"
            onChange={this.changeVal}
            value={this.props.coeff}
            text="Coefficient"
          />
          <Parameter
            id="impInput"
            onChange={this.changeVal}
            value={this.props.imp}
            text="Impulse"
          />
          <Parameter
            id="impKwhInput"
            onChange={this.changeVal}
            value={this.props.impKwh}
            text="Imp/kWh"
          />
        </div>
      </div>
    );
  }
}

const Parameter = props => {
  return (
    <div className="parameter">
      <div>
        <Label pointing="below">{props.text}</Label>
      </div>
      <div>
        <Input
          id={props.id}
          type="number"
          fluid
          onFocus={handleFocus}
          size="small"
          onKeyPress={checkIfNumbers}
          onChange={props.onChange}
          value={props.value}
          placeholder={"Number"}
        />
      </div>
    </div>
  );
};

const handleFocus = event => event.target.select();

const checkIfNumbers = e => {
  let key;
  if (e.type === "paste") {
    key = e.clipboardData.getData("text/plain");
  } else {
    key = e.keyCode || e.which;
    key = String.fromCharCode(key);
  }

  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    e.returnValue = false;
    if (e.preventDefault) e.preventDefault();
  }
};

const mapStateToProps = state => {
  return {
    coeff: state.coeff,
    imp: state.imp,
    impKwh: state.impKwh
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeParameter: changeParameter
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Parameters);
