import React from 'react';

function WhereDataFrom (props) {

    const covidData = props.data;
    const totalTests = covidData.totalTests;


    return (
        <div className="section-info">
            <p>Viso ištirta ėminių: {totalTests}</p>
            <p>Informacija atnaujinta pagal coronavirus-19-api.herokuapp.com gautus duomenis.</p>
        </div>
    );
}

export default WhereDataFrom;