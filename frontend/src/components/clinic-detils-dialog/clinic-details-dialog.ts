import { trafficStatus } from '../clinic-list/clinic-list.types';

export type HourlyTraffic = {
  hour: string;
  trafficStatus: trafficStatus;
  totalVisitors: number;
};
