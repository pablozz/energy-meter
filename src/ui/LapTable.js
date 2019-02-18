import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Table, Button } from "semantic-ui-react";

import { switchIsKw } from "../actions/switchers";

class LapTable extends Component {
  createRows() {
    return this.props.resultRows.map(item => {
      return (item.key = (
        <TableRow
          fontWeight={
            this.props.resultRows.length - 1 === item.nr ? "bold" : ""
          }
          key={item.nr}
          nr={item.nr + 1}
          period={item.period}
          kw={item.kw}
          amp={item.amp}
          isKw={this.props.isKw ? true : false}
        />
      ));
    });
  }

  render() {
    const rows = this.createRows();
    return (
      <div className="lap-table">
        <Table basic unstackable fixed size="small">
          <Table.Header>
            <Table.Row textAlign="center" style={{ fontSize: 18 }}>
              <Table.HeaderCell width={3}>№</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>
                <Button
                  color="black"
                  className="table-button"
                  basic
                  onClick={() => this.props.switchIsKw(!this.props.isKw)}
                >
                  {this.props.isKw ? "kW" : "A"}
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{rows}</Table.Body>
        </Table>
      </div>
    );
  }
}

const TableRow = props => {
  const mins = parseInt(props.period / 60000);
  const secs = parseInt(props.period / 1000) % 60;
  const millis = parseInt((props.period % 1000) / 100);
  const periodString = mins + ":" + ("0" + secs).slice(-2) + ":" + millis;
  return (
    <Table.Row
      textAlign="center"
      style={{ fontWeight: props.fontWeight, fontSize: 18 }}
    >
      <Table.Cell width={3}>{props.nr}</Table.Cell>
      <Table.Cell>{periodString}</Table.Cell>
      <Table.Cell>{props.isKw ? props.kw : props.amp}</Table.Cell>
    </Table.Row>
  );
};

const mapStateToProps = state => {
  return {
    resultRows: state.resultRows,
    isKw: state.isKw
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ switchIsKw: switchIsKw }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(LapTable);
