
export interface AssignmentHistory {
    id?:number;
    vehicleId: number;
    driverId: number;
}

export type AssignmentHistoryRequest = Omit<AssignmentHistory, 'id'>;

export const initialAssignmentHistoryState: AssignmentHistory = {
    vehicleId: 0,
    driverId: 0,
};

export const initialAssignmentHistoryRequest: AssignmentHistoryRequest = {
    vehicleId: 0,
    driverId: 0,
};
