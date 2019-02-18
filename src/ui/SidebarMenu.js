import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { switchIsSidebar, switchIsParamModal } from "../actions/switchers";

import { Sidebar, Icon, Menu } from "semantic-ui-react";

class SidebarMenu extends Component {
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
          Parameters
        </Menu.Item>
        <Menu.Item
          as="a"
          href="https://github.com/Pauliusz15/energy-meter"
          target="_blank"
          style={{ position: "absolute", bottom: 0 }}
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
      switchIsParamModal: switchIsParamModal
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(SidebarMenu);
