import {
  asyncActionStart,
  asyncActionError,
  asyncActionFinsht,
} from './../../app/async/asyncReducer';
import { fetchSampleData } from './../../app/api/mockApi';
import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENT,
} from './eventConstants';

export const loadEvent = () => {
  return async (dispatch) => {
    dispatch(asyncActionStart());
    try {
      const events = await fetchSampleData();
      dispatch({ type: FETCH_EVENT, payload: events });
      dispatch(asyncActionFinsht());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };
};

export const createEvent = (event) => {
  return {
    type: CREATE_EVENT,
    payload: event,
  };
};
export const updateEvent = (event) => {
  return {
    type: UPDATE_EVENT,
    payload: event,
  };
};
export const deleteEvent = (eventId) => {
  return {
    type: DELETE_EVENT,
    payload: eventId,
  };
};
