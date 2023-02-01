import { description } from '../data/charactersDescription';

interface ScrollProps {
    side: string;
    result: keyof typeof description;
}

const Scroll = ({ side, result }: ScrollProps) => {
    return (
        <div className={`scroll ${side}`}>
            <h2 className="scroll-title title-accent">
                {description[result].name}
            </h2>
            <p className="scroll-character-info">
                {description[result].description}
            </p>
            <button className="btn-link">Рекомендации</button>
        </div>
    );
};

export default Scroll;
