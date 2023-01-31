import { Answers, socionicsFunctions, vector } from './App';
import {questions} from './data/questions';
import { questionsKeys } from './App';
interface priorityQuestionData {
    characterAnswers: Answers;
    answersByPriority: socionicsFunctions[];
}
interface priorityQuestionProps extends priorityQuestionData {
    nextStage: () => void;
    changeData: (data: Partial<priorityQuestionData>) => void;
}

const PriorityStageMarkup = ({
    nextStage,
    changeData,
    characterAnswers,
    answersByPriority,
}: priorityQuestionProps) => {
    return (
        <>
            <div className="app-header">
                <div className="inscription">
                    <div className="inscription-content">
                        Сравни позиции своего выбора и определись с
                        приоритетностью, расставив номера от 1-го до 4-х – что
                        станешь делать скорее, что потом и, наконец, что в
                        последнюю очередь?
                    </div>
                </div>
            </div>
            <div className="app-body">
                <form
                    className="priority-choices"
                    id="form-test"
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        nextStage();
                    }}
                >
                    {questionsKeys.map((answer, index) => {
                        return (
                            <label key={answer}>
                                <input
                                    type="checkbox"
                                    name="option"
                                    required
                                    checked={answersByPriority.includes(
                                        answer as socionicsFunctions
                                    )}
                                    onChange={() => {
                                        if (
                                            answersByPriority.includes(
                                                answer as socionicsFunctions
                                            )
                                        ) {
                                            return changeData({
                                                answersByPriority: [],
                                            });
                                        }

                                        answersByPriority.push(
                                            answer as socionicsFunctions
                                        );
                                        return changeData({
                                            answersByPriority:
                                                answersByPriority,
                                        });
                                    }}
                                />
                                <div
                                    className={`cloud-option option-${
                                        index + 1
                                    }`}
                                >
                                    <h2 className="option-order">
                                        {answersByPriority.includes(
                                            answer as socionicsFunctions
                                        )
                                            ? answersByPriority.indexOf(
                                                  answer as socionicsFunctions
                                              ) + 1
                                            : null}
                                    </h2>
                                    <p className="option-caption">
                                        {
                                            questions[
                                                answer as keyof typeof questions
                                            ][characterAnswers[answer] - 1]
                                        }
                                    </p>
                                </div>
                            </label>
                        );
                    })}
                </form>
            </div>
            <div className="app-footer">
                {answersByPriority.length ===
                Object.keys(characterAnswers).length ? (
                    <button
                        className="btn btn-primary"
                        form="form-test"
                    >
                        Далее
                    </button>
                ) : null}
            </div>
        </>
    );
};

export default PriorityStageMarkup;
