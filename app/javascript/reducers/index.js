import { INC, ACTIVE_POLL, UPDATE_CURRENCIES, UPDATE_MONERO } from '../actions/actionList';
import { fromJS } from 'immutable';

export default (state, action) => {
  console.log(action.type)
  
  if (action.type === INC) {
    return state.mergeDeep({
      counter: state.get("counter") + 1
    });
  }

  if (action.type === UPDATE_CURRENCIES) {
    var res = state.setIn( ['data', 'rows', 1, 'Currency'], fromJS(action.payload));
    return res;
  }

  if (action.type === UPDATE_MONERO) {
    
    var res = state.setIn( ['data', 'rows', 1, 'Currency'], fromJS(action.payload));
    return res;
  }

  return state;
}
