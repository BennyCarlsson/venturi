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
  error: string;
  errorText: string;
  noNamespaceSchemaLocation: string;
};

export type GetTripResponse = {
  TripList: TripList;
};

export type TripList = {
  errorText?: string;
  error?: string;
  serverdate?: string;
  servertime?: string;
  Trip?: Legs[];
  noNamespaceSchemaLocation: string;
};

export type Legs = {
  Leg: Leg;
};
export type Leg = {
  fgColor?: string;
  booking?: boolean;
  direction?: string;
  JourneyDetailRef?: JourneyDetailRef;
  cancelled: boolean;
  kcal?: Float32Array;
  Origin?: Origin;
  sname?: string;
  type: 'VAS' | 'LDT' | 'REG' | 'BUS' | 'BOAT' | 'TRAM' | 'TAXI' | 'WALK' | 'BIKE' | 'CAR';
  GeometryRef?: GeometryRef;
  bgColor?: string;
  Notes?: Notes;
  id?: string;
  stroke?: string;
  reachable?: boolean;
  name: string;
  night?: boolean;
  Destination?: Destination;
  percentBikeRoad?: Float32Array;
  accessibility?: string;
};

type JourneyDetailRef = {
  ref: string;
};

export type Origin = {
  routeIdx?: string;
  $: string;
  cancelled?: boolean;
  track?: string;
  rtTrack?: string;
  type: string;
  date: string;
  Notes?: Notes;
  id?: string;
  rtDate?: string;
  time: string;
  directdate?: string;
  name: string;
  rtTime?: string;
  directtime?: string;
};

type Notes = {
  Note?: Note[];
};
type Note = {
  priority: string;
  severity: string;
  key?: string;
};

type GeometryRef = {
  ref: string;
};

type Destination = {
  routeIdx?: string;
  $: string;
  cancelled?: boolean;
  track?: string;
  rtTrack?: string;
  type: string;
  date: string;
  Notes?: Notes;
  id: string;
  rtDate?: string;
  time: string;
  directdate?: string;
  name: string;
  rtTime?: string;
  directtime?: string;
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

export type GetLocationList = {
  LocationList: LocationList;
};

export type LocationList = {
  errorText?: string;
  error?: string;
  serverdate?: string;
  StopLocation?: StopLocation[] | StopLocation;
  CoordLocation?: CoordLocation[] | CoordLocation;
  servertime?: string;
};

export type StopLocation = {
  id: string;
  lon: string;
  idx: string;
  weight?: string;
  name: string;
  track?: string;
  lat: string;
};

export type CoordLocation = {
  lon: string;
  idx: string;
  name: string;
  type: string;
  lat: string;
};
