import { render, screen } from 'testUtils/test-utils'
import MyComponent from '.'

describe('<MyComponent />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<MyComponent title='test' />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    render(<MyComponent title='test' />)
    expect(screen).toBeTruthy()
  })
})
