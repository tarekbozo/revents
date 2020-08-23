import { combineReducers } from "redux";
import eventReducer from "../../features/events/eventReducer";
import testReducer from "../../features/Sandbox/testReducer";

const rootRrducer = combineReducers({
  test: testReducer,
  event: eventReducer,
});

export default rootRrducer;
