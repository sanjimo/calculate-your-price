import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import ViewBuild from '../ViewBuild/ViewBuild';
import './ChooseBuild.css';

const ChooseBuild = () => {
    const [builds, setBuilds] = useState([]);
    useEffect(() => {
      fetch('./builds.json')
        .then(res=>res.json())
        .then(data=>setBuilds(data))
    }, [])

    return (
        <div className="row mx-auto mb-4">
            <div className="col-lg-8 col-md-8 col-sm-12 border-end border-5">
                <h4 className="fw-bold text-dark mt-5">I WANT TO BUILD</h4>
                <Row xs={1} lg={1} md={1} className="g-2 container w-75 mx-auto mt-4 mb-4">
                    {
                        builds.map(build=><ViewBuild
                            key={build.key}
                            build={build}
                        >
                        </ViewBuild>)
                    }
                </Row>
                <div className="w-50 mx-auto">
                    <div className="progress">
                        <div className="progress-bar bg-info rounded-pill" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>
                        </div>
                    </div>
                    <div className="start">
                        <Link to="/calculatorPage" className="text-decoration-none text-info fw-bold">
                          Previous
                        </Link>
                    </div>
                    <div className="end">
                        <Link to="/finalResult" className="text-decoration-none text-info fw-bold">
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

export default ChooseBuild;