import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { DropdownBusiness } from '../DropdownBusiness';

describe('renders without crashing', () => {
  const initialStoreState = {};
  const mockStore = configureStore();
  let store;

  test('renders without crashing', () => {
    store = mockStore(initialStoreState);
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <DropdownBusiness
          initialState="States"
          type="state"
        />
      </Provider>,
      div
    );
  });
});
