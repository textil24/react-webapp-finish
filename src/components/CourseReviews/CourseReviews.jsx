import React from 'react';
import "./CourseReview.css"
import ReviewItem from "../../UI/ReviewItem/ReviewItem";

const CourseReviews = () => {
    return (
        <div className="course-reviews">
            <div className="course-reviews__item">

                    <div className="course-reviews__item-inner">

                        <ReviewItem />

                        <ReviewItem />

                        <ReviewItem />

                    </div>
                </div>

        </div>
    );
};

export default CourseReviews;