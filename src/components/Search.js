import React, {Component} from 'react';


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {country: ''};
    }

    sendData = (countryName) => {
        this.props.parentCallback(countryName);
    };

    mySubmitHandler = (event) => {
        event.preventDefault();
        this.sendData(this.state.country);
    }

    mySubmitValue = (event) => {
        this.setState({country: event.target.value});
    }


    render () {
        return (
        <div>
            <form onSubmit={this.mySubmitHandler}>
                <input type="search" placeholder="Įveskite norimą šalį angliškai" onChange={this.mySubmitValue}/>
                <button type="submit">Ieškoti</button>
            </form>
        </div>
        )
      }
}

export default Search;