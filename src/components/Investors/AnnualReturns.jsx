import React from 'react';
import pdfFile from '../../assets/investors/annul_return.pdf'; // Import your PDF file
import './policies.scss';

const AnnualReturns = () => {
    return (
        <div className="annulReturn container">
            {/* <h1>PDF Viewer</h1> */}
            <object
                data={pdfFile}
                type="application/pdf"
                width="100%"
                height="700px"
            >
                <p>Sorry, your browser does not support embedded PDFs.</p>
            </object>
        </div>
    );
};

export default AnnualReturns;
