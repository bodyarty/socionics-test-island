import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="app content-container">
            <h1 className="title-accent">Forbidden Island</h1>
        </div>
    );
}

export default App;
