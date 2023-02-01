import { questions } from '../data/questions';
import { SocionicsFunction, TestData } from '../types';

type PriorityData = Pick<TestData, 'characterAnswers' | 'answersByPriority'>;

interface StagePriorityProps extends PriorityData {
    nextStage: () => void;
    changeData: (data: Partial<PriorityData>) => void;
}

const StagePriority = ({
    nextStage,
    changeData,
    characterAnswers,
    answersByPriority,
}: StagePriorityProps) => {
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
                    {Object.values<SocionicsFunction>(SocionicsFunction).map(
                        (answer, index) => {
                            return (
                                <label key={answer}>
                                    <input
                                        type="checkbox"
                                        name={`option-${index}`}
                                        required
                                        checked={answersByPriority.includes(
                                            answer as SocionicsFunction
                                        )}
                                        onChange={() => {
                                            if (
                                                answersByPriority.includes(
                                                    answer as SocionicsFunction
                                                )
                                            ) {
                                                return changeData({
                                                    answersByPriority: [],
                                                });
                                            }

                                            answersByPriority.push(
                                                answer as SocionicsFunction
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
                                                answer as SocionicsFunction
                                            )
                                                ? answersByPriority.indexOf(
                                                      answer as SocionicsFunction
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
                        }
                    )}
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

export default StagePriority;
