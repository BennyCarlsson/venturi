import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import MotionHeading from '.'

describe('<MotionHeading />', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<MotionHeading headingType={'h2'}>Heading</MotionHeading>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    render(<MotionHeading headingType={'h2'}>Heading</MotionHeading>)
    expect(screen).toBeTruthy()
  })

  it('should render text', () => {
    render(<MotionHeading headingType={'h2'}>Heading</MotionHeading>)
    expect(screen.getByText('Heading')).toBeInTheDocument()
  })

  type headingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  const headingTypes: headingType[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  headingTypes.forEach((headingType) => {
    it(`${headingType} should render passed child element`, () => {
      const text = 'Testy test'
      render(<MotionHeading headingType={headingType}>{text}</MotionHeading>)
      expect(
        screen.getByText(text, { selector: headingType })
      ).toBeInTheDocument()
    })
  })
})
