import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import "./CardItem.css"

const CardItem = (
    {
        isBuy,
        to,
        src,
        name,
        description,
        exp,
        content
    }) => {

    return (
        <Link to={to} className="card-item">
            <div className="card-item__img-wrapper">
                <img className="card-item__img"
                     src={src}
                     alt="image"/>
            </div>
            <div className="card-item__top">
                <div className="card-item__name">
                    {name}
                </div>
                <div className="card-item__description">
                    {description}
                </div>
            </div>
            <div className="card-item__bottom">
                <div className="card-item__exp">
                    <span className="card-item__exp lightblue">{exp}</span>
                    XP
                </div>
                <div className="card-item__content">
                    {content}
                </div>
            </div>
        </Link>
    );
};

export default CardItem;