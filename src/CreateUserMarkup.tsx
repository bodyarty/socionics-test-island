interface createUserData {
    name: string;
    sex: '' | 'male' | 'female';
}
interface createUserProps {
    nextStage: () => void;
    changeData: (data: Partial<createUserData>) => void;
}

const CreateUserMarkup = ({ nextStage, changeData }: createUserProps) => {
    return (
        <>
            <div className="app-header">
                <h1 className="title-accent">ДАВАЙ ЗНАКОМИТЬСЯ</h1>
            </div>
            <div className="app-body">
                <div className="inscription">
                    <div className="inscription-content">
                        <h2 className="inscription-title">
                            Напиши свое имя и выбери свой прототип
                        </h2>
                        <form className="user-setup">
                            <input
                                type="text"
                                placeholder="Имя"
                                className="user-name"
                            />
                            <div className="user-selection">
                                <label className="user-figure-wrapper user-male">
                                    <input
                                        type="radio"
                                        name="user"
                                    />
                                    <div className="user-figure">
                                        <img
                                            src="/src/assets/images/man.png"
                                            alt="Man figure"
                                        />
                                    </div>
                                </label>
                                <label className="user-figure-wrapper user-female">
                                    <input
                                        type="radio"
                                        name="user"
                                        id=""
                                    />
                                    <div className="user-figure">
                                        <img
                                            src="/src/assets/images/woman.png"
                                            alt="Man figure"
                                        />
                                    </div>
                                </label>
                            </div>
                        </form>
                    </div>
                    {true ? (
                        <button
                            className="btn"
                            onClick={nextStage}
                        >
                            Далее
                        </button>
                    ) : null}
                </div>
            </div>
            <div className="app-footer"></div>
        </>
    );
};

export default CreateUserMarkup;
