import React from 'react';
import "./CourseProgramBook.css"
import BackAndForth from "../BackAndForth/BackAndForth";

const CourseProgramBook = () => {
    return (
        <div className="course-program-book">
            <div className="container">

                <div className="course-program-book__content">
                    <div className="course-program-book__title">
                        Заголовок 1
                    </div>
                    <div className="course-program-book__text">
                        Курс продолжает знакомить слушателей с основными понятими и методами статистики. Курс затронет такие темы, как анализ номинативных данных, непараметрические критерии и методы понижения размерности.
                    </div>
                    <img
                        className="course-program-book__img"
                        src="https://i.ytimg.com/vi/QIZTnHfqy1s/maxresdefault.jpg"
                        alt="img"/>
                </div>


                <div className="course-program-book__wrapper">
                    <div className="course-program-book__subtitle">
                        👨‍🏫👩‍🏫 Преподаватели
                    </div>
                    <div className="course-program-book__teachers">
                        <div className="course-program-book__teacher">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m12 20l-1.425-1.4l5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8Z"/></svg>
                            Иван Иванов. Дата-аналитик в VK
                        </div>
                        <div className="course-program-book__teacher">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m12 20l-1.425-1.4l5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8Z"/></svg>
                            Иван Иванов. Дата-аналитик в VK
                        </div>
                        <div className="course-program-book__teacher">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m12 20l-1.425-1.4l5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8Z"/></svg>
                            Василий Гаврилов. Преподаватель в VK
                        </div>
                    </div>
                </div>

                <div className="course-program-book__wrapper">
                    <div className="course-program-book__subtitle">
                        ⏰ Среднее время прохождения
                    </div>
                    <div className="course-program-book__time">
                        8 часов
                    </div>
                </div>

            </div>

            <BackAndForth />

        </div>
    );
};

export default CourseProgramBook;