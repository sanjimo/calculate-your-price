import React from 'react';
import './ChooseFramework.css';

const ChooseFramework = (props) => {
    const {name,details}=props.framework;

    return (
        <div className="card shadow m-2 framework-container">
            <div className="card-body text-start">
                <h5 className="text-dark">{name}</h5>
                <p className="text-secondary">{details}</p>
            </div>
        </div>
    );
};

export default ChooseFramework;