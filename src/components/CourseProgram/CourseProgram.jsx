import React from 'react';
import "./CourseProgram.css"
import CourseProgramItem from "../../UI/CourseProgramItem/CourseProgramItem";
import CourseProgramMain from "../../UI/CourseProgramMain/CourseProgramMain";
import {
    TYPE_ICON_BOOK,
    TYPE_ICON_DONE,
    TYPE_ICON_PLAY,
    TYPE_ICON_QUIZ
} from "../../UI/IconCourseProgramItem/IconCourseProgramItem";

const CourseProgram = () => {
    return (
        <div className="course-program">
                <div className="course-program__inner">

                    <div className="course-program__row">
                        <CourseProgramMain mainId={1} />
                        <div className="course-program__list">
                            <CourseProgramItem
                                mainId={1}
                                itemId={1}
                                typeIcon={TYPE_ICON_DONE} />
                            <CourseProgramItem
                                mainId={1}
                                itemId={2}
                                typeIcon={TYPE_ICON_BOOK} />
                        </div>
                    </div>

                    <div className="course-program__row">
                        <CourseProgramMain mainId={2} />
                        <div className="course-program__list">
                            <CourseProgramItem
                                mainId={2}
                                itemId={1}
                                typeIcon={TYPE_ICON_QUIZ} />
                            <CourseProgramItem
                                mainId={2}
                                itemId={2}
                                typeIcon={TYPE_ICON_PLAY} />
                        </div>
                    </div>

                    <div className="course-program__row">
                        <CourseProgramMain mainId={3} />
                        <div className="course-program__list">
                            <CourseProgramItem
                                mainId={3}
                                itemId={1}
                                typeIcon={TYPE_ICON_QUIZ} />
                            <CourseProgramItem
                                mainId={3}
                                itemId={2}
                                typeIcon={TYPE_ICON_PLAY} />
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default CourseProgram;