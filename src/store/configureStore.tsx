import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reduces from './reducers';

export function initStore(initialStore? :any) {
  const store = createStore(
    reduces,
    initialStore,
    composeWithDevTools(
      applyMiddleware(
        thunk
      )
    )
  );
  return store;
}

export default function configureStore(preloadedState?: any) {
  let store = initStore(preloadedState);
  if (preloadedState) {
    store = initStore({
      ...preloadedState,
    });
  }
  if (typeof window === 'undefined') return store;
  return store;
}
