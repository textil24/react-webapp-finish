import './App.css';
import {useEffect} from "react";
import LeaderboardPage from "./pages/LeaderboardPage/LeaderboardPage";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import CoursePage from "./pages/CoursePage/CoursePage";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import QuizAndCourse from "./pages/QuizAndCourse/QuizAndCourse";
import Course from "./components/Course/Course";


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
            <Header />

            <Routes>
                <Route path="/" element={<QuizAndCourse title="Квизы и курсы от" sort={0} />} />
                <Route path="/domi" element={<HomePage />} />
                <Route path="/quizzes" element={<QuizAndCourse title="Квизы от" sort={1}/>} />
                <Route path="/courses" element={<QuizAndCourse title="Курсы от" sort={2}/>} />
                <Route path="/course" element={<Course />} />
                <Route path="/leaderboards" element={<LeaderboardPage />} />
            </Routes>

        </div>
    );
}

export default App;
