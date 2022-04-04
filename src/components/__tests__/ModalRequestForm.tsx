import ReactDOM from 'react-dom';
import { ModalRequestForm } from '../ModalRequestForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ModalRequestForm
      type
      visible
      setVisible={jest.fn()}
    />,
    div
  );
});
