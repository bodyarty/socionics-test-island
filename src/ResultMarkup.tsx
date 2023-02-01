import Scroll from './components/Scroll';
import { charactersDescription } from './data/charactersDescription';
import { Answers, SocionicsFunction, Vector } from './types';

interface priorityQuestionProps {
    name: string;
    characterAnswers: Answers;
    answersByPriority: SocionicsFunction[];
}
export interface Result {
    firstType?: keyof typeof charactersDescription;
    secondType?: keyof typeof charactersDescription;
}

const ResultMarkup = ({
    name,
    answersByPriority,
    characterAnswers,
}: priorityQuestionProps) => {
    let result: Result = {};

    if (answersByPriority[3] === SocionicsFunction.logics) {
        if (
            answersByPriority[0] === SocionicsFunction.ethics ||
            answersByPriority[1] === SocionicsFunction.ethics
        ) {
            if (characterAnswers[SocionicsFunction.ethics] === Vector.black) {
                result.firstType = 'yesenin';
                result.secondType = 'dumas';
            }
            if (characterAnswers[SocionicsFunction.ethics] === Vector.white) {
                result.firstType = 'huxley';
                result.secondType = 'nap';
            }
        }
    }
    if (answersByPriority[3] === SocionicsFunction.sensorics) {
        if (
            answersByPriority[0] === SocionicsFunction.intuition ||
            answersByPriority[1] === SocionicsFunction.intuition
        ) {
            if (
                characterAnswers[SocionicsFunction.intuition] === Vector.black
            ) {
                result.firstType = 'dost';
                result.secondType = 'rob';
            }
            if (
                characterAnswers[SocionicsFunction.intuition] === Vector.white
            ) {
                result.firstType = 'dost';
                result.secondType = 'rob';
            }
        }
    }
    if (answersByPriority[3] === SocionicsFunction.ethics) {
        if (
            answersByPriority[0] === SocionicsFunction.logics ||
            answersByPriority[1] === SocionicsFunction.logics
        ) {
            if (characterAnswers[SocionicsFunction.logics] === Vector.black) {
                result.firstType = 'balzac';
                result.secondType = 'gabin';
            }
            if (characterAnswers[SocionicsFunction.logics] === Vector.white) {
                result.firstType = 'zhukov';
                result.secondType = 'don';
            }
        }
    }
    if (answersByPriority[3] === SocionicsFunction.intuition) {
        if (
            answersByPriority[0] === SocionicsFunction.sensorics ||
            answersByPriority[1] === SocionicsFunction.sensorics
        ) {
            if (
                characterAnswers[SocionicsFunction.sensorics] === Vector.black
            ) {
                result.firstType = 'dreiser';
                result.secondType = 'maksim';
            }
            if (
                characterAnswers[SocionicsFunction.sensorics] === Vector.white
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
