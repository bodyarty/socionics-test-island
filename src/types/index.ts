export enum SocionicsFunction {
    logics = 'logics',
    sensorics = 'sensorics',
    ethics = 'ethics',
    intuition = 'intuition',
}

export enum Vector {
    black = 1,
    white = 2,
}

export enum Sex {
    male = 'male',
    female = 'female',
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
