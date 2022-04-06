import ReactDOM from 'react-dom';
import { BADGES } from '../../constants';
import { Badge } from '../map/Badge';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Badge
      {...BADGES.fresh}
    />,
    div
  );
});
