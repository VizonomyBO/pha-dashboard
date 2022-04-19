import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { LeftForm2 } from '../LeftForm2';

describe('renders without crashing', () => {
  const initialStoreState = {
    marketplace: {
      otherQuestions: {
        availabilityOptions: []
      },
      retailerFiles: {
        imagelinks: '',
        owner_photo: ''
      }
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
        <LeftForm2 />
      </Provider>,
      div
    );
  });
});
