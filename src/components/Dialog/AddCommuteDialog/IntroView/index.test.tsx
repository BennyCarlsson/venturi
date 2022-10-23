import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import IntroView from '.'

describe('<IntroView />', () => {
  const mockGoToChooseDestinationView = jest.fn()
  it('should match snapshot', () => {
    const { asFragment } = render(
      <IntroView goToChooseDestionationView={mockGoToChooseDestinationView} />,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call goToChooseDestionationView onClick', async () => {
    render(
      <IntroView goToChooseDestionationView={mockGoToChooseDestinationView} />
    )
    expect(mockGoToChooseDestinationView).not.toHaveBeenCalledTimes(1)
    await userEvent.click(screen.getByRole('button'))
    expect(mockGoToChooseDestinationView).toHaveBeenCalledTimes(1)
  })
})
