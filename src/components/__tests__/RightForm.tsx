import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { RightForm } from '../RightForm';

describe('renders without crashing', () => {
  const initialStoreState = {
    marketplace: {
      selectCategory: {
        supermarket: 'Yes',
        corner_store: 'Yes',
        dollar_stores: 'Yes',
        food_pantry: 'Yes',
        distribution: 'Yes',
        food_co_op: 'Yes',
      },
      selectAccessibility: {
        wic_accepted: true,
        snap_accepted: true
      },
      currentOperation: {
        open: '',
      },
    },
  };
  const mockStore = configureStore();
  let store;

  test('renders without crashing', () => {
    store = mockStore(initialStoreState);
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <RightForm />
      </Provider>,
      div
    );
  });
});
