import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TimeBox from '.';

describe('<TimeBox />', () => {
  const time = '133:37';
  const location = 'location';
  const number = '15';
  const direction = 'hissinge';

  it('should match snapshot', () => {
    const tree = renderer
      .create(<TimeBox time={time} location={location} number={number} direction={direction} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    render(<TimeBox time={time} location={location} number={number} direction={direction} />);
    expect(screen).toBeTruthy();
  });

  it('should render props', () => {
    render(<TimeBox time={time} location={location} number={number} direction={direction} />);
    expect(screen.getByText(time)).toBeInTheDocument();
    expect(screen.getByText(location)).toBeInTheDocument();
    expect(screen.getByText(number)).toBeInTheDocument();
    expect(screen.getByText(direction)).toBeInTheDocument();
  });

  it('should render', () => {
    render(<TimeBox time={time} location={location} number={number} direction={direction} />);
    expect(screen.getByText(time)).toBeInTheDocument();
    expect(screen.getByText(location)).toBeInTheDocument();
    expect(screen.getByText(number)).toBeInTheDocument();
    expect(screen.getByText(direction)).toBeInTheDocument();
  });

  //Todo test where it renders until minutes
});
