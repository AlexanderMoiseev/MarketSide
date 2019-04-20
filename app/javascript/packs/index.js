import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import {fromJS} from 'immutable';
import {applyMiddleware, createStore} from "redux"
import {Provider} from 'react-redux'
import thunk from "redux-thunk"
import reducers from '../reducers/index'

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

const initialState = { data:tableData, counter:2 }

const store = createStore(
  reducers, fromJS(initialState),
  applyMiddleware(thunk));

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
