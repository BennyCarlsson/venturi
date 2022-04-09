import { mockTripList } from 'mockData/tripList'
import { render, screen } from 'testUtils/test-utils'
import TripListItem from '.'

describe('<TripListItem />', () => {
  const defaultProps: React.ComponentProps<typeof TripListItem> = {
    trip: mockTripList.trips[0],
  }
  beforeEach(() => {
    render(<TripListItem {...defaultProps} />, {})
  })

  it('should match snapshot', () => {
    const { asFragment } = render(<TripListItem {...defaultProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    expect(screen).toBeTruthy()
  })

  it('should render trip name', () => {
    expect(
      screen.getByText(defaultProps.trip.name, { selector: 'h2' })
    ).toBeTruthy()
  })

  it('should render origin name', () => {
    expect(
      screen.getByText(defaultProps.trip.origin?.name as string, {
        selector: 'p',
      })
    ).toBeTruthy()
  })

  it('should render destination name', () => {
    expect(
      screen.getByText(defaultProps.trip.destination?.name as string, {
        selector: 'p',
      })
    ).toBeTruthy()
  })
})
