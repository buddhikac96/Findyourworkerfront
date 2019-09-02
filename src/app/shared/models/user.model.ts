export interface LoginResponse {
    status: number;
    result: {
        sessionType: string;
        sessionEmail: string;
    };
    message: string;
}

export interface RegisterResponse {
    status: number;
    result: string;
    message: string;
}
