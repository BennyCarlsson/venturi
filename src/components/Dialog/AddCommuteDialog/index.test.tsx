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
  const ChooseDestinationViewText =
    "To kepp track of your trips, a good idea is to name the specific trip you are about to create. It's optional but a good idea."
  const NameCommuteViewText =
    'Välj destinationer för din resa. Du kan alltid ändra eller lägga till flera vid ett senare tillfälle.'
  const useAppDispatch = jest.fn()
  beforeEach(() => {
    ;(useDispatch as jest.Mock).mockReturnValue(useAppDispatch)
  })

  it('should match snapshot', () => {
    cleanup()
    const { asFragment } = render(<AddCommuteDialog />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    render(<AddCommuteDialog />, {
      initialState: {
        dialog: { show: true },
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
    render(<AddCommuteDialog />, {
      initialState: {
        dialog: { show: true },
        locations: {
          destinationError: 'error',
          loadingDestination: false,
          loadingOrigin: false,
        },
      },
    })
    expect(
      screen.getByText(
        'Välj destinationer för din resa. Du kan alltid ändra eller lägga till flera vid ett senare tillfälle.'
      )
    ).toBeInTheDocument()
  })

  it('should go to NameCommuteView', async () => {
    render(<AddCommuteDialog />, {
      initialState: {
        dialog: { show: true },
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
    expect(screen.getByText(ChooseDestinationViewText)).toBeInTheDocument()
  })

  it('should go back to ChooseDestionationView', async () => {
    render(<AddCommuteDialog />, {
      initialState: {
        dialog: { show: true },
        ...locations,
      },
    })

    expect(screen.getByText(NameCommuteViewText)).toBeInTheDocument()

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
    expect(screen.getByText(ChooseDestinationViewText)).toBeInTheDocument()

    userEvent.click(screen.getByTestId('close-dialog-button'))
    expect(screen.getByText(NameCommuteViewText)).toBeInTheDocument()
  })
})
