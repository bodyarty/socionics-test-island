import CreateUserMarkup from './CreateUserMarkup';
import MainScreenMarkup from './MainScreenMarkup';
import QuestionsMarkup from './QuestionsMarkup';

function App() {

    return (
        <div className="app content-container character-man screen-question">
            {/* <MainScreenMarkup/> */}
            {/* <CreateUserMarkup/> */}
            <QuestionsMarkup />
        </div>
    );
}

export default App;
