import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import {fromJS} from 'immutable';
import {applyMiddleware, createStore} from "redux"
import {Provider} from 'react-redux'
import thunk from "redux-thunk"
import reducers from '../reducers/index'
import {tableData} from '../components/TableComponent/TableComponent'


const initialState = { tableData:"", counter:2 }

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
