const ASYNC_ACTIO_START = 'ASYNC_ACTIO_START';
const ASYNC_ACTIO_FINSH = 'ASYNC_ACTIO_FINSH';
const ASYNC_ACTIO_ERROR = 'ASYNC_ACTIO_ERROR';

export function asyncActionStart() {
  return {
    type: ASYNC_ACTIO_START,
  };
}
export function asyncActionFinsht() {
  return {
    type: ASYNC_ACTIO_FINSH,
  };
}
export function asyncActionError(error) {
  console.log(error);
  return {
    type: ASYNC_ACTIO_ERROR,
    payload: error,
  };
}

const initialState = {
  loading: false,
  error: null,
};

export default function asyncReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ASYNC_ACTIO_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ASYNC_ACTIO_FINSH:
      return {
        ...state,
        loading: false,
      };
    case ASYNC_ACTIO_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
