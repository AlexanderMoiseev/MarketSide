
import React, { Component } from 'react';
import './TableCellComponent.scss'

class TableCellComponent extends Component {
    render() {
        return <td>{this.props.data}</td>;
    }
}

export default TableCellComponent;