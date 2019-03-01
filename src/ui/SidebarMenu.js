import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { switchIsSidebar, switchIsParamModal } from "../actions/switchers";
import { changeParameter } from "../actions/change-parameter";

import { Sidebar, Icon, Menu } from "semantic-ui-react";

class SidebarMenu extends Component {
  onDefaultParamsClick() {
    localStorage.clear();
    this.props.changeParameter("coeffInput", 1);
    this.props.changeParameter("impInput", 1);
    this.props.changeParameter("impKwhInput", 1000);
    this.props.changeParameter("voltageInput", 230);
    this.props.changeParameter("cosfInput", 0.98);

    this.props.switchIsSidebar(false);
  }

  render() {
    return (
      <Sidebar
        as={Menu}
        animation="overlay"
        onHide={() => this.props.switchIsSidebar(false)}
        visible={this.props.isSidebar}
        vertical
        icon="labeled"
      >
        <Menu.Item as="a" onClick={() => this.props.switchIsParamModal(true)}>
          <Icon name="setting" />
          Additional parameters
        </Menu.Item>
        <Menu.Item as="a" onClick={() => this.onDefaultParamsClick()}>
          <Icon name="erase" />
          Set default parameters
        </Menu.Item>
        <Menu.Item
          as="a"
          href="https://github.com/Pauliusz15/energy-meter"
          target="_blank"
          style={{ position: "absolute", bottom: 0, width: "100%" }}
        >
          <p>
            GitHub <Icon name="github" />
          </p>
        </Menu.Item>
      </Sidebar>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSidebar: state.isSidebar
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      switchIsSidebar: switchIsSidebar,
      switchIsParamModal: switchIsParamModal,
      changeParameter: changeParameter
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(SidebarMenu);
