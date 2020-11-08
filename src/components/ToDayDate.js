import React from 'react';


function ToDayDate () {

    // Current Date
    let toDay = new Date().toLocaleDateString()

    return (
        <h1 className="results-text">{toDay} Duomenimis Lietuvoje</h1>
    );

}

export default ToDayDate;