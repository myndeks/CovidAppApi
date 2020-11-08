import React, {Component} from 'react';
import './App.css';
import CovidInfo from './components/CovidInfo';
// import ToDayDate from './components/ToDayDate';
import Search from './components/Search';
// import WhereDataFrom from './components/WhereDataFrom';

// Import axios for fetching data
import axios from 'axios';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      location: [],
      country: '',
      isLoading: true
    }
  }

  componentDidMount () {
    this.fetchData();
  }

  fetchData = () => {
    axios.get(`https://coronavirus-19-api.herokuapp.com/countries`)
    .then(
      response => {
        this.setState({
          location: response.data,
          isLoading: false
        });
      }
    )
    .catch(
      error => {
        console.log("Error fetcihn ad parsin data", error);
      }
    )

  }

  callBackFunction = (childData) => {
    this.setState({country: childData})
  };


  render () {
    return (
      <div className="container">
      <Search parentCallback={this.callBackFunction}/>
      <CovidInfo sarchInput={this.state.country} data={this.state.location} loading={this.state.isLoading} />
    </div>
    )
  }
}

export default App;
