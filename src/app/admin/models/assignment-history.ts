
export interface AssignmentHistory {
    vehicleId: string;
    driverId: number;
}

export type AssignmentHistoryRequest = Omit<AssignmentHistory, 'id'>;

export const initialAssignmentHistoryState: AssignmentHistory = {
    vehicleId: '',
    driverId: 0,
};

export const initialAssignmentHistoryRequest: AssignmentHistoryRequest = {
    vehicleId: '',
    driverId: 0,
};
