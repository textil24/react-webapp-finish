import React from 'react';
import "./CardList.css"

const CardList = ({children}) => {
    return (
        <div className="card-list__list">
            {children}
        </div>
    );
};

export default CardList;