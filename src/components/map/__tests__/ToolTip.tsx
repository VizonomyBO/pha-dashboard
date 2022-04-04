import ReactDOM from 'react-dom';
import { ToolTip } from '../ToolTip';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ToolTip
      x={0}
      y={0}
    />,
    div
  );
});
