export interface SkillModel {
    SkillId: number;
    SkillTitle: string;
}

export interface SkillModelRes {
    recordset: Array<SkillModel>;
}
