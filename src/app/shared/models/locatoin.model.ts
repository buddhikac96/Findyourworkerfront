export interface RealTimeWorkerLocation {
    WorkerId: number;
    FirstName: string;
    Rate: number;
    HourlyCharge: number;
    Latitude: string;
    Longitude: string;
}

export interface RealTimeWorkerLocationArray {
    recordset: Array<RealTimeWorkerLocation>;
}


export interface LocationPoint {
    latitude: string;
    longitude: string;
}
