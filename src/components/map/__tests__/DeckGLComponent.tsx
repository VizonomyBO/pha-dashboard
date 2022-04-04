import ReactDOM from 'react-dom';
import { DeckGLComponent } from '../DeckGlComponent';

describe('DeckGLComponent', () => {
  test('renders without crashing with no data', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DeckGLComponent />, div);
  });
});
