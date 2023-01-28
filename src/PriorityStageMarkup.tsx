import React from 'react';

const PriorityStageMarkup = () => {
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
                <div className="priority-choices">
                    <label>
                        <input
                            type="checkbox"
                            name="option"
                        />
                        <div className="cloud-option option-1">
                            <h2 className="option-order">1</h2>
                            <p className="option-caption">
                                Вы точно знаете – что делать, но пока решили
                                написать план спасения на бумаге и просчитать
                                все ЗА и ПРОТИВ
                            </p>
                        </div>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="option"
                        />
                        <div className="cloud-option option-2">
                            <h2 className="option-order">2</h2>
                            <p className="option-caption">
                                Вы отыскали шлюпку на берегу и храбро поплыли на
                                ней в океан
                            </p>
                        </div>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="option"
                        />
                        <div className="cloud-option option-3">
                            <h2 className="option-order">3</h2>
                            <p className="option-caption">
                                Вы всплакнули и написали первую запись в своем
                                путевом дневнике, обращаясь к родным и близким
                            </p>
                        </div>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="option"
                        />
                        <div className="cloud-option option-4">
                            <h2 className="option-order">4</h2>
                            <p className="option-caption">
                                Вы сохраняете спокойствие, решили помолиться и
                                уповать на господа… (варианты - заниматься
                                йогой, медитировать, положиться на судьбу…)
                            </p>
                        </div>
                    </label>
                </div>
            </div>
            <div className="app-footer">
                <button className="btn btn-primary">Далее</button>
            </div>
        </>
    );
};

export default PriorityStageMarkup;
