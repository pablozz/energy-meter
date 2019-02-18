import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { switchIsSidebar, switchIsInfoModal } from "../actions/switchers";

import { Menu, Icon } from "semantic-ui-react";

class Navbar extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item
          name="sidebar"
          onClick={() => this.props.switchIsSidebar(true)}
        >
          <Icon name="bars" />
        </Menu.Item>
        <Menu.Item
          name="sidebar"
          position="right"
          onClick={() => this.props.switchIsInfoModal(true)}
        >
          <Icon name="info" />
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      switchIsSidebar: switchIsSidebar,
      switchIsInfoModal: switchIsInfoModal
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Navbar);
