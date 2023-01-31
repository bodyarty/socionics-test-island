import { Answers, socionicsFunctions, vector } from './App';
import Scroll from './components/Scroll';
import { description } from './data/description';

interface priorityQuestionProps {
    name: string;
    characterAnswers: Answers;
    answersByPriority: socionicsFunctions[];
}
export interface Result {
    firstType?: keyof typeof description;
    secondType?: keyof typeof description;
}

const ResultMarkup = ({
    name,
    answersByPriority,
    characterAnswers,
}: priorityQuestionProps) => {
    let result: Result = {};

    if (answersByPriority[3] === socionicsFunctions.logics) {
        if (
            answersByPriority[0] === socionicsFunctions.ethics ||
            answersByPriority[1] === socionicsFunctions.ethics
        ) {
            if (characterAnswers[socionicsFunctions.ethics] === vector.black) {
                result.firstType = 'yesenin';
                result.secondType = 'dumas';
            }
            if (characterAnswers[socionicsFunctions.ethics] === vector.white) {
                result.firstType = 'huxley';
                result.secondType = 'nap';
            }
        }
    }
    if (answersByPriority[3] === socionicsFunctions.sensorics) {
        if (
            answersByPriority[0] === socionicsFunctions.intuition ||
            answersByPriority[1] === socionicsFunctions.intuition
        ) {
            if (
                characterAnswers[socionicsFunctions.intuition] === vector.black
            ) {
                result.firstType = 'dost';
                result.secondType = 'rob';
            }
            if (
                characterAnswers[socionicsFunctions.intuition] === vector.white
            ) {
                result.firstType = 'dost';
                result.secondType = 'rob';
            }
        }
    }
    if (answersByPriority[3] === socionicsFunctions.ethics) {
        if (
            answersByPriority[0] === socionicsFunctions.logics ||
            answersByPriority[1] === socionicsFunctions.logics
        ) {
            if (characterAnswers[socionicsFunctions.logics] === vector.black) {
                result.firstType = 'balzac';
                result.secondType = 'gabin';
            }
            if (characterAnswers[socionicsFunctions.logics] === vector.white) {
                result.firstType = 'zhukov';
                result.secondType = 'don';
            }
        }
    }
    if (answersByPriority[3] === socionicsFunctions.intuition) {
        if (
            answersByPriority[0] === socionicsFunctions.sensorics ||
            answersByPriority[1] === socionicsFunctions.sensorics
        ) {
            if (
                characterAnswers[socionicsFunctions.sensorics] === vector.black
            ) {
                result.firstType = 'dreiser';
                result.secondType = 'maksim';
            }
            if (
                characterAnswers[socionicsFunctions.sensorics] === vector.white
            ) {
                result.firstType = 'hugo';
                result.secondType = 'stir';
            }
        }
    }

    const isSuccess: boolean = !!(result.firstType && result.secondType);

    return (
        <>
            <div className="app-header">
                <div className="inscription">
                    <div className="inscription-content">
                        {isSuccess ? (
                            <>
                                {name}, поздравляем с успешным прохождением
                                теста! Из 16-ти возможных вариантов психотипа
                                стоит внимательно ознакомиться с двумя и
                                получить наши рекомендации:
                            </>
                        ) : (
                            <>
                                {name}, к сожалению результаты теста
                                противоречивы, и нельзя точно определить какой у
                                вас тип. Попробуйте пройти тест снова.
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="app-body">
                {isSuccess ? (
                    <div className="results">
                        <Scroll
                            side="left"
                            result={result.firstType!}
                        />
                        <Scroll
                            side="right"
                            result={result.secondType!}
                        />
                    </div>
                ) : null}
            </div>
            <div className="app-footer">
                {isSuccess ? (
                    <button
                        className="btn"
                        onClick={() =>
                            (document.location.href =
                                'http://livesocionics.ru/trainings/shedule')
                        }
                    >
                        Выбрать курс
                    </button>
                ) : (
                    <button
                        className="btn"
                        onClick={() => (document.location.href = '/')}
                    >
                        Попробовать снова
                    </button>
                )}
            </div>
        </>
    );
};

export default ResultMarkup;
