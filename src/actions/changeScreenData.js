import { TYPE_CHANGE, STATE_SCREEN_DATA } from '../reducer';

export default (screenData) => (dispatch) => {
  dispatch({
    type: TYPE_CHANGE,
    [STATE_SCREEN_DATA]: screenData
  });
};

