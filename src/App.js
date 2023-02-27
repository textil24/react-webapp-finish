import './App.css';
import {useEffect} from "react";
import LeaderboardPage from "./pages/LeaderboardPage/LeaderboardPage";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import CoursePage from "./pages/CoursePage/CoursePage";


const tg = window.Telegram.WebApp

function App() {

    useEffect(() => {
        tg.ready()
    }, [])

    const onClose = () => {
        tg.close()
    }

    return (
        <div className="App">
            {/*<CoursePage />*/}
            {/*<QuizPage />*/}
            <HomePage />
            {/*<LeaderboardPage />*/}
        </div>
    );
}

export default App;
