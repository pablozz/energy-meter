import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Table } from 'semantic-ui-react';

class LapTable extends Component {
  createRows() {
    return this.props.resultRows.map(item => {
      return (item.key =
        this.props.resultRows.length - 1 === item.nr ? (
          <TableRow
            fontWeight="bold"
            key={item.nr}
            nr={item.nr + 1}
            period={item.period}
            kw={item.kw}
          />
        ) : (
          <TableRow
            key={item.nr}
            nr={item.nr + 1}
            period={item.period}
            kw={item.kw}
          />
        ));
    });
  }

  render() {
    const rows = this.createRows();
    return (
      <div className="lap-table">
        <Table unstackable fixed size="small" celled striped>
          <Table.Header>
            <Table.Row textAlign="center" style={{ fontSize: 18 }}>
              <Table.HeaderCell width={3}>№</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>kW</Table.HeaderCell>
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
  const periodString = mins + ':' + ('0' + secs).slice(-2) + ':' + millis;
  return (
    <Table.Row
      textAlign="center"
      style={{ fontWeight: props.fontWeight, fontSize: 18 }}
    >
      <Table.Cell width={3}>{props.nr}</Table.Cell>
      <Table.Cell>{periodString}</Table.Cell>
      <Table.Cell>{props.kw}</Table.Cell>
    </Table.Row>
  );
};

const mapStateToProps = state => {
  return {
    resultRows: state.resultRows
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(LapTable);
