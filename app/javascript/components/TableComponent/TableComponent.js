
import React, { Component } from 'react';
// import 'bootstrap'
import './TableComponent.scss'
import TableCellComponent from '../TableCellComponent/TableCellComponent';
import { connect } from 'react-redux'

class TableComponent extends Component {
  render() {
    // Data
    var dataRows = this.props.rows.toJS();
    var dataColumns = this.props.columns.toJS();

    var tableHeaders = (<thead>
      <tr>
        {dataColumns.map((column, index) => <th key={index}>{column}</th>)}
      </tr>
    </thead>)

    var tableBody = dataRows.map((row, index) =>
      <tr key={index}>
        {dataColumns.map((column, index) => <TableCellComponent key={index} data={row[column]} />)}
      </tr>)

    // Decorate with Bootstrap CSS
    return (<table className="table table-bordered table-hover" width="100%">
      {tableHeaders}
      < tbody>
        {tableBody}
      </tbody>
    </table>)
  }
};

function mapStateToProps(state) {
  return {
    rows: state.get('data').get('rows'),
    columns: state.get('data').get('columns'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent)