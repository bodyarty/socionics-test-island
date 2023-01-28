import { useState } from 'react';
import CreateUserMarkup from './CreateUserMarkup';
import MainScreenMarkup from './MainScreenMarkup';
import PriorityStageMarkup from './PriorityStageMarkup';
import QuestionsMarkup from './QuestionsMarkup';
import ResultMarkup from './ResultMarkup';

interface data {
    name: string;
    sex: '' | 'male' | 'female';
    answers: string[];
    answersByPriority: string[];
}

function App() {
    const INITIAL_APP_DATA: data = {
        name: '',
        sex: '',
        answers: [],
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

    const stages = [
        <MainScreenMarkup nextStage={nextStage}/>,
        <CreateUserMarkup nextStage={nextStage} changeData={changeData} />,
        <QuestionsMarkup nextStage={nextStage} />,
        <PriorityStageMarkup nextStage={nextStage} />,
        <ResultMarkup />,
    ];

    return <div className="app content-container">{stages[currentStage]}</div>;
}

export default App;
