import { answers, socionicsFunctions } from './App';
import questions from './data/questions.json';
interface priorityQuestionData {
    answers: answers;
    answersByPriority: socionicsFunctions[];
}
interface priorityQuestionProps extends priorityQuestionData {
    nextStage: () => void;
    changeData: (data: Partial<priorityQuestionData>) => void;
}

const PriorityStageMarkup = ({
    nextStage,
    changeData,
    answers,
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
                    <label>
                        <input
                            type="checkbox"
                            name="option"
                            required
                            checked={answersByPriority.includes(
                                socionicsFunctions.logics
                            )}
                            onChange={() => {
                                if (
                                    answersByPriority.includes(
                                        socionicsFunctions.logics
                                    )
                                ) {
                                    return changeData({
                                        answersByPriority: [],
                                    });
                                }
                                answersByPriority.push(
                                    socionicsFunctions.logics
                                );
                                return changeData({
                                    answersByPriority: answersByPriority,
                                });
                            }}
                        />
                        <div className="cloud-option option-1">
                            <h2 className="option-order">
                                {answersByPriority.includes(
                                    socionicsFunctions.logics
                                )
                                    ? answersByPriority.indexOf(
                                          socionicsFunctions.logics
                                      ) + 1
                                    : null}
                            </h2>
                            <p className="option-caption">
                                {questions.logics[answers.logics - 1]}
                            </p>
                        </div>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="option"
                            required
                            checked={answersByPriority.includes(
                                socionicsFunctions.sensorics
                            )}
                            onChange={() => {
                                if (
                                    answersByPriority.includes(
                                        socionicsFunctions.sensorics
                                    )
                                ) {
                                    return changeData({
                                        answersByPriority: [],
                                    });
                                }

                                answersByPriority.push(
                                    socionicsFunctions.sensorics
                                );

                                return changeData({
                                    answersByPriority: answersByPriority,
                                });
                            }}
                        />
                        <div className="cloud-option option-2">
                            <h2 className="option-order">
                                {answersByPriority.includes(
                                    socionicsFunctions.sensorics
                                )
                                    ? answersByPriority.indexOf(
                                          socionicsFunctions.sensorics
                                      ) + 1
                                    : null}
                            </h2>
                            <p className="option-caption">
                                {questions.sensorics[answers.sensorics - 1]}
                            </p>
                        </div>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="option"
                            required
                            checked={answersByPriority.includes(
                                socionicsFunctions.ethics
                            )}
                            onChange={() => {
                                if (
                                    answersByPriority.includes(
                                        socionicsFunctions.ethics
                                    )
                                ) {
                                    return changeData({
                                        answersByPriority: [],
                                    });
                                }
                                answersByPriority.push(
                                    socionicsFunctions.ethics
                                );
                                return changeData({
                                    answersByPriority: answersByPriority,
                                });
                            }}
                        />
                        <div className="cloud-option option-3">
                            <h2 className="option-order">
                                {answersByPriority.includes(
                                    socionicsFunctions.ethics
                                )
                                    ? answersByPriority.indexOf(
                                          socionicsFunctions.ethics
                                      ) + 1
                                    : null}
                            </h2>
                            <p className="option-caption">
                                {questions.ethics[answers.ethics - 1]}
                            </p>
                        </div>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="option"
                            required
                            checked={answersByPriority.includes(
                                socionicsFunctions.intuition
                            )}
                            onChange={() => {
                                if (
                                    answersByPriority.includes(
                                        socionicsFunctions.intuition
                                    )
                                ) {
                                    return changeData({
                                        answersByPriority: [],
                                    });
                                }

                                answersByPriority.push(
                                    socionicsFunctions.intuition
                                );
                                return changeData({
                                    answersByPriority: answersByPriority,
                                });
                            }}
                        />
                        <div className="cloud-option option-4">
                            <h2 className="option-order">
                                {answersByPriority.includes(
                                    socionicsFunctions.intuition
                                )
                                    ? answersByPriority.indexOf(
                                          socionicsFunctions.intuition
                                      ) + 1
                                    : null}
                            </h2>
                            <p className="option-caption">
                                {questions.intuition[answers.intuition - 1]}
                            </p>
                        </div>
                    </label>
                </form>
            </div>
            <div className="app-footer">
                {answersByPriority.length === Object.keys(answers).length ? (
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
