import { useState } from 'react';
import { charactersDescription } from '../data/charactersDescription';

interface ScrollProps {
    side: string;
    result: keyof typeof charactersDescription;
}

const Scroll = ({ side, result }: ScrollProps) => {
    return (
        <div className={`scroll ${side}`}>
            <h2 className="scroll-title title-accent">
                {charactersDescription[result].name}
            </h2>
            <p className="scroll-character-info">
                {charactersDescription[result].description}
            </p>
        </div>
    );
};

export default Scroll;
