import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { DropdownGeocoder } from '../DropdownGeocoder';

describe('renders without crashing', () => {
  const initialStoreState = {
    marketplace: {
      businessDetails: {
        state: '',
        address_1: '',
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
        <DropdownGeocoder
          type="state"
        />
      </Provider>,
      div
    );
  });
});
