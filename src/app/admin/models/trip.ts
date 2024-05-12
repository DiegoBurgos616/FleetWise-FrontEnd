import { User } from './user';
import { Driver } from './driver';

export interface Trip {
  id?: string;
  routeName: string;
  startDate: string;
  endDate: string;
  successful: boolean;
  problemDescription: string;
  comments: string;

  drivers: Driver[];
  users: User[];
}

export type TripRequest = Omit<Trip, 'id'>;

export const initialTripState: Trip = {
  id: '',
  routeName: '',
  startDate: '',
  endDate: '',
  successful: false,
  problemDescription: '',
  comments: '',

  drivers: [],
  users: [],
};

export const initialTripRequest: TripRequest = {
  routeName: '',
  startDate: '',
  endDate: '',
  successful: false,
  problemDescription: '',
  comments: '',

  drivers: [],
  users: [],
};
