import React from 'react';
import "./CourseProgramItem.css"
import IconCourseProgramItem from "../IconCourseProgramItem/IconCourseProgramItem";

const CourseProgramItem = ({ mainId, itemId, typeIcon }) => {
    return (
        <div className="course-program__item">
            <IconCourseProgramItem typeIcon={typeIcon} />
            <div className="course-program__item-content">
                <div className="course-program__item-title">
                    {mainId}.{itemId} Анализ номинативных данных
                </div>
                <div className="course-program__item-exp">
                    0/4 XP
                </div>
            </div>
        </div>
    );
};

export default CourseProgramItem;