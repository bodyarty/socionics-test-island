export enum SocionicsFunction {
    Logics = 'logics',
    Sensorics = 'sensorics',
    Ethics = 'ethics',
    Intuition = 'intuition',
}

export enum Vector {
    Black = 1,
    White = 2,
}

export enum Sex {
    Male = 'male',
    Female = 'female',
}

export type Answers = {
    [key in SocionicsFunction]: Vector;
};

export interface TestData {
    name: string;
    characterSex: Sex;
    characterAnswers: Answers;
    answersByPriority: SocionicsFunction[];
}
