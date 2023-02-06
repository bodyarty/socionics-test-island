import { TestData, Sex } from '../types';
import ManImg from '../assets/images/man.png';
import WomanImg from '../assets/images/woman.png';

type CharacterCreateData = Pick<TestData, 'name' | 'characterSex'>;
interface StageCharacterCreateProps extends CharacterCreateData {
    nextStage: () => void;
    changeData: (data: Partial<CharacterCreateData>) => void;
}

const StageCharacterCreate = ({
    nextStage,
    changeData,
    name,
    characterSex,
}: StageCharacterCreateProps) => {
    console.log(ManImg);
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
                                        checked={characterSex === Sex.Male}
                                        onChange={() => {
                                            changeData({
                                                characterSex: Sex.Male,
                                            });
                                        }}
                                    />
                                    <div className="user-figure">
                                        <img
                                            src={ManImg}
                                            alt="Man figure"
                                        />
                                    </div>
                                </label>
                                <label className="user-figure-wrapper user-female">
                                    <input
                                        type="radio"
                                        name="user"
                                        required
                                        checked={characterSex === Sex.Female}
                                        onChange={() => {
                                            changeData({
                                                characterSex: Sex.Female,
                                            });
                                        }}
                                    />
                                    <div className="user-figure">
                                        <img
                                            src={WomanImg}
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

export default StageCharacterCreate;
