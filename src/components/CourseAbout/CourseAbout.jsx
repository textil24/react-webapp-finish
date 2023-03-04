import React from 'react';
import Channel from "../Channel/Channel";

const CourseAbout = () => {
    return (
        <div className="course__bottom-about">
            <div className="container">
                <div className="course__bottom-about-subdesc">
                    Курс продолжает знакомить слушателей с основными понятими и методами статистики. Курс затронет
                    такие темы, как анализ номинативных данных, непараметрические критерии и методы понижения
                    размерности.
                </div>
                <Channel/>
                <div className="course__bottom-about-img-wrapper">
                    <img
                        src="https://i.ytimg.com/vi/QIZTnHfqy1s/maxresdefault.jpg"
                        className="course__bottom-about-img"
                        alt="image"/>
                </div>
                <div className="course__bottom-about-list">
                    <div className="course__bottom-about-item">
                        <div className="course__bottom-about-title">
                            📝 Начальные требования
                        </div>
                        <div className="course__bottom-about-desc">
                            Курс продолжает знакомить слушателей с основными понятими и методами статистики. Курс
                            затронет такие темы, как анализ номинативных данных, непараметрические критерии и методы
                            понижения размерности.
                        </div>
                    </div>

                    <div className="course__bottom-about-item">
                        <div className="course__bottom-about-title">
                            👨‍🏫👩‍🏫 Преподаватели
                        </div>
                        <div className="course__bottom-about-ul">
                            <div className="course__bottom-about-li">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="m12 20l-1.425-1.4l5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8Z"/></svg>
                                Анатолий Карпов. Аналитик в VK
                            </div>
                            <div className="course__bottom-about-li">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="m12 20l-1.425-1.4l5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8Z"/></svg>
                                Иван Иванов. Дата-аналитик в VK
                            </div>
                            <div className="course__bottom-about-li">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="m12 20l-1.425-1.4l5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8Z"/></svg>
                                Василий Гаврилов. Преподаватель в VK
                            </div>
                        </div>
                    </div>

                    <div className="course__bottom-about-item">
                        <div className="course__bottom-about-title">
                            ⏰ Среднее время прохождения
                        </div>
                        <div className="course__bottom-about-desc">
                            8 часов
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseAbout;