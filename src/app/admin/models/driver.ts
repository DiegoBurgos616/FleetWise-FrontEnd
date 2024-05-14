
export interface Driver {
    id?:number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    licenseNumber: number;
    curp: string;
    address: string;
    monthlysalary: number;
}

export type DriverRequest = Omit<Driver, 'id'>;

export const initialDriverState: Driver = {
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    licenseNumber: 0,
    curp:  '',
    address: '',
    monthlysalary: 0,
};

export const initialDriverRequest: DriverRequest = {
    
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    licenseNumber: 0,
    curp: '',
    address: '',
    monthlysalary: 0,
};
