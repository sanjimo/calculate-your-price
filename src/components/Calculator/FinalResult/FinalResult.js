import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FinalResult.css';

const FinalResult = () => {
    return (
        <div className="row mx-auto">
            <div className="col-lg-8 col-md-8 col-sm-12 border-end border-5">
                <Row xs={1} lg={1} md={1} className="g-2 mx-auto mt-3 mb-5 w-75">
                    <Col className="mb-5 mt-3">
                        <h5 className="fw-bold text-dark">DO YOU HAVE UX DESIGN READY?</h5>
                        <div className="mt-4">
                            <button type="button" className="btn btn-border-0 shadow ps-3 pe-3 custom-button text-dark me-2">Yes</button>
                            <button type="button" className="btn btn-border-0 shadow ps-3 pe-3 custom-button text-dark ms-2">No</button>
                        </div>
                    </Col>
                    <Col className="mb-5 mt-3">
                        <h5 className="fw-bold text-dark">HOW MANY WEBPAGES DO YOU WANT FOR YOUR PUBLIC WEBSITE?</h5>
                        <div className="mt-4 w-50 mx-auto">
                            <label for="customRange2" className="form-label">Pages</label>
                            <div className="range">
                               <input type="range" className="form-range" min="0" max="5" id="customRange2" />
                            </div>
                        </div>
                    </Col>
                    <Col className="mb-5">
                        <h5 className="fw-bold text-dark">ANY PAYMENT GATEWAY INTEGRATION?</h5>
                        <div className="mt-4">
                            <button type="button" className="btn btn-border-0 shadow ps-3 pe-3 custom-button text-dark me-4">Stripe</button>
                            <button type="button" className="btn btn-border-0 shadow ps-3 pe-3 custom-button text-dark me-4">Paypal</button>
                            <button type="button" className="btn btn-border-0 shadow ps-3 pe-3 custom-button text-dark me-4">Both</button>
                            <button type="button" className="btn btn-border-0 shadow ps-3 pe-3 custom-button text-dark">None</button>
                        </div>
                    </Col>
                </Row>
                <div className="w-50 mx-auto mt-4">
                    <div className="progress">
                        <div className="progress-bar bg-info rounded-pill" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
                        </div>
                    </div>
                    <div className="start">
                        <Link to="/chooseBuild" className="text-decoration-none text-info fw-bold">
                          Previous
                        </Link>
                    </div>
                    <div className="end text-muted">
                        Next
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card shadow border-0 border-rounded mt-5 mb-5 w-75 mx-auto">
                    <div className="card-body text-center">
                        <h6 className="card-title text-info fw-bold">Est Cost</h6>
                        <h4 className="fw-bold text-dark">$3,000-$3,500</h4>
                        <p className="text-secondary">"This cost will include 2 rounds of corrections at UI design stage, and once the design is finalized, we will proceed to development. Project will be divided into 2-3 milestone payments."</p>
                    </div>
                </div>
                <div className="w-75 mx-auto mt-5">
                    <button type="button" className="btn btn-info text-white rounded mt-5">START YOUR PROJECT NOW</button>
                </div>
            </div>
        </div>
    );
};

export default FinalResult;