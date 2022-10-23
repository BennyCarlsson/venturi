import AddCommuteDialog from '.'
import { act, cleanup, waitFor, render, screen } from 'testUtils/test-utils'
import { locations } from 'mockData/originLocations'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useDispatch } from 'react-redux'
import userEvent from '@testing-library/user-event'

jest.mock('react-redux', () => ({
  ...(jest.requireActual('react-redux') as {}),
  useDispatch: jest.fn(),
}))

describe('<AddCommuteDialog />', () => {
  const IntroViewText =
    'Have a quick way to get information about your most common trip.'
  const ChooseDestinationViewText =
    'Välj destinationer för din resa. Du kan alltid ändra eller lägga till flera vid ett senare tillfälle.'

  const NameCommuteViewText =
    "To keep track of your trips, a good idea is to name the specific trip you are about to create. It's optional but a good idea."

  const useAppDispatch = jest.fn()
  beforeEach(() => {
    ;(useDispatch as jest.Mock).mockReturnValue(useAppDispatch)
  })

  it('should match snapshot', () => {
    cleanup()
    const { asFragment } = render(<AddCommuteDialog isIntroView={false} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    render(<AddCommuteDialog isIntroView={false} />, {
      initialState: {
        dialog: { show: true, isIntro: false },
        locations: {
          destinationError: 'error',
          loadingDestination: false,
          loadingOrigin: false,
        },
      },
    })
    expect(screen).toBeTruthy()
  })

  it('should render ChooseDestionationView', () => {
    render(<AddCommuteDialog isIntroView={false} />, {
      initialState: {
        dialog: { show: true, isIntro: false },
        locations: {
          destinationError: 'error',
          loadingDestination: false,
          loadingOrigin: false,
        },
      },
    })
    expect(screen.getByText(ChooseDestinationViewText)).toBeInTheDocument()
  })

  it('should go to NameCommuteView', async () => {
    render(<AddCommuteDialog isIntroView={false} />, {
      initialState: {
        dialog: { show: true, isIntro: false },
        ...locations,
      },
    })

    userEvent.type(screen.getByTestId('from-input'), 'aa')
    await waitFor(() => expect(screen.getByRole('list')).toBeInTheDocument())
    userEvent.click(screen.getAllByRole('listitem')[0])
    await act(async () => {
      await new Promise((r) => setTimeout(r, 100))
    })

    userEvent.type(screen.getByTestId('to-input'), 'aa')
    await waitFor(() => expect(screen.getByRole('list')).toBeInTheDocument())
    userEvent.click(screen.getAllByRole('listitem')[0])
    await act(async () => {
      await new Promise((r) => setTimeout(r, 100))
    })

    userEvent.click(screen.getByRole('button', { name: 'Namnge din resa' }))
    expect(screen.getByText(NameCommuteViewText)).toBeInTheDocument()
  })

  it('should go back to ChooseDestionationView', async () => {
    render(<AddCommuteDialog isIntroView={false} />, {
      initialState: {
        dialog: { show: true, isIntro: false },
        ...locations,
      },
    })

    expect(screen.getByText(ChooseDestinationViewText)).toBeInTheDocument()

    userEvent.type(screen.getByTestId('from-input'), 'aa')
    await waitFor(() => expect(screen.getByRole('list')).toBeInTheDocument())
    userEvent.click(screen.getAllByRole('listitem')[0])
    await act(async () => {
      await new Promise((r) => setTimeout(r, 100))
    })

    userEvent.type(screen.getByTestId('to-input'), 'aa')
    await waitFor(() => expect(screen.getByRole('list')).toBeInTheDocument())
    userEvent.click(screen.getAllByRole('listitem')[0])
    await act(async () => {
      await new Promise((r) => setTimeout(r, 100))
    })

    userEvent.click(screen.getByRole('button', { name: 'Namnge din resa' }))
    expect(screen.getByText(NameCommuteViewText)).toBeInTheDocument()

    userEvent.click(screen.getByTestId('close-dialog-button'))
    expect(screen.getByText(ChooseDestinationViewText)).toBeInTheDocument()
  })

  it('should render IntroView', () => {
    render(<AddCommuteDialog isIntroView={true} />, {})
    expect(screen.getByText(IntroViewText)).toBeInTheDocument()
  })

  it('should go from IntroView to ChooseDestinationView', async () => {
    render(<AddCommuteDialog isIntroView={true} />, {})
    expect(screen.getByText(IntroViewText)).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByText(ChooseDestinationViewText)).toBeInTheDocument()
  })
})
