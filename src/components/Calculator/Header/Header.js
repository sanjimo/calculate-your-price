import React from 'react';

const Header = () => {
    return (
        <div className="border-bottom border-2 border-dark mt-2 mb-2">
            <span className=""><i className="fas fa-ellipsis-h text-dark fs-3 ms-0 me-5 text-start"></i></span>
            <span className="text-dark text-center fw-bold fs-6 ms-5 me-5">WANT TO DISCUSS YOUR PROJECT IN DETAIL? <span className='text-info'>SCHEDULE A CALL HERE</span></span>
            <span><i className="fas fa-ellipsis-h text-dark text-end ms-5 me-0 fs-3"></i></span>
        </div>
    );
};

export default Header;