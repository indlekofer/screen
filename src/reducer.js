import { Map } from 'immutable';

const module = '@indlekofer/screen/';
export const REDUCER = module + 'REDUCER';
const REDUCER_TYPE_ = REDUCER + '_TYPE_';
export const TYPE_CHANGE = REDUCER_TYPE_ + 'CHANGE';

const REDUCER_STATE_ = REDUCER + '_STATE_';
export const STATE_SCREEN = REDUCER_STATE_ + 'SCREEN';
export const STATE_SCREEN_DATA = STATE_SCREEN + '_DATA';

export const STATE_SCREEN_PREVIOUS = STATE_SCREEN + '_PREVIOUS';
export const STATE_SCREEN_DATA_PREVIOUS = STATE_SCREEN_DATA + '_PREVIOUS';

const initialState = Map({
  [STATE_SCREEN]: null,
  [STATE_SCREEN_DATA]: [],
  [STATE_SCREEN_PREVIOUS]: null,
  [STATE_SCREEN_DATA_PREVIOUS]: []
});

export default (state = initialState, action) => {
  if (action.type == TYPE_CHANGE) {
    return state.withMutations((s) => {
      initialState.mapKeys((k) => {
        if (typeof action[k] != 'undefined') {
          s.set(k, action[k]);
        }
      });
    });
  } else {
    return state;
  }
};
