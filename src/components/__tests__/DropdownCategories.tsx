import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { DropdownCategories } from '../DropdownCategories';

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
    },
    widthScroll: 5,
    heightScroll: 0
  };
  const mockStore = configureStore();
  let store;

  test('renders without crashing', () => {
    store = mockStore(initialStoreState);
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <DropdownCategories
            setOpenCategories={jest.fn()}
          />
        </MemoryRouter>
      </Provider>,
      div
    );
  });
});
