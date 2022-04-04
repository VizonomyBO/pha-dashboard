import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { CategoryPanel } from '../CategoryPanel';

describe('renders without crashing', () => {
  const initialStoreState = {};
  const mockStore = configureStore();
  let store;

  test('renders without crashing', () => {
    store = mockStore(initialStoreState);
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <CategoryPanel />
      </Provider>,
      div
    );
  });
});
