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

export class WorkerProfile {
    firstName: string;
    lastName: string;
    BaseLocation: string;
    ContactNumber: string;
    ImgUrl: string;
    status: boolean;
}

export class WorkerSkill {
    SkillTitle: string;
    HourlyCharge: string;
    Description: string;
    SkillId: number;
}
