import React from 'react';
import "./BackAndForth.css"
import {Link} from "react-router-dom";

const BackAndForth = () => {
    return (
        <div className="back-and-forth">
            <div className="container">
                <div className="back-and-forth__inner">

                    <Link to="/course_program_book" className="back-and-forth__item">
                        <svg
                            style={{marginRight: "5px", transform: "rotate(180deg)"}}
                            xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
                            <path fill="currentColor" d="m12 20l-1.425-1.4l5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8Z"/>
                        </svg>
                        Назад
                    </Link>

                    <Link to="/course_program_play" className="back-and-forth__item">
                        Вперед
                        <svg
                            style={{marginLeft: "5px"}}
                            xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
                            <path fill="currentColor" d="m12 20l-1.425-1.4l5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8Z"/>
                        </svg>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default BackAndForth;