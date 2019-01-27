import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Input, Label } from 'semantic-ui-react';
import { changeParameter } from '../actions/change-parameter';

class Parameters extends Component {
  constructor(props) {
    super(props);
    //this.state = { coeffVal: 1, impVal: 1, impKwhVal: 1000 };

    this.changeVal = this.changeVal.bind(this);
  }

  changeVal(e) {
    /*switch (e.target.id) {
      case "coeffInput":
        this.setState({ coeffVal: e.target.value });
        break;
      case "impInput":
        this.setState({ impVal: e.target.value });
        break;
      case "impKwhInput":
        this.setState({ impKwhVal: e.target.value });
        break;
      default:
        break;
    }*/
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
          fluid
          id={props.id}
          size="small"
          onChange={props.onChange}
          value={props.value}
          placeholder={'Number'}
        />
      </div>
    </div>
  );
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
