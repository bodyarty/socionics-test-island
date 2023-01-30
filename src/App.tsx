import { useEffect, useState } from 'react';
import CreateUserMarkup from './CreateUserMarkup';
import MainScreenMarkup from './MainScreenMarkup';
import PriorityStageMarkup from './PriorityStageMarkup';
import QuestionsMarkup from './QuestionsMarkup';
import ResultMarkup from './ResultMarkup';
import questions from './data/questions.json';

export enum socionicsFunctions {
    logics,
    sensorics,
    ethics,
    intuition,
}

export enum vector {
    black = 1,
    white = 2,
}

export interface answers {
    logics?: vector;
    sensorics?: vector;
    ethics?: vector;
    intuition?: vector;
}
interface data {
    name: string;
    sex: '' | 'male' | 'female';
    answers: answers;
    answersByPriority: socionicsFunctions[];
}

function App() {
    const INITIAL_APP_DATA: data = {
        name: 'Alex',
        sex: 'male',
        answers: {},
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
        if (currentStage !== 0 && currentStage !== 1 && data.sex) {
            additionalClasses = ` character-${data.sex}`;
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

    const stagesQuestions = Object.keys(questions).map((socionicsFunction) => {
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
        <ResultMarkup />,
    ];

    return <div className={appClasses}>{stages[currentStage]}</div>;
}

export default App;
