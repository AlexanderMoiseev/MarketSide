import {INC, ACTIVE_POLL} from '../actions/actionList';
import {fromJS} from 'immutable';

export default (state, action) => {

  if (action.type === INC) {
  console.log(action.type)

    return state.mergeDeep({
        counter: state.get("counter") + 1
    });
  }

  return state;
}