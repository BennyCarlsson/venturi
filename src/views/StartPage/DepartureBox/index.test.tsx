import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import DepartureBox from '.'

describe('<DepartureBox />', () => {
  const name = 'Test name'
  const track = 'Test Track'

  describe('snapshots', () => {
    it('should match snapshot', () => {
      const tree = renderer
        .create(<DepartureBox name={name} track={track} />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Component', () => {
    beforeEach(() => {
      render(<DepartureBox name={name} track={track} />)
    })

    it('should render without crashing', () => {
      expect(screen).toBeTruthy()
    })

    it('should render name and track props', () => {
      expect(screen.getByText(name)).toBeInTheDocument()
      expect(screen.getByText(track)).toBeInTheDocument()
    })
  })
})
