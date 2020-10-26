import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootRrducer from './rootReducer';

export function configureStore() {
  return createStore(rootRrducer, composeWithDevTools(applyMiddleware(thunk)));
}
