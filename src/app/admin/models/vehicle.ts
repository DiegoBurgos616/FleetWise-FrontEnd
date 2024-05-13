export interface Vehicle {
    brand: string;
    model: string;
    vin: string;
    plate: string;
    purchasedDate: string;
    cost: number;
    photoUrl?: string;
}

export type VehicleRequest = Omit<Vehicle, 'id'>;

export const initialVehicleState: Vehicle = {
    brand: "",
    model: "",
    vin: "",
    plate: "",
    purchasedDate: "",
    cost: 0,
    photoUrl: "",
};

export const initialVehicleRequest: VehicleRequest = {
    brand: "",
    model: "",
    vin: "",
    plate: "",
    purchasedDate: "",
    cost: 0,
    photoUrl: "",
};