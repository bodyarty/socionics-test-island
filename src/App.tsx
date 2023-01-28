import CreateUserMarkup from './CreateUserMarkup';
import MainScreenMarkup from './MainScreenMarkup';
import PriorityStageMarkup from './PriorityStageMarkup';
import QuestionsMarkup from './QuestionsMarkup';
import ResultMarkup from './ResultMarkup';

function App() {

    return (
        <div className="app content-container character-man screen-result">
            {/* <MainScreenMarkup/> */}
            {/* <CreateUserMarkup/> */}
            {/* <QuestionsMarkup /> */}
            {/* <PriorityStageMarkup /> */}
            <ResultMarkup/>
        </div>
    );
}

export default App;
