import { User } from './user';
import { Driver } from './driver';

export interface Route {
  id?: number;
  routeName: string;
  problemDescription: string;
  comments: string;
  startLatitude: number;
  startLongitude: number;
  endLatitude: number;
  endLongitude: number;
  assignedHistoryId: number;
}

export type RouteRequest = Omit<Route, 'id'>;

export const initialRouteState: Route= {
  routeName: '',
  problemDescription: '',
  comments: '',
  startLatitude: 0,
  startLongitude: 0,
  endLatitude: 0,
  endLongitude: 0,
  assignedHistoryId: 0, 
};

export const initialRouteRequest: RouteRequest = {
  routeName: '',
  problemDescription: '',
  comments: '',
  startLatitude: 0,
  startLongitude: 0,
  endLatitude: 0,
  endLongitude: 0,
  assignedHistoryId: 0,
};
