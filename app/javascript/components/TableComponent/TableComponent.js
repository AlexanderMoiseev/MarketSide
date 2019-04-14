
import React, { Component } from 'react';
// import 'bootstrap'
import './TableComponent.scss'
import TableCellComponent from '../TableCellComponent/TableCellComponent';

class TableComponent extends Component {
    render() {
      // Data
      var dataColumns = this.props.data.columns;
      var dataRows = this.props.data.rows;
  
      var tableHeaders = (<thead>
            <tr>
              {dataColumns.map((column, index) => <th key={index}>{column}</th>) }
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
        </table>) }
        
    };
          
  
  // Example Data
  export var tableData = {
    columns: ['Currency', 'Cost/Unit', 'Unit', 'Units Requested'],
    rows: [{
      'Currency': 'Monero',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Currency': 'Bitcoin',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Currency': 'USD',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Currency': 'EURO',
      'Unit': null,
      'Cost/Unit': undefined,
      'Units Requested': 42
    }]
  };
  
  export default TableComponent;