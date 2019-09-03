export interface LoginResponse {
    status: number;
    result: {
        sessionType: string;
        sessionEmail: string;
        UserId: string;
    };
    message: string;
}

export interface RegisterResponse {
    status: number;
    result: string;
    message: string;
}

export interface WorkerProfile {
    FirstName: string;
    LastName: string;
    BaseLocation: string;
    ContactNumber: string;
    ImgUrl: string;
    status: boolean;
}

export interface WorkerSkill {
    SkillTitle: string;
    HourlyCharge: string;
    Description: string;
}
