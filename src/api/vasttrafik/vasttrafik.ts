import { ApiError, DepartureBoard, Token } from 'types';
import { getTime, getExpireTime, isTokenValid } from './helpers';

const id = 'T0hDc2txdEp6cDhMYlVmRjhsaWVfeERHdDBBYTp6ME5wWWY3dlYxbUFhTEVFbkdyRFprTGEwODBh';
let token: Token = { accessToken: '', expires: null };

export const getDepartureBoard = async (fromStopId: string) => {
  let data;
  if (!isTokenValid(token)) {
    await updateToken();
  }
  let response = await fetchDepartureBoard(fromStopId);
  if (response.status === 401) {
    await updateToken();
    response = await fetchDepartureBoard(fromStopId);
  }
  if (response.status === 200) {
    data = await response.json();
    return data as DepartureBoard;
  }
  data = await response.json();
  return data as ApiError;
};

const fetchDepartureBoard = async (fromStopId: string): Promise<Response> => {
  const { date, time } = getTime();
  const tripUrl = `https://api.vasttrafik.se/bin/rest.exe/v2/departureBoard?id=${fromStopId}&date=${date}&time=${time}&format=json`;
  const response = await fetch(tripUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.accessToken}`
    }
  });
  return response;
};

const fetchAccessToken = async () => {
  const response = await fetch('https://api.vasttrafik.se:443/token', {
    headers: {
      Authorization: `Basic ${id}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    body: 'grant_type=client_credentials'
  });
  const data = await response.json();
  return data;
};

const updateToken = async () => {
  const data = await fetchAccessToken();
  const expires = getExpireTime(data.expires_in);
  const accessToken = data.access_token;
  token = { accessToken, expires };
};
