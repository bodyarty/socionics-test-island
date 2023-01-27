import { useState } from 'react';
import CreateUserMarkup from './CreateUserMarkup';
import MainScreenMarkup from './MainScreenMarkup';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="app content-container">
            {/* <MainScreenMarkup/> */}
            <CreateUserMarkup/>
        </div>
    );
}

export default App;
