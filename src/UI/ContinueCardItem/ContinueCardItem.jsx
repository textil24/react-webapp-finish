import React from 'react';
import "./ContinueCardItem.css"

const ContinueCardItem = () => {
    return (
        <div className="continue-card-item">
            <div className="continue-card-item__text">
                Продолжить
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                <path fill="currentColor" d="m12 20l-1.425-1.4l5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8Z"/>
            </svg>️
        </div>
    );
};

export default ContinueCardItem;