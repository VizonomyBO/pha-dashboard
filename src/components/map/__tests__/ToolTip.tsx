import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { ToolTip } from '../ToolTip';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <ToolTip x={0} y={0} retailerId="123" />
    </MemoryRouter>,
    div
  );
});
