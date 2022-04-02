import renderer from 'react-test-renderer'
import Departures from '.'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useSelector, useDispatch } from 'react-redux'
import { mockTripList } from 'mockData/tripList'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))

describe('<Departures />', () => {
  it('should match snapshot', () => {
    ;(useSelector as jest.Mock).mockReturnValueOnce(mockTripList)
    ;(useDispatch as jest.Mock).mockReturnValue(() => {})
    const tree = renderer.create(<Departures />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
