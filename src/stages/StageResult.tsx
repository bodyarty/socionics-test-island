import Scroll from '../components/Scroll';
import { charactersDescription } from '../data/charactersDescription';
import { SocionicsFunction, TestData, Vector } from '../types';

type ResultData = Pick<
    TestData,
    'name' | 'characterAnswers' | 'answersByPriority'
>;

interface StageResultProps extends ResultData {}

export interface Result {
    firstType?: keyof typeof charactersDescription;
    secondType?: keyof typeof charactersDescription;
}

const StageResult = ({
    name,
    answersByPriority,
    characterAnswers,
}: StageResultProps) => {
    let result: Result = {};

    if (answersByPriority[3] === SocionicsFunction.Logics) {
        if (
            answersByPriority[0] === SocionicsFunction.Ethics ||
            answersByPriority[1] === SocionicsFunction.Ethics
        ) {
            if (characterAnswers[SocionicsFunction.Ethics] === Vector.Black) {
                result.firstType = 'yesenin';
                result.secondType = 'dumas';
            }
            if (characterAnswers[SocionicsFunction.Ethics] === Vector.White) {
                result.firstType = 'huxley';
                result.secondType = 'nap';
            }
        }
    }
    if (answersByPriority[3] === SocionicsFunction.Sensorics) {
        if (
            answersByPriority[0] === SocionicsFunction.Intuition ||
            answersByPriority[1] === SocionicsFunction.Intuition
        ) {
            if (
                characterAnswers[SocionicsFunction.Intuition] === Vector.Black
            ) {
                result.firstType = 'dost';
                result.secondType = 'rob';
            }
            if (
                characterAnswers[SocionicsFunction.Intuition] === Vector.White
            ) {
                result.firstType = 'hamlet';
                result.secondType = 'jack';
            }
        }
    }
    if (answersByPriority[3] === SocionicsFunction.Ethics) {
        if (
            answersByPriority[0] === SocionicsFunction.Logics ||
            answersByPriority[1] === SocionicsFunction.Logics
        ) {
            if (characterAnswers[SocionicsFunction.Logics] === Vector.Black) {
                result.firstType = 'balzac';
                result.secondType = 'gabin';
            }
            if (characterAnswers[SocionicsFunction.Logics] === Vector.White) {
                result.firstType = 'zhukov';
                result.secondType = 'don';
            }
        }
    }
    if (answersByPriority[3] === SocionicsFunction.Intuition) {
        if (
            answersByPriority[0] === SocionicsFunction.Sensorics ||
            answersByPriority[1] === SocionicsFunction.Sensorics
        ) {
            if (
                characterAnswers[SocionicsFunction.Sensorics] === Vector.Black
            ) {
                result.firstType = 'dreiser';
                result.secondType = 'maksim';
            }
            if (
                characterAnswers[SocionicsFunction.Sensorics] === Vector.White
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
                                теста! Внимательно прочитай описания этих 2-ух
                                психотипов и выбери как итог более близкое для
                                тебя описание - как ты проявляешься в домашней
                                обстановке, с друзьями, - это и есть твой
                                природный психотип.
                            </>
                        ) : (
                            <>
                                {name}, выбранная вами комбинация не имеет
                                типологического соответствия, что
                                свидетельствует о подтипных особенностях
                                личности, рекомендуем пройти личную
                                консультацию.
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
                <button
                    className="btn"
                    onClick={() =>
                        (document.location.href =
                            'http://taplink.cc/eleanor_live_socionics')
                    }
                >
                    На сессию по профессии/отношениям
                </button>
            </div>
        </>
    );
};

export default StageResult;
