export enum FontWeight {
  normal = 400,
  medium = 500,
  bold = 700
}

export type Token = {
  accessToken: string;
  expires: null | Date;
};

export type ApiError = {
  DepartureBoard: {
    error: string;
    errorText: string;
    noNamespaceSchemaLocation: string;
  };
};

export type DepartureBoard = {
  DepartureBoard: {
    Departure: Departure[];
    noNamespaceSchemaLocation: string;
    serverdate: string;
    servertime: string;
  };
};

export type Departure = {
  JourneyDetailRef: { ref: string };
  accessibility: string;
  bgColor: string;
  date: string;
  direction: string;
  fgColor: string;
  journeyNumber: string;
  journeyid: string;
  name: string;
  rtDate: string;
  rtTime: string;
  sname: string;
  stop: string;
  stopid: string;
  stroke: string;
  time: string;
  track: string;
  type: string;
};
