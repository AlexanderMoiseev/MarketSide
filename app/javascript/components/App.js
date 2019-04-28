import React, { Component } from 'react';
import { connect } from 'react-redux'
// import './App.scss'
import TableComponent from './TableComponent/TableComponent'
import { tableData } from './TableComponent/TableComponent'
import { fromJS } from 'immutable';
import { INC, UPDATE_CURRENCIES } from '../actions/actionList';
import {getCurrencyData} from '../actions/getCurrencyData'

class CounterComponent extends Component {
  render() {
    return this.props.counter;
  }
}

class App extends Component {
  onBtnClick = event => {
    this.setState((oldState) => ({ counter: oldState.counter + 1 }))
  }

  render() {
    return (
      <div>
        <div className="Table">
          <TableComponent data={this.props.currenciesData} />
        </div>
        <div className="Table">
          <CounterComponent counter={this.props.counter} />
        </div>
        <button onClick={this.props.incrementCounter}>Increment </button>

        <button onClick={this.props.updateCurrencies}>Increment </button>

        <button onClick={this.props.getCurrency}>get monero </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.get('counter')
  }
}


function mapDispatchToProps(dispatch) {
  return {
    incrementCounter: () => {
      dispatch({
        type: INC
      });
    },
    updateCurrencies: () => {
      dispatch({
        type: UPDATE_CURRENCIES, 
        payload: 'new valueee'
      });
    },
    getCurrency: (currency) => {
      dispatch(getCurrencyData(currency))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)