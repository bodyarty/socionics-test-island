import CreateUserMarkup from './CreateUserMarkup';
import MainScreenMarkup from './MainScreenMarkup';
import PriorityStageMarkup from './PriorityStageMarkup';
import QuestionsMarkup from './QuestionsMarkup';

function App() {

    return (
        <div className="app content-container character-man screen-priority">
            {/* <MainScreenMarkup/> */}
            {/* <CreateUserMarkup/> */}
            {/* <QuestionsMarkup /> */}
            <PriorityStageMarkup />
        </div>
    );
}

export default App;
