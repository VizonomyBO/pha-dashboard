import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { LeftForm3 } from '../LeftForm3';

describe('renders without crashing', () => {
  const initialStoreState = {
    marketplace: {
      contactDetails: {
        contact_name: '',
        contact_email: '',
        contact_owner: '',
        contact_patron: '',
      }
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
          <LeftForm3 />
        </MemoryRouter>
      </Provider>,
      div
    );
  });
});
