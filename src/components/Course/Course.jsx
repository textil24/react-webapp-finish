import React from 'react';
import "./Course.css"
import Channel from "../Channel/Channel";
import CourseAbout from "../CourseAbout/CourseAbout";
import CourseReviews from "../CourseReviews/CourseReviews";
import CourseProgram from "../CourseProgram/CourseProgram";

const Course = () => {
    return (
        <div className="course">
            <div className="container">


                <div className="course__top">
                    <div className="course__top-title">
                        Английский язык для бизнес-финансов
                    </div>
                    <div className="course__top-list">
                        <div className="course__top-item">
                            👤 2.1K
                        </div>
                        <div className="course__top-item">
                            <div className="course__top-stars">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11"
                                     fill="none">
                                    <path
                                        d="M5.39477 0.862667C5.58527 0.276379 6.41471 0.276378 6.60521 0.862666L7.42871 3.39716C7.51391 3.65935 7.75824 3.83687 8.03393 3.83687H10.6989C11.3153 3.83687 11.5716 4.62572 11.0729 4.98807L8.91693 6.55447C8.69389 6.71651 8.60057 7.00375 8.68576 7.26594L9.50926 9.80044C9.69976 10.3867 9.02873 10.8743 8.53 10.5119L6.37404 8.94551C6.151 8.78346 5.84898 8.78346 5.62595 8.94551L3.46998 10.5119C2.97125 10.8743 2.30022 10.3867 2.49072 9.80044L3.31422 7.26594C3.39942 7.00375 3.30609 6.71651 3.08305 6.55447L0.927084 4.98807C0.428357 4.62572 0.684668 3.83687 1.30113 3.83687H3.96605C4.24174 3.83687 4.48607 3.65936 4.57127 3.39716L5.39477 0.862667Z"
                                        fill="#34B547"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11"
                                     fill="none">
                                    <path
                                        d="M5.39477 0.862667C5.58527 0.276379 6.41471 0.276378 6.60521 0.862666L7.42871 3.39716C7.51391 3.65935 7.75824 3.83687 8.03393 3.83687H10.6989C11.3153 3.83687 11.5716 4.62572 11.0729 4.98807L8.91693 6.55447C8.69389 6.71651 8.60057 7.00375 8.68576 7.26594L9.50926 9.80044C9.69976 10.3867 9.02873 10.8743 8.53 10.5119L6.37404 8.94551C6.151 8.78346 5.84898 8.78346 5.62595 8.94551L3.46998 10.5119C2.97125 10.8743 2.30022 10.3867 2.49072 9.80044L3.31422 7.26594C3.39942 7.00375 3.30609 6.71651 3.08305 6.55447L0.927084 4.98807C0.428357 4.62572 0.684668 3.83687 1.30113 3.83687H3.96605C4.24174 3.83687 4.48607 3.65936 4.57127 3.39716L5.39477 0.862667Z"
                                        fill="#34B547"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11"
                                     fill="none">
                                    <path
                                        d="M5.39477 0.862667C5.58527 0.276379 6.41471 0.276378 6.60521 0.862666L7.42871 3.39716C7.51391 3.65935 7.75824 3.83687 8.03393 3.83687H10.6989C11.3153 3.83687 11.5716 4.62572 11.0729 4.98807L8.91693 6.55447C8.69389 6.71651 8.60057 7.00375 8.68576 7.26594L9.50926 9.80044C9.69976 10.3867 9.02873 10.8743 8.53 10.5119L6.37404 8.94551C6.151 8.78346 5.84898 8.78346 5.62595 8.94551L3.46998 10.5119C2.97125 10.8743 2.30022 10.3867 2.49072 9.80044L3.31422 7.26594C3.39942 7.00375 3.30609 6.71651 3.08305 6.55447L0.927084 4.98807C0.428357 4.62572 0.684668 3.83687 1.30113 3.83687H3.96605C4.24174 3.83687 4.48607 3.65936 4.57127 3.39716L5.39477 0.862667Z"
                                        fill="#34B547"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11"
                                     fill="none">
                                    <path
                                        d="M5.39477 0.862667C5.58527 0.276379 6.41471 0.276378 6.60521 0.862666L7.42871 3.39716C7.51391 3.65935 7.75824 3.83687 8.03393 3.83687H10.6989C11.3153 3.83687 11.5716 4.62572 11.0729 4.98807L8.91693 6.55447C8.69389 6.71651 8.60057 7.00375 8.68576 7.26594L9.50926 9.80044C9.69976 10.3867 9.02873 10.8743 8.53 10.5119L6.37404 8.94551C6.151 8.78346 5.84898 8.78346 5.62595 8.94551L3.46998 10.5119C2.97125 10.8743 2.30022 10.3867 2.49072 9.80044L3.31422 7.26594C3.39942 7.00375 3.30609 6.71651 3.08305 6.55447L0.927084 4.98807C0.428357 4.62572 0.684668 3.83687 1.30113 3.83687H3.96605C4.24174 3.83687 4.48607 3.65936 4.57127 3.39716L5.39477 0.862667Z"
                                        fill="#34B547"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11"
                                     fill="none">
                                    <path
                                        d="M5.39477 0.862667C5.58527 0.276379 6.41471 0.276378 6.60521 0.862666L7.42871 3.39716C7.51391 3.65935 7.75824 3.83687 8.03393 3.83687H10.6989C11.3153 3.83687 11.5716 4.62572 11.0729 4.98807L8.91693 6.55447C8.69389 6.71651 8.60057 7.00375 8.68576 7.26594L9.50926 9.80044C9.69976 10.3867 9.02873 10.8743 8.53 10.5119L6.37404 8.94551C6.151 8.78346 5.84898 8.78346 5.62595 8.94551L3.46998 10.5119C2.97125 10.8743 2.30022 10.3867 2.49072 9.80044L3.31422 7.26594C3.39942 7.00375 3.30609 6.71651 3.08305 6.55447L0.927084 4.98807C0.428357 4.62572 0.684668 3.83687 1.30113 3.83687H3.96605C4.24174 3.83687 4.48607 3.65936 4.57127 3.39716L5.39477 0.862667Z"
                                        fill="#34B547"/>
                                </svg>
                            </div>
                        </div>
                        <div className="course__top-item">
                            0/1500 XP
                        </div>
                    </div>
                    <div className="course__top-button">
                        🧩 Продолжить
                        <svg
                            style={{transform: "rotate(180deg)"}}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#000"
                            viewBox="0 0 24 24"
                        >
                            <polygon
                                points="12.718 4.707 11.305 3.292 2.585 12 11.305 20.707 12.718 19.292 6.417 13 20 13 20 11 6.416 11 12.718 4.707"/>
                        </svg>
                    </div>
                </div>

            </div>

            <div className="course__bottom">
                <div className="container">
                    <div className="course__bottom-pages">
                        <div className="course__bottom-page active">
                            О курсе
                        </div>
                        <div className="course__bottom-page">
                            Отзывы
                        </div>
                        <div className="course__bottom-page">
                            Программа курса
                        </div>
                    </div>
                </div>
                <div className="course__bottom-about-wrapper">
                    <div className="container">
                        <CourseProgram />
                        {/*<CourseReviews />*/}
                        {/*<CourseAbout />*/}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Course;