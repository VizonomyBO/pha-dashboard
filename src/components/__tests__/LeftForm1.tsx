import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { LeftForm1 } from '../LeftForm1';

describe('renders without crashing', () => {
  const initialStoreState = {
    marketplace: {
      businessDetails: {}
    }
  };
  const mockStore = configureStore();
  let store;

  test('renders without crashing', () => {
    store = mockStore(initialStoreState);
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <LeftForm1 />
      </Provider>,
      div
    );
  });
});
