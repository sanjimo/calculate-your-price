import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFrameworks from '../../../hooks/useFrameworks';
import ChooseFramework from '../ChooseFramework/ChooseFramework';
import './CalculatorPage.css';

const CalculatorPage = () => {
    const [frameworks]=useFrameworks();


    return (
        <div className="row mx-auto mb-5">
            <div className="col-lg-8 col-md-8 col-sm-12 border-end border-5">
                <h4 className="fw-bold text-dark mt-5">I WANT MY SITE TO BE BUILT ON (CHOOSE FRAMEWORK)</h4>
                <Row xs={1} lg={1} md={1} className="g-2 container w-75 mx-auto mt-4 mb-4">
                    {
                        frameworks.map(framework=><ChooseFramework
                            key={framework.key}
                            framework={framework}
                        >
                        </ChooseFramework>)
                    }
                </Row>
                <div className="w-50 mx-auto">
                    <div className="progress">
                        <div className="progress-bar bg-info rounded-pill" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '30%'}}>
                        </div>
                    </div>
                    <div className="start text-muted">Previous</div>
                    <div className="end">
                    <Link to="/chooseBuild" className="text-decoration-none text-info fw-bold">
                        Next
                    </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <h6 className=" text-dark text-center mt-5">PLEASE INPUT ALL THE FIELDS TO SHOW ESTIMATED PRICE</h6>
            </div>
        </div>
    );
};

export default CalculatorPage;