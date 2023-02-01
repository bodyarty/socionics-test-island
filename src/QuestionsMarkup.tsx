import { Answers } from './App';
import { questions } from './data/questions';
import { SocionicsFunction, Vector } from './types';

interface questionData {
    characterAnswers: Answers;
}
interface questionProps extends questionData {
    nextStage: () => void;
    changeData: (data: Partial<questionData>) => void;
    currentSocionicsFunction: SocionicsFunction;
}

const QuestionsMarkup = ({
    nextStage,
    changeData,
    currentSocionicsFunction,
    characterAnswers,
}: questionProps) => {
    return (
        <>
            <div className="app-header">
                <div className="inscription">
                    <div className="inscription-content">
                        Вы попали на необитаемый остров после кораблекрушения.
                        Выберите из предложенных вариантов приоритетные действия
                        для Вас в этой непростой ситуации:
                    </div>
                </div>
            </div>
            <div className="app-body">
                <form
                    className="signs-wrapper"
                    id="form-test"
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        nextStage();
                    }}
                >
                    <div className="sign left">
                        <div className="sign-caption">
                            {questions[currentSocionicsFunction][0]}
                        </div>
                        <label className="sign-choice">
                            <input
                                type="radio"
                                name="question"
                                required
                                onChange={() => {
                                    changeData({
                                        characterAnswers: {
                                            ...characterAnswers,
                                            [currentSocionicsFunction]:
                                                Vector.black,
                                        },
                                    });
                                }}
                                checked={
                                    characterAnswers[
                                        currentSocionicsFunction
                                    ] === Vector.black
                                }
                            />
                            <span className="sign-value"></span>
                        </label>
                    </div>
                    <div className="sign right">
                        <div className="sign-caption">
                            {questions[currentSocionicsFunction][1]}
                        </div>
                        <label className="sign-choice">
                            <input
                                type="radio"
                                name="question"
                                required
                                onChange={() => {
                                    changeData({
                                        characterAnswers: {
                                            ...characterAnswers,
                                            [currentSocionicsFunction]:
                                                Vector.white,
                                        },
                                    });
                                }}
                                checked={
                                    characterAnswers[
                                        currentSocionicsFunction
                                    ] === Vector.white
                                }
                            />
                            <span className="sign-value"></span>
                        </label>
                    </div>
                </form>
            </div>
            <div className="app-footer">
                {characterAnswers[currentSocionicsFunction] ? (
                    <button
                        className="btn"
                        form="form-test"
                    >
                        Далее
                    </button>
                ) : null}
            </div>
        </>
    );
};

export default QuestionsMarkup;
