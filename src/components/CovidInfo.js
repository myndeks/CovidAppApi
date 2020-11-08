import React from 'react';

function CovidInfo (props) {

    const covidData = props.data;
    // console.log(covidData);

    const isLoading = props.loading;

    const countrySearchInfo = props.sarchInput;

    // Current Date
    let toDay = new Date().toLocaleDateString()

    if (isLoading === false) {
        for (let item in covidData) {

            let displayinfo = '';
    
            const defaultCountry = 'Lithuania';
    
            if (countrySearchInfo === '') {
                displayinfo = defaultCountry;
            } else {
                displayinfo = countrySearchInfo;
            }
    
     
    
            if (covidData[item].country.toUpperCase() === displayinfo.toUpperCase()) {
                const country = covidData[item].country;
                const cases = covidData[item].cases;
                const recovered = covidData[item].recovered;
                const todayCases = covidData[item].todayCases;
                const deaths = covidData[item].deaths;    
    
                return (
                    <div>
    
                        <h1 className="results-text">{toDay} Duomenimis {country}</h1>
                        <section className="searchResults">
                            <div className="box1">
                                <div className="box1-top">
                                    <h2>Patvirtintų ligos atvejų skaičius konkretiems žmonėms</h2>
                                </div>
                                <div className="box1-bottom">
                                    <h3>{cases}</h3>
                                </div>
                            </div>
                
                            <div className="box2">
                                <div className="box2-top">
                                    <h2>Pasveikusių žmonių skaičius</h2>
                                </div>
                                <div className="box2-bottom">
                                    <h3>{recovered} </h3>
                                </div>
                            </div>
                
                            <div className="box3">
                                <div className="box3-top">
                                    <h2>Per vakar dieną patvirtintų naujų COVID-19 susirgusių žmonių skaičius:</h2>
                                </div>
                                <div className="box3-bottom">
                                    <h3>{todayCases}</h3>
                                </div>
                            </div>
                
                            <div className="box4">
                                <div className="box4-top">
                                    <h2>Mirusių nuo koronaviruso žmonių skaičius</h2>
                                </div>
                                <div className="box4-bottom">
                                    <h3>{deaths}</h3>
                                </div>
                            </div>
                        </section>
                    </div>
                );
            } 
        }
        
    } else {
        return (
            <h1 className="loading">Data is loading... </h1>
        );
    }



   
  

    return (
        <div>
        </div>
    );
}

export default CovidInfo;