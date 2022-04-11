import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Login } from '../Login';

describe('renders without crashing', () => {
  const initialStoreState = {
    marketplace: {
      businessDetails: {
        state: ''
      }
    },
    geocoder: {
      inputText: '',
      options: []
    },
    categories: {
      categoriesSelected: []
    }
  };
  const mockStore = configureStore();
  let store;

  test('renders without crashing', () => {
    store = mockStore(initialStoreState);
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>,
      div
    );
  });
});
