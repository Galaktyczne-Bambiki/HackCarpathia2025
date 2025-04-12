export type trafficStatus = 'low' | 'medium' | 'high' | 'veryHigh';

export type ClinicDetails = {
  id: string;
  name: string;
  address: string;
  estimatedVisitors: number;
  waitingTime: number;
  availableProcedureTypes: string[];
  trafficStatus: trafficStatus;
  lat: number;
  lng: number;
};
