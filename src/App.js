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
import Quiz from "./components/Quiz/Quiz";
import CourseProgramBook from "./UI/CourseProgramBook/CourseProgramBook";
import CourseProgramPlay from "./UI/CourseProgramPlay/CourseProgramPlay";


const tg = window.Telegram.WebApp

function App() {

    useEffect(() => {
        tg.ready()
    }, [])
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" element={
                    <QuizAndCourse
                        title="Квизы и курсы от"
                        sort={0}
                        category="Все"
                    />
                } />
                <Route path="/1" element={
                    <QuizAndCourse
                        title="Квизы от"
                        sort={1}
                        category="Квизы"
                    />
                } />
                <Route path="/2" element={
                    <QuizAndCourse
                        title="Курсы от"
                        sort={2}
                        category="Курсы"
                    />
                } />
                <Route path="/profile" element={<HomePage />} />
                <Route path="/course/:id" element={<Course />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/leaderboards" element={<LeaderboardPage />} />

                <Route path="/course_program_book" element={<CourseProgramBook />}/>
                <Route path="/course_program_play" element={<CourseProgramPlay />}/>


            </Routes>

        </div>
    );
}

export default App;
