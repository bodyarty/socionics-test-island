import React from 'react';

const QuestionsMarkup = () => {
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
                <form className='signs-wrapper'>
                        <div className="sign left">
                            <div className="sign-caption">
                                Вы СРАЗУ начинаете строить дом (шалаш) из
                                подручных материалов
                            </div>
                            <label className="sign-choice">
                                <input
                                    type="radio"
                                    name="question"
                                />
                                <span className="sign-value"></span>
                            </label>
                        </div>
                        <div className="sign right">
                            <div className="sign-caption">
                                Вы СРАЗУ начинаете строить дом (шалаш) из
                                подручных материалов
                            </div>
                            <label className="sign-choice">
                                <input
                                    type="radio"
                                    name="question"
                                />
                                <span className="sign-value"></span>
                            </label>
                        </div>
                </form>
            </div>
            <div className="app-footer">
                <button className="btn btn-primary">Далее</button>
            </div>
        </>
    );
};

export default QuestionsMarkup;
