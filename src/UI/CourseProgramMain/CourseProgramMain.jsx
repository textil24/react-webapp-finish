import React from 'react';
import "./CourseProgramMain.css"

const CourseProgramMain = ({ mainId }) => {
    return (
        <div className="course-program__main">
            <div className="container">
                <div className="course-program__main-title">
                    {mainId} Анализ номинативных данных
                </div>
                <div className="course-program__main-exp">
                    0/80 XP
                </div>
            </div>
        </div>
    );
};

export default CourseProgramMain;