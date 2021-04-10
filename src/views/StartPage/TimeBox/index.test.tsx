import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TimeBox from '.';

describe('<TimeBox />', () => {
  const date = '2021-01-01';
  const time = '13:37';
  const location = 'location';
  const number = '15';
  const direction = 'hissinge';
  const mockDate = new Date(2021, 0, 1, 13, 2, 0);
  jest.useFakeTimers('modern');
  jest.setSystemTime(mockDate);

  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <TimeBox
          date={date}
          time={time}
          location={location}
          number={number}
          direction={direction}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    render(
      <TimeBox date={date} time={time} location={location} number={number} direction={direction} />
    );
    expect(screen).toBeTruthy();
  });

  it('should render props', () => {
    render(
      <TimeBox date={date} time={time} location={location} number={number} direction={direction} />
    );
    expect(screen.getByText(time)).toBeInTheDocument();
    expect(screen.getByText(location)).toBeInTheDocument();
    expect(screen.getByText(number)).toBeInTheDocument();
    expect(screen.getByText(direction)).toBeInTheDocument();
  });

  it('should render minutes until departue', () => {
    render(
      <TimeBox date={date} time={time} location={location} number={number} direction={direction} />
    );
    expect(screen.getByText('in 35 minutes')).toBeInTheDocument();
  });

  it('should render minutes until departue with rtTime', () => {
    const rtTime = '13:47';
    render(
      <TimeBox
        date={date}
        time={time}
        rtTime={rtTime}
        location={location}
        number={number}
        direction={direction}
      />
    );
    expect(screen.getByText('in 45 minutes')).toBeInTheDocument();
  });

  it('should render time once', () => {
    render(
      <TimeBox date={date} time={time} location={location} number={number} direction={direction} />
    );
    expect(screen.getAllByText(time).length).toBe(1);
  });

  it('should render time once if rtTime is same', () => {
    render(
      <TimeBox
        date={date}
        time={time}
        rtTime={time}
        location={location}
        number={number}
        direction={direction}
      />
    );
    expect(screen.getAllByText(time).length).toBe(1);
  });

  it('should render new time and old time when late', () => {
    const rtTime = '13:47';
    render(
      <TimeBox
        date={date}
        time={time}
        rtTime={rtTime}
        location={location}
        number={number}
        direction={direction}
      />
    );
    expect(screen.getByText(time)).toBeInTheDocument();
    expect(screen.getByText(rtTime)).toBeInTheDocument();
  });
});
