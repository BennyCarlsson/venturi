import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TimeUntilDeparture from '.';

describe('<TimeUntilDeparture />', () => {
  const date = '2021-01-01';
  const time = '13:05';
  const mockDate = new Date(2021, 0, 1, 13, 2, 0);
  jest.useFakeTimers('modern');
  jest.setSystemTime(mockDate);
  it('should match snapshot', () => {
    const tree = renderer.create(<TimeUntilDeparture date={date} time={time} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    render(<TimeUntilDeparture date={date} time={time} />);
    expect(screen).toBeTruthy();
  });

  it('should render minutes until departue', () => {
    render(<TimeUntilDeparture date={date} time={time} />);
    expect(screen.getByText('in 3 minutes')).toBeInTheDocument();
  });

  it('should render departure is now', () => {
    const date = '2021-01-01';
    const time = '13:10';
    const mockDate = new Date(2021, 0, 1, 13, 10, 0);
    jest.useFakeTimers('modern');
    jest.setSystemTime(mockDate);
    render(<TimeUntilDeparture date={date} time={time} />);
    expect(screen.getByText('now')).toBeInTheDocument();
  });

  it('should render departure is now even if late', () => {
    const date = '2021-01-01';
    const time = '13:10';
    const mockDate = new Date(2021, 0, 1, 13, 11, 0);
    jest.useFakeTimers('modern');
    jest.setSystemTime(mockDate);
    render(<TimeUntilDeparture date={date} time={time} />);
    expect(screen.getByText('now')).toBeInTheDocument();
  });

  it('should render departure is now seconds', () => {
    const date = '2021-01-01';
    const time = '13:10';
    const mockDate = new Date(2021, 0, 1, 13, 9, 30);
    jest.useFakeTimers('modern');
    jest.setSystemTime(mockDate);
    render(<TimeUntilDeparture date={date} time={time} />);
    expect(screen.getByText('now')).toBeInTheDocument();
  });

  it('should render everything singular', () => {
    const date = '2021-01-02';
    const time = '14:10';
    const mockDate = new Date(2021, 0, 1, 13, 8, 55);
    jest.useFakeTimers('modern');
    jest.setSystemTime(mockDate);
    render(<TimeUntilDeparture date={date} time={time} />);
    expect(screen.getByText('in 1 day 1 hour 1 minute')).toBeInTheDocument();
  });

  it('should render everything plural', () => {
    const date = '2021-01-03';
    const time = '15:20';
    const mockDate = new Date(2021, 0, 1, 13, 8, 55);
    jest.useFakeTimers('modern');
    jest.setSystemTime(mockDate);
    render(<TimeUntilDeparture date={date} time={time} />);
    expect(screen.getByText('in 2 days 2 hours 11 minutes')).toBeInTheDocument();
  });

  it('should render only hours', () => {
    const date = '2021-01-01';
    const time = '15:20';
    const mockDate = new Date(2021, 0, 1, 13, 20, 0);
    jest.useFakeTimers('modern');
    jest.setSystemTime(mockDate);
    render(<TimeUntilDeparture date={date} time={time} />);
    expect(screen.getByText('in 2 hours')).toBeInTheDocument();
  });

  it('should render only days', () => {
    const date = '2021-01-03';
    const time = '13:00';
    const mockDate = new Date(2021, 0, 1, 13, 0, 0);
    jest.useFakeTimers('modern');
    jest.setSystemTime(mockDate);
    render(<TimeUntilDeparture date={date} time={time} />);
    expect(screen.getByText('in 2 days')).toBeInTheDocument();
  });

  // rtime?
});
