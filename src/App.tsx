import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="app content-container">
            <div className="app-header">
                <h1 className="title-accent">
                    Тест
                    <br />
                    «НЕОБИТАЕМЫЙ ОСТРОВ»
                </h1>
                <div className="inscription">
                    <div className="inscription-content">
                        Определи свой психотип и узнай сильные стороны своей
                        натуры для профориентации и достижения успеха
                    </div>
                </div>
            </div>
            <div className="app-footer">
                <button className="btn btn-primary">Далее</button>
            </div>
        </div>
    );
}

export default App;
