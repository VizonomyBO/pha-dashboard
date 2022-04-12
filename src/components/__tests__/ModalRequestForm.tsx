import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ModalRequestForm } from '../ModalRequestForm';

describe('renders without crashing', () => {
  const initialStoreState = {
    marketplace: {
      businessDetails: {},
      otherQuestions: {},
      contactDetails: {},
      selectCategory: {},
      selectAccessibility: {}
    },
    modal: {
      open: false,
      type: false
    }
  };
  const mockStore = configureStore();
  let store;

  test('renders without crashing', () => {
    store = mockStore(initialStoreState);
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <ModalRequestForm />
      </Provider>,
      div
    );
  });
});
