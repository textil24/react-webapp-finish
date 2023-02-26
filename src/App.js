import './App.css';
import {useEffect} from "react";
import LeaderboardPage from "./pages/LeaderboardPage/LeaderboardPage";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";


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
            <QuizPage />
            {/*<HomePage />*/}
            {/*<LeaderboardPage />*/}
        </div>
    );
}

export default App;
