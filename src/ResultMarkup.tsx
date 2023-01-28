import React from 'react';

const ResultMarkup = () => {
    return (
        <>
            <div className="app-header">
                <div className="inscription">
                    <div className="inscription-content">
                        Александр, поздравляем с успешным прохождением теста! Из
                        16-ти возможных вариантов психотипа стоит внимательно
                        ознакомиться с двумя и получить наши рекомендации:
                    </div>
                </div>
            </div>
            <div className="app-body">
                <div className="results">
                    <div className="scroll left">
                        <h2 className="scroll-title title-accent">Достоевский</h2>
                        <p className="scroll-character-info">
                            Главная его черта — гуманизм и сочувствие к людям.
                            Со всеми поддерживает ровные, доброжелательные
                            отношения. Миротворец: умеет примирить враждебные
                            стороны, но при этом оставаться объективным.
                            Выслушивая людей, снимает их эмоциональное
                            напряжение. Не копит в себе зла, прощает своих
                            обидчиков и недоброжелателей.
                        </p>
                        <button className="btn-link">Рекомендации</button>
                    </div>
                    <div className="scroll right">
                        <h2 className="scroll-title title-accent">Драйзер</h2>
                        <p className="scroll-character-info">
                            Принципиален и выдержан. Хорошо чувствует
                            недоброжелателей, резко деля людей на своих и чужих.
                            Дает моральную оценку поступкам человека, когда
                            общается в своем кругу. Поддерживает порядок и
                            чистоту на своей территории. Не признает дружбы и
                            любви без взаимности.
                        </p>
                        <button className="btn-link">Рекомендации</button>
                    </div>
                </div>
            </div>
            <div className="app-footer">
                <button className="btn">Выбрать курс</button>
            </div>
        </>
    );
};

export default ResultMarkup;
