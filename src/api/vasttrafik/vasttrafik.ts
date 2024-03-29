import {
  ApiError,
  DepartureBoard,
  Token,
  GetTripResponse,
  GetLocationList,
} from 'types'
import { getExpireTime, isTokenValid } from './helpers'
import {
  fetchAccessToken,
  fetchDepartureBoard,
  fetchLocationOnName,
  fetchTrip,
} from './vasttrafikApi'

let token: Token = { accessToken: '', expires: null }

const updateToken = async () => {
  const data = await fetchAccessToken()
  const expires = getExpireTime(data.expires_in)
  const accessToken = data.access_token
  token = { accessToken, expires }
}

export const getTrip = async (
  originId: string,
  destId: string
): Promise<GetTripResponse> => {
  return apiCaller(() =>
    fetchTrip(originId, destId, token)
  ) as Promise<GetTripResponse>
}

export const getLocationOName = async (
  name: string,
  signal: AbortSignal
): Promise<GetLocationList> => {
  return apiCaller(() =>
    fetchLocationOnName(name, signal, token)
  ) as Promise<GetLocationList>
}

export const getDepartureBoard = async (
  originId: string
): Promise<DepartureBoard | ApiError> => {
  return apiCaller(() => fetchDepartureBoard(originId, token)) as Promise<
    DepartureBoard | ApiError
  >
}

const apiCaller = async (fetcher: () => Promise<any>): Promise<any> => {
  let data
  if (!isTokenValid(token)) {
    await updateToken()
  }
  let response = await fetcher()
  if (response.status === 401) {
    await updateToken()
    response = await fetcher()
  }
  if (response.status === 200) {
    data = await response.json()
    return data
  }
  data = await response.json()
  return data as ApiError
}
