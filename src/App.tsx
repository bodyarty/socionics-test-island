import { useEffect, useState } from 'react';
import CreateUserMarkup from './CreateUserMarkup';
import MainScreenMarkup from './MainScreenMarkup';
import PriorityStageMarkup from './PriorityStageMarkup';
import QuestionsMarkup from './QuestionsMarkup';
import ResultMarkup from './ResultMarkup';
import { questions } from './data/questions';

export enum socionicsFunctions {
    logics = 'logics',
    sensorics = 'sensorics',
    ethics = 'ethics',
    intuition = 'intuition',
}

export enum vector {
    black = 1,
    white = 2,
}

export type Answers = {
    [key in socionicsFunctions]: vector;
};

export enum sex {
    male = 'male',
    female = 'female',
}
export interface data {
    name: string;
    characterSex: sex;
    characterAnswers: Answers;
    answersByPriority: socionicsFunctions[];
}

export const questionsKeys = Object.keys(questions) as socionicsFunctions[];

function App() {
    const INITIAL_APP_DATA: data = {
        name: '',
        characterSex: '' as sex,
        characterAnswers: {} as Answers,
        answersByPriority: [],
    };

    const [data, setData] = useState(INITIAL_APP_DATA);
    const [currentStage, setCurrentStage] = useState(0);

    const changeData = function (data: Partial<data>) {
        setData((prev) => {
            return { ...prev, ...data };
        });
    };

    const nextStage = function () {
        setCurrentStage((prev) => {
            return prev + 1;
        });
    };

    useEffect(() => {
        let additionalClasses = '';
        if (currentStage !== 0 && currentStage !== 1 && data.characterSex) {
            additionalClasses = ` character-${data.characterSex}`;
            if (
                currentStage === 2 ||
                currentStage === 3 ||
                currentStage === 4 ||
                currentStage === 5
            ) {
                additionalClasses += ' stage-question';
            }

            if (currentStage === 6) {
                additionalClasses += ' stage-priority';
            }

            if (currentStage === 7) {
                additionalClasses += ' stage-result';
            }

            setAppClasses((prev) => {
                return prev + additionalClasses;
            });
        }
    }, [currentStage]);

    // THINK OVER SOLUTION
    const [appClasses, setAppClasses] = useState('app content-container');

    const stagesQuestions = questionsKeys.map((socionicsFunction) => {
        return (
            <QuestionsMarkup
                nextStage={nextStage}
                changeData={changeData}
                socionicsFunction={socionicsFunction}
                {...data}
            />
        );
    });

    const stages = [
        <MainScreenMarkup nextStage={nextStage} />,
        <CreateUserMarkup
            nextStage={nextStage}
            changeData={changeData}
            {...data}
        />,
        ...stagesQuestions,
        <PriorityStageMarkup
            nextStage={nextStage}
            changeData={changeData}
            {...data}
        />,
        <ResultMarkup {...data} />,
    ];

    return <div className={appClasses}>{stages[currentStage]}</div>;
}

export default App;
