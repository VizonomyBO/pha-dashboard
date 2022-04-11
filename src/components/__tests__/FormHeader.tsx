import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { FormHeader } from '../FormHeader';

describe('renders without crashing', () => {
  const initialStoreState = {};
  const mockStore = configureStore();
  let store;

  test('renders without crashing', () => {
    store = mockStore(initialStoreState);
    const div = document.createElement('div');
    const setActiveTabMock = jest.fn();
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <FormHeader
            activeTab="businessDetails"
            setActiveTab={setActiveTabMock}
          />
        </MemoryRouter>
      </Provider>,
      div
    );
  });
});
