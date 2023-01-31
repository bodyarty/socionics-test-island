import { data, sex } from './App';


type createUserData = Pick<data, 'name' | 'characterSex'>
interface createUserProps extends createUserData {
    nextStage: () => void;
    changeData: (data: Partial<createUserData>) => void;
}

const CreateUserMarkup = ({
    nextStage,
    changeData,
    name,
    characterSex,
}: createUserProps) => {
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
                        <form
                            id="form-test"
                            className="user-setup"
                            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                                e.preventDefault();
                                nextStage();
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Имя"
                                className="user-name"
                                required
                                defaultValue={name}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    changeData({ name: e.target.value });
                                }}
                            />
                            <div className="user-selection">
                                <label className="user-figure-wrapper user-male">
                                    <input
                                        type="radio"
                                        name="user"
                                        required
                                        checked={characterSex === sex.male}
                                        onChange={() => {
                                            changeData({
                                                characterSex: sex.male,
                                            });
                                        }}
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
                                        required
                                        checked={characterSex === sex.female}
                                        onChange={() => {
                                            changeData({
                                                characterSex: sex.female,
                                            });
                                        }}
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
                </div>
            </div>
            <div className="app-footer">
                {characterSex && name ? (
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

export default CreateUserMarkup;
