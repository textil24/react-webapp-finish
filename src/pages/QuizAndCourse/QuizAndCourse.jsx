import React from 'react';
import Study from "../../components/Study/Study";

const QuizAndCourse = ({ title, sort, category }) => {
    return <Study title={title} sort={sort} category={category}/>
};

export default QuizAndCourse;