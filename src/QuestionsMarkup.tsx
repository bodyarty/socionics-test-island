import { answers, socionicsFunctions, vector } from './App';
import questions from './data/questions.json';

interface questionData {
    answers: answers;
}
interface questionProps  extends questionData {
    nextStage: () => void;
    changeData: (data: Partial<questionData>) => void;
    socionicsFunction: socionicsFunctions | string;
}

const QuestionsMarkup = ({
    nextStage,
    changeData,
    socionicsFunction,
    answers,
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
                            {questions[socionicsFunction][0]}
                        </div>
                        <label className="sign-choice">
                            <input
                                type="radio"
                                name="question"
                                required
                                onChange={() => {
                                    changeData({
                                        answers: {
                                            ...answers,
                                            [socionicsFunction]: vector.black,
                                        },
                                    });
                                }}
                                checked={
                                    answers[socionicsFunction] === vector.black
                                }
                            />
                            <span className="sign-value"></span>
                        </label>
                    </div>
                    <div className="sign right">
                        <div className="sign-caption">
                            {questions[socionicsFunction][1]}
                        </div>
                        <label className="sign-choice">
                            <input
                                type="radio"
                                name="question"
                                required
                                onChange={() => {
                                    changeData({
                                        answers: {
                                            ...answers,
                                            [socionicsFunction]: vector.white,
                                        },
                                    });
                                }}
                                checked={
                                    answers[socionicsFunction] === vector.white
                                }
                            />
                            <span className="sign-value"></span>
                        </label>
                    </div>
                </form>
            </div>
            <div className="app-footer">
                {answers[socionicsFunction] ? (
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
