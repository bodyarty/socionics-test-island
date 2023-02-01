import { useState } from 'react';
import { charactersDescription } from '../data/charactersDescription';

interface ScrollProps {
    side: string;
    result: keyof typeof charactersDescription;
}

const Scroll = ({ side, result }: ScrollProps) => {
    const [isInfoDescription, setIsInfoDescription] = useState(true);
    function changeInfo() {
        setIsInfoDescription(!isInfoDescription);
    }
    return (
        <div className={`scroll ${side}`}>
            <h2 className="scroll-title title-accent">
                {charactersDescription[result].name}
            </h2>
            <p className="scroll-character-info">
                {isInfoDescription
                    ? charactersDescription[result].description
                    : charactersDescription[result].recommendations}
                {}
            </p>
            <button
                className="btn-link"
                onClick={changeInfo}
            >
                {isInfoDescription ? 'Рекомендации' : 'Описание'}
            </button>
        </div>
    );
};

export default Scroll;
