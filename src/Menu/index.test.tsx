import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Menu from '.'
import { BrowserRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe('<Menu />', () => {
  beforeEach(() => {
    render(
      <Router>
        <Menu />
      </Router>
    )
  })

  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Menu />
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    expect(screen).toBeTruthy()
  })

  it('should render all 3 links', () => {
    expect(screen.getAllByRole('link')).toHaveLength(3)
  })

  it('should go away from startscreen and then back', () => {
    expect(window.location.pathname).toBe('/')
    userEvent.click(screen.getByText('Options'))
    expect(window.location.pathname).not.toBe('/')
    userEvent.click(screen.getByText('Current table'))
    expect(window.location.pathname).toBe('/')
  })

  it('should start on start screen', () => {
    expect(window.location.pathname).toBe('/')
  })

  it('should go to Departures screen', () => {
    userEvent.click(screen.getByText('Departures'))
    expect(window.location.pathname).toBe('/departures')
  })

  it('should go to Options screen', () => {
    userEvent.click(screen.getByText('Options'))
    expect(window.location.pathname).toBe('/options')
  })
})
