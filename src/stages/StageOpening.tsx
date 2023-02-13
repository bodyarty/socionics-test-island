interface StageOpeningProps {
    nextStage: () => void;
}

const StageOpening = ({ nextStage }: StageOpeningProps) => {
    return (
        <>
            <div className="app-header">
                <h1 className="title-accent">
                    Тест
                    <br />
                    «НЕОБИТАЕМЫЙ ОСТРОВ»
                </h1>
                <div className="inscription">
                    <div className="inscription-content">
                        Представь себя в предложенных обстоятельствах и узнай
                        свой психотип
                    </div>
                </div>
            </div>
            <div className="app-footer">
                <button
                    className="btn"
                    onClick={nextStage}
                >
                    Далее
                </button>
            </div>
        </>
    );
};

export default StageOpening;
