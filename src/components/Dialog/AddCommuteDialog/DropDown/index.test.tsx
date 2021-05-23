import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { LocationType } from 'redux/locationsSlice';
import DropDown from '.';

describe('<DropDown />', () => {
  beforeEach(() => {
    render(
      <DropDown
        locations={[
          {
            id: '1',
            idx: '1',
            name: 'name',
            lat: '1',
            lon: '1',
            type: LocationType.CoordLocation
          }
        ]}
        setInput={jest.fn()}
        setLocation={jest.fn()}
        show
      />
    );
  });

  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <DropDown
          locations={[
            {
              id: '1',
              idx: '1',
              name: 'name',
              lat: '1',
              lon: '1',
              type: LocationType.CoordLocation
            }
          ]}
          setInput={jest.fn()}
          setLocation={jest.fn()}
          show
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    expect(screen).toBeTruthy();
  });

  //Todo: more tests
});
