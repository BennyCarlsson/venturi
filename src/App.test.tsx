import { render, screen } from '@testing-library/react'
import App from './App'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))

test('render learn react link', () => {
  render(<App />)
  expect(screen).toBeTruthy()
})
