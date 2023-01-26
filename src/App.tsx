import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1 className='title-accent'>Forbidden Island</h1>
            <div className="block">Yellow</div>
        </div>
    );
}

export default App;
