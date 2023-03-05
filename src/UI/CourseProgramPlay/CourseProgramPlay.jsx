import React from 'react';
import "./CourseProgramPlay.css"
import BackAndForth from "../BackAndForth/BackAndForth";

const CourseProgramPlay = () => {
    return (
        <div className="course-program-play">
            <div className="container">
                <div className="course-program-play__inner">

                    <div className="course-program-play__content">
                        <img
                            className="course-program-play__img"
                            src="https://i.ytimg.com/vi/QIZTnHfqy1s/maxresdefault.jpg"
                            alt="img"/>
                        <div className="course-program-play__title">
                            Заголовок 1
                        </div>
                        <div className="course-program-play__text">
                            Курс продолжает знакомить слушателей с основными понятими и методами статистики. Курс затронет такие темы, как анализ номинативных данных, непараметрические критерии и методы понижения размерности.
                        </div>
                    </div>
                </div>

            </div>

            <BackAndForth />

        </div>
    );
};

export default CourseProgramPlay;