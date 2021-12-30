import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ChevronIcon from '.'

describe('<ChevronIcon />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<ChevronIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    render(<ChevronIcon />)
    expect(screen).toBeTruthy()
  })
})
