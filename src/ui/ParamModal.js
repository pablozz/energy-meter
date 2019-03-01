import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { switchIsParamModal } from "../actions/switchers";
import { changeParameter } from "../actions/change-parameter";

import { Button, Modal, Input, Label } from "semantic-ui-react";

class ParamModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      voltage: this.props.voltage,
      cosf: this.props.cosf
    };

    this.changeVal = this.changeVal.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onDone = this.onDone.bind(this);
  }

  componentDidMount() {
    const lVoltage = localStorage.getItem("voltageInput", this.props.voltage);
    const lCosf = localStorage.getItem("cosfInput", this.props.cosf);

    if (lVoltage) this.props.changeParameter("voltageInput", lVoltage);
    if (lCosf) this.props.changeParameter("cosfInput", lCosf);
  }

  changeVal(e) {
    const type = e.target.id;
    const param = e.target.value;

    this.props.changeParameter(type, param);
  }

  onCancel() {
    this.props.changeParameter("voltageInput", this.state.voltage);
    this.props.changeParameter("cosfInput", this.state.cosf);
    this.props.switchIsParamModal(false);
  }

  onDone() {
    localStorage.setItem("voltageInput", this.props.voltage);
    localStorage.setItem("cosfInput", this.props.cosf);
    this.props.switchIsParamModal(false);
  }

  render() {
    return (
      <Modal
        size={"small"}
        open={this.props.isParamModal}
        onClose={() => {
          this.props.switchIsParamModal(false);
        }}
        closeOnDimmerClick={false}
      >
        <Modal.Header>Select parameters</Modal.Header>
        <Modal.Content>
          <Parameter
            id="voltageInput"
            label="Voltage (V)"
            placeholder="Number"
            value={this.props.voltage}
            onChange={this.changeVal}
          />
          <br />
          <br />
          <Parameter
            id="cosfInput"
            label="Power factor (cos(f))"
            placeholder="Number"
            value={this.props.cosf}
            onChange={this.changeVal}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button basic onClick={this.onCancel}>
            Cancel
          </Button>
          <Button
            icon="checkmark"
            labelPosition="right"
            content="Done"
            onClick={this.onDone}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

const Parameter = props => {
  return (
    <Input
      id={props.id}
      size="small"
      labelPosition="left"
      type="text"
      placeholder={props.placeholder}
    >
      <Label basic>{props.label}</Label>
      <input
        type="number"
        value={props.value}
        onChange={props.onChange}
        onKeyPress={checkIfNumbers}
        onFocus={handleFocus}
      />
    </Input>
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
    isParamModal: state.isParamModal,
    voltage: state.voltage,
    cosf: state.cosf
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      switchIsParamModal: switchIsParamModal,
      changeParameter: changeParameter
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(ParamModal);
