import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ModalFilters } from '../ModalFilters';

describe('renders without crashing', () => {
  const initialStoreState = {
    categories: {
      categoriesSelected: [],
      accesibilities: [],
      dataSources: [],
    }
  };
  const mockStore = configureStore();
  let store;

  test('renders without crashing', () => {
    store = mockStore(initialStoreState);
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <ModalFilters setOpenModal={jest.fn()} />
      </Provider>,
      div
    );
  });
});
