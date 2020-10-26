import { toast } from 'react-toastify';
import {
  asyncActionFinsht,
  asyncActionStart,
  asyncActionError,
} from './../../app/async/asyncReducer';
import { delay } from './../../app/common/util/util';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment(amount) {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      await delay(1000);
      dispatch({ type: INCREMENT_COUNTER, payload: amount });
      dispatch(asyncActionFinsht());
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
}

export function decrement(amount) {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      await delay(1000);
      dispatch({ type: DECREMENT_COUNTER, payload: amount });
      dispatch(asyncActionFinsht());
    } catch (error) {
      dispatch(asyncActionError(error));
      toast.error(error);
    }
  };
}

const initialState = {
  data: 40,
};

export default function testReducer(state = initialState, { type, payload }) {
  switch (type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        data: state.data + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        data: state.data - 1,
      };

    default:
      return state;
  }
}
