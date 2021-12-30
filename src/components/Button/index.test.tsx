import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer'
import { cleanup, render, screen } from 'testUtils/test-utils'
import Button from '.'

describe('<Button />', () => {
  const buttonText = 'This is Button'
  const onClickSpy = jest.fn()
  beforeEach(() => {
    render(<Button onClick={onClickSpy}>{buttonText}</Button>, {})
  })

  it('should match snapshot', () => {
    cleanup()
    const tree = renderer
      .create(<Button onClick={jest.fn()}>Button</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    expect(screen).toBeTruthy()
  })

  it('should render children', () => {
    expect(screen.getByText(buttonText)).toBeInTheDocument()
  })

  it('should call onClick', () => {
    expect(onClickSpy).not.toHaveBeenCalled()
    userEvent.click(screen.getByRole('button'))
    expect(onClickSpy).toHaveBeenCalledTimes(1)
  })
})
