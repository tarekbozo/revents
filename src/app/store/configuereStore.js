import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootRrducer from "./rootReducer";

export function configureStore() {
  return createStore(rootRrducer, devToolsEnhancer());
}
