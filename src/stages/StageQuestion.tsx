import { questions } from '../data/questions';
import { SocionicsFunction, TestData, Vector } from '../types';

type QuestionData = Pick<TestData, 'characterAnswers'>;
interface StageQuestionProps extends QuestionData {
    nextStage: () => void;
    changeData: (data: Partial<QuestionData>) => void;
    currentSocionicsFunction: SocionicsFunction;
}

const StageQuestion = ({
    nextStage,
    changeData,
    currentSocionicsFunction,
    characterAnswers,
}: StageQuestionProps) => {
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
                                                Vector.Black,
                                        },
                                    });
                                }}
                                checked={
                                    characterAnswers[
                                        currentSocionicsFunction
                                    ] === Vector.Black
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
                                                Vector.White,
                                        },
                                    });
                                }}
                                checked={
                                    characterAnswers[
                                        currentSocionicsFunction
                                    ] === Vector.White
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

export default StageQuestion;
