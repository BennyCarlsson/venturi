import { ApiError, DepartureBoard, Token } from 'types';
import { getExpireTime, isTokenValid } from './helpers';
import { fetchAccessToken, fetchDepartureBoard } from './vasttrafikApi';

let token: Token = { accessToken: '', expires: null };

const updateToken = async () => {
  const data = await fetchAccessToken();
  const expires = getExpireTime(data.expires_in);
  const accessToken = data.access_token;
  token = { accessToken, expires };
};

export const getDepartureBoard = async (fromStopId: string) => {
  let data;
  if (!isTokenValid(token)) {
    await updateToken();
  }
  let response = await fetchDepartureBoard(fromStopId, token);
  if (response.status === 401) {
    await updateToken();
    response = await fetchDepartureBoard(fromStopId, token);
  }
  if (response.status === 200) {
    data = await response.json();
    return data as DepartureBoard;
  }
  data = await response.json();
  return data as ApiError;
};
