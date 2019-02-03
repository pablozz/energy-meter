import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Input, Label } from "semantic-ui-react";
import { changeParameter } from "../actions/change-parameter";

class Parameters extends Component {
  constructor(props) {
    super(props);

    this.changeVal = this.changeVal.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  changeVal(e) {
    const type = e.target.id;
    const param = e.target.value;
    this.props.changeParameter(type, param);
  }

  handleFocus = event => event.target.select();

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
          fluid
          onFocus={handleFocus}
          id={props.id}
          size="small"
          onChange={props.onChange}
          value={props.value}
          placeholder={"Number"}
        />
      </div>
    </div>
  );
};

const handleFocus = event => event.target.select();

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
