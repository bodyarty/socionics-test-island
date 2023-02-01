import { useEffect, useState } from 'react';

import StageOpening from './stages/StageOpening';
import StageCharacterCreate from './stages/StageCharacterCreate';
import StageQuestion from './stages/StageQuestion';
import StagePriority from './stages/StagePriority';
import StageResult from './stages/StageResult';

import { Answers, Sex, SocionicsFunction, TestData } from './types';

function App() {
    const INITIAL_APP_DATA: TestData = {
        name: '',
        characterSex: '' as Sex,
        characterAnswers: {} as Answers,
        answersByPriority: [],
    };

    const [data, setData] = useState<TestData>(INITIAL_APP_DATA);
    const [currentStage, setCurrentStage] = useState(0);
    const [appClasses, setAppClasses] = useState<string[]>([]);

    const changeData = function (data: Partial<TestData>) {
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
        let additionalClasses: string[] = [];
        if (currentStage > 1 && data.characterSex) {
            additionalClasses.push(`character-${data.characterSex}`);
            if (currentStage > 1 && currentStage < 6) {
                additionalClasses.push('stage-question');
            }

            if (currentStage === 6) {
                additionalClasses.push('stage-priority');
            }

            if (currentStage === 7) {
                additionalClasses.push('stage-result');
            }

            setAppClasses(additionalClasses);
        }
    }, [currentStage]);

    const stagesQuestions = Object.values<SocionicsFunction>(
        SocionicsFunction
    ).map((currentSocionicsFunction) => {
        return (
            <StageQuestion
                nextStage={nextStage}
                changeData={changeData}
                currentSocionicsFunction={currentSocionicsFunction}
                {...data}
            />
        );
    });

    const stages = [
        <StageOpening nextStage={nextStage} />,
        <StageCharacterCreate
            nextStage={nextStage}
            changeData={changeData}
            {...data}
        />,
        ...stagesQuestions,
        <StagePriority
            nextStage={nextStage}
            changeData={changeData}
            {...data}
        />,
        <StageResult {...data} />,
    ];

    return (
        <div className={'app content-container ' + appClasses.join(' ')}>
            {stages[currentStage]}
        </div>
    );
}

export default App;
