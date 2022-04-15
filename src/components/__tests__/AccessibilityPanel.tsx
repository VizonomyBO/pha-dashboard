import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AccessibilityPanel } from '../AccessibilityPanel';

describe('renders without crashing', () => {
  const initialStoreState = {
    marketplace: {
      selectAccessibility: {
        wic_accepted: true,
        snap_accepted: true
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
        <AccessibilityPanel />
      </Provider>,
      div
    );
  });
});
