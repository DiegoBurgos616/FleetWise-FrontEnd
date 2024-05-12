import { Trip } from "./trip";

export interface Driver {
    id?: string;
    name: string;
    responsibility: string;
    qualification: string;
    salary: number;
    createdAt: string;
    updatedAt: string;
    trips: Trip[]; // 
}

export type DriverRequest = Omit<Driver, 'id'>;

export const initialDriverState: Driver = {
    id: '',
    name: '',
    responsibility: '',
    qualification: '',
    salary: 0,
    createdAt:  '',
    updatedAt: '',
    trips: [], 
};

export const initialDriverRequest: DriverRequest = {
    name: '',
    responsibility: '',
    qualification: '',
    salary: 0,
    createdAt: '',
    updatedAt: '',
    trips: [], // 
};
