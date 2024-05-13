export interface Vehicle {
    id?: string;
    brand: string;
    model: string;
    vin: string;
    plate: string;
    purchaseDate: string;
    cost: number;
    photoUrl: string;
    entryDate: string;
}

export type VehicleRequest = Omit<Vehicle, 'id'>;

export const initialVehicleState: Vehicle = {
    id: "",
    brand: "",
    model: "",
    vin: "",
    plate: "",
    purchaseDate: "",
    cost: 0,
    photoUrl: "",
    entryDate: "",
};

export const initialVehicleRequest: VehicleRequest = {
    brand: "",
    model: "",
    vin: "",
    plate: "",
    purchaseDate: "",
    cost: 0,
    photoUrl: "",
    entryDate: "",
};