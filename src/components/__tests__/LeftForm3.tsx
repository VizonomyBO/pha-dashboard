import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { LeftForm3 } from '../LeftForm3';

describe('renders without crashing', () => {
  const initialStoreState = {
    marketplace: {}
  };
  const mockStore = configureStore();
  let store;

  test('renders without crashing', () => {
    store = mockStore(initialStoreState);
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <LeftForm3 />
      </Provider>,
      div
    );
  });
});
