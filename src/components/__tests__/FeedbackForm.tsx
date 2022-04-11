import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { FeedbackForm } from '../FeedbackForm';

describe('renders without crashing', () => {
  const initialStoreState = {
    individualForm: {
      availability: '',
      quality: '',
      visibility: '',
      local: '',
      meets_need: '',
    }
  };
  const mockStore = configureStore();
  let store;

  test('renders without crashing', () => {
    store = mockStore(initialStoreState);
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <FeedbackForm
          retailerId="123"
          setVisible={jest.fn()}
        />
      </Provider>,
      div
    );
  });
});
