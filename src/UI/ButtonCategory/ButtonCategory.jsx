import React from 'react';
import "./ButtonCategory.css"

const ButtonCategory = (props) => {
    return (
        <button {...props} className={`button-category ${props.active}`}>
            {props.children}
        </button>
    );
};

export default ButtonCategory;