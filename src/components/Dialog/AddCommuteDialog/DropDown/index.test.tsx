import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { LocationType } from 'redux/locationsSlice';
import DropDown from '.';
const locations = [
  {
    id: '1',
    idx: '1',
    name: 'name',
    lat: '1',
    lon: '1',
    type: LocationType.CoordLocation
  },
  {
    id: '2',
    idx: '2',
    name: 'name2',
    lat: '2',
    lon: '2',
    type: LocationType.CoordLocation
  },
  {
    id: '3',
    idx: '3',
    name: 'name3',
    lat: '3',
    lon: '3',
    type: LocationType.CoordLocation
  }
];

describe('<DropDown />', () => {
  const spySetInput = jest.fn();
  const spySetLocation = jest.fn();
  beforeEach(() => {
    render(
      <DropDown locations={locations} setInput={spySetInput} setLocation={spySetLocation} show />
    );
  });

  it('should match snapshot', () => {
    const tree = renderer
      .create(<DropDown locations={locations} setInput={jest.fn()} setLocation={jest.fn()} show />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    expect(screen).toBeTruthy();
  });

  it('should render 3 li', () => {
    expect(screen.queryByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('should click the first listitem', () => {
    userEvent.click(screen.getAllByRole('listitem')[0]);
    expect(spySetInput).toHaveBeenCalledTimes(1);
    expect(spySetInput).toHaveBeenCalledWith(locations[0].name);
    expect(spySetLocation).toHaveBeenCalledTimes(1);
    expect(spySetLocation).toHaveBeenCalledWith(locations[0]);
  });

  it('should click the second listitem', () => {
    userEvent.click(screen.getAllByRole('listitem')[1]);
    expect(spySetInput).toHaveBeenCalledTimes(1);
    expect(spySetInput).toHaveBeenCalledWith(locations[1].name);
    expect(spySetLocation).toHaveBeenCalledTimes(1);
    expect(spySetLocation).toHaveBeenCalledWith(locations[1]);
  });

  it('should not render if show is false', () => {
    cleanup();
    render(
      <DropDown
        locations={locations}
        setInput={spySetInput}
        setLocation={spySetLocation}
        show={false}
      />
    );
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  // location undefined
  it('should not render if location is false', () => {
    cleanup();
    render(
      <DropDown locations={undefined} setInput={spySetInput} setLocation={spySetLocation} show />
    );
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('should not render if location is empty array', () => {
    cleanup();
    render(<DropDown locations={[]} setInput={spySetInput} setLocation={spySetLocation} show />);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
