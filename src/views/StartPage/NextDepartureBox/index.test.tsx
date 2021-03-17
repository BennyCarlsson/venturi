import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NextDepartureBox from '.';

describe('<Documentation />', () => {
  const name = 'Test name';
  const track = 'Test Track';

  describe('snapshots', () => {
    it('should match snapshot', () => {
      const tree = renderer.create(<NextDepartureBox name={name} track={track} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Component', () => {
    beforeEach(() => {
      render(<NextDepartureBox name={name} track={track} />);
    });

    it('should render without crashing', () => {
      expect(screen).toBeTruthy();
    });

    it('should render name and track props', () => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByText(track)).toBeInTheDocument();
    });
  });
});
