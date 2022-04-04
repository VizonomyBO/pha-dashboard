import ReactDOM from 'react-dom';
import { NoDataProvided } from '../NoDataProvided';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NoDataProvided variables={['MAPBOX_KEY']} />, div);
});
