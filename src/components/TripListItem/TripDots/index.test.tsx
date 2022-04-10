import { render, screen } from 'testUtils/test-utils'
import TripDots from '.'

describe('<TripDots />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<TripDots />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    render(<TripDots />, {})
    expect(screen).toBeTruthy()
  })
})
