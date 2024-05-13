//import { Trip } from "./trip";

export interface Driver {
    firstName: string;
    lastName: string;
    birthDate: string;
    licenseNumber: number;
    curp: string;
    address: string;
    monthlySalary: number;
}

export type DriverRequest = Omit<Driver, 'id'>;

export const initialDriverState: Driver = {
    firstName: '',
    lastName: '',
    birthDate: '',
    licenseNumber: 0,
    curp:  '',
    address: '',
    monthlySalary: 0,
};

export const initialDriverRequest: DriverRequest = {
    firstName: '',
    lastName: '',
    birthDate: '',
    licenseNumber: 0,
    curp: '',
    address: '',
    monthlySalary: 0,
};
