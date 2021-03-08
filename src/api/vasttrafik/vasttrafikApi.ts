import { Token } from 'types';
import { getTime } from './helpers';

const id = 'T0hDc2txdEp6cDhMYlVmRjhsaWVfeERHdDBBYTp6ME5wWWY3dlYxbUFhTEVFbkdyRFprTGEwODBh';

export const fetchTrip = async (
  originId: string,
  destId: string,
  token: Token
): Promise<Response> => {
  const { date, time } = getTime();
  const tripUrl = `https://api.vasttrafik.se/bin/rest.exe/v2/trip?originId=${originId}&destId=${destId}&date=${date}&time=${time}&format=json`;
  const response = await fetch(tripUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.accessToken}`
    }
  });
  return response;
};

export const fetchDepartureBoard = async (originId: string, token: Token): Promise<Response> => {
  const { date, time } = getTime();
  const tripUrl = `https://api.vasttrafik.se/bin/rest.exe/v2/departureBoard?id=${originId}&date=${date}&time=${time}&format=json`;
  const response = await fetch(tripUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.accessToken}`
    }
  });
  return response;
};

export const fetchAccessToken = async () => {
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
