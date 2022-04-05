import ReactDOM from 'react-dom';
import { ToolTip } from '../ToolTip';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <ToolTip x={0} y={0} retailerId={'123'} />
    </MemoryRouter>,
    div
  );
});
