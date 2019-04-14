import React, { Component } from 'react';
// import './App.scss'
import TableComponent from './TableComponent/TableComponent'
import {tableData} from './TableComponent/TableComponent'

class App extends Component {
    render() {
      return (
        <div>
            <div className="Table">
                <TableComponent data = {tableData} />
            </div>
            <button >Increment </button>
        </div>
      );
    }
  }
export default App