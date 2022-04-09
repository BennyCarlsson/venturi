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
})
