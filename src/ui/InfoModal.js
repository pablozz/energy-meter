import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { switchIsInfoModal } from "../actions/switchers";

import { Modal, Header } from "semantic-ui-react";

class InfoModal extends Component {
  render() {
    return (
      <Modal
        open={this.props.isInfoModal}
        onClose={() => this.props.switchIsInfoModal(false)}
        closeIcon
      >
        <Modal.Header>Usage</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>EN</Header>
            <p>
              You can check how your electricity meter is operating by capturing
              LED flashes or rotation of the disk.
            </p>
            <p>
              Enter voltage transformer coefficient, number of estimated
              impulses (LED or disk) and constant of electricity meter.
            </p>
            <p>To get final results press START/IMP.</p>
            <p>You can also convert results to kW or amperes.</p>

            <Header>LT</Header>
            <p>
              Jūs galite patikrinti el.skaitiklio veikimą fiksuojant LED
              mirksnius ar disko apsisukimus.
            </p>
            <p>
              Įveskite transformatorių koeficientą, fiksuojamų impulsų skaičių
              ir skaitiklio konstantą.
            </p>
            <p> Spauskite START/IMP rezultatams gauti.</p>
            <p> Rezultatą galima atvaizduoti kW arba amperais.</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return { isInfoModal: state.isInfoModal };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ switchIsInfoModal: switchIsInfoModal }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(InfoModal);
