import {
  applyMiddleware, createStore, EmptyObject, PreloadedState
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import appReducers from './reducers';

export function initStore(initialStore? : PreloadedState<EmptyObject>) {
  const store = createStore(
    appReducers,
    initialStore,
    composeWithDevTools(
      applyMiddleware(
        thunk
      )
    )
  );
  return store;
}

export default function configureStore(preloadedState?: PreloadedState<EmptyObject>) {
  let store = initStore(preloadedState);
  if (preloadedState) {
    store = initStore({
      ...preloadedState,
    });
  }
  if (typeof window === 'undefined') {
    return store;
  }
  return store;
}
