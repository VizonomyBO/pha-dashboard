import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { CategoryPanel } from '../CategoryPanel';

describe('renders without crashing', () => {
  const initialStoreState = {
    marketplace: {
      selectCategory: {
        supermarket: 'Yes',
        corner_store: 'Yes',
        dollar_stores: 'Yes',
        food_pantry: 'Yes',
        distribution: 'Yes',
        food_co_op: 'Yes'
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
        <CategoryPanel />
      </Provider>,
      div
    );
  });
});
