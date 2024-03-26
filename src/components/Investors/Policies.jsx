import React from 'react';
import pdfFile from '../../assets/investors/POLICY.pdf'; // Import your PDF file
import './policies.scss';

const Policies = () => {
    return (
        <div className="Policies container">
            {/* <h1>PDF Viewer</h1> */}
            <object
                data={pdfFile}
                type="application/pdf"
                width="100%"
                height="800px"
            >
                <p>Sorry, your browser does not support embedded PDFs.</p>
            </object>
        </div>
    );
};

export default Policies;
