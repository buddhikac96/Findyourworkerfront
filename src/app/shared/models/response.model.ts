export interface ServerResponse {
    result: {
        centerOfMap: {
            longitude: string;
            latitude: string;
        };
        workers: Array<any>;
    };
    status: number;
    message: string;
}
