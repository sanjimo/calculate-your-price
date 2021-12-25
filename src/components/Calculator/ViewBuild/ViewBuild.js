import React from 'react';
import './ViewBuild.css';

const ViewBuild = (props) => {
    const {name,details}=props.build;

    return (
        <div className="card shadow build-container mb-3 mt-3">
            <div className="card-body text-start">
                <h5 className="text-dark">{name}</h5>
                <p className="text-secondary">{details}</p>
            </div>
        </div>
    );
};

export default ViewBuild;