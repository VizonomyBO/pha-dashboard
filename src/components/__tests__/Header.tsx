import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Header } from '../Header';

describe('renders without crashing', () => {
  const initialStoreState = {
    inputText: {
      text: '',
      shouldSearch: false,
      center: [],
      bbox: []
    },
    options: [],
    shouldZoom: false,
    controllerZoom: {
      value: 0,
      type: ''
    },
    marketplace: {
      businessDetails: {
        state: '',
        address_1: '',
      }
    },
  };
  const mockStore = configureStore();
  let store;

  test('renders without crashing', () => {
    store = mockStore(initialStoreState);
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <Header />
      </Provider>,
      div
    );
  });
  test('renders without crashing', () => {
    store = mockStore(initialStoreState);
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <Header type="home" />
      </Provider>,
      div
    );
  });
});
