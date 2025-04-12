import { trafficStatus } from '../clinic-list/clinic-list.types';

export type HourlyTraffic = {
  hour: number;
  trafficStatus: trafficStatus;
  totalVisitors: number;
};
