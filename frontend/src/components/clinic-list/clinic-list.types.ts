export type trafficStatus = 'low' | 'medium' | 'high' | 'veryHigh';

export type ClinicDetails = {
  id: string;
  name: string;
  address: string;
  estimatedVisitors: number;
  waitingTime: number;
  availableProcedureTypes: string[];
  trafficStatus: trafficStatus;
  phoneNumber: string;
  openingHours: {
    days: Array<1 | 2 | 3 | 4 | 5 | 6 | 7>;
    openHour: string;
    closeHour: string;
  }[];
  lat: number;
  lng: number;
};
