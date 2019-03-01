import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Input, Label, Grid } from "semantic-ui-react";
import { changeParameter } from "../actions/change-parameter";

class Parameters extends Component {
  constructor(props) {
    super(props);

    this.changeVal = this.changeVal.bind(this);
  }

  componentDidMount() {
    const lCoeff = localStorage.getItem("coeffInput", this.props.voltage);
    const lImp = localStorage.getItem("impInput", this.props.imp);
    const lImpKwh = localStorage.getItem("impKwhInput", this.props.impKwh);

    if (lCoeff) this.props.changeParameter("coeffInput", lCoeff);
    if (lImp) this.props.changeParameter("impInput", lImp);
    if (lImpKwh) this.props.changeParameter("impKwhInput", lImpKwh);
  }

  changeVal(e) {
    const type = e.target.id;
    const param = e.target.value;
    this.props.changeParameter(type, param);
    localStorage.setItem(type, param);
  }

  render() {
    return (
      <div className="parameters">
        <Grid className="align-center" columns="equal">
          <Grid.Column>
            <Parameter
              id="coeffInput"
              onChange={this.changeVal}
              value={this.props.coeff}
              text="Coefficient"
            />
          </Grid.Column>
          <Grid.Column>
            <Parameter
              id="impInput"
              onChange={this.changeVal}
              value={this.props.imp}
              text="Impulse"
            />
          </Grid.Column>
          <Grid.Column>
            <Parameter
              id="impKwhInput"
              onChange={this.changeVal}
              value={this.props.impKwh}
              text="Imp/kWh"
            />
          </Grid.Column>
        </Grid>
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
