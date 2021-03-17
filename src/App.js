// import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Intro from './Intro';
import Card from './data/Card';
import Filters from './Filters';

import React from 'react';


class App extends React.Component {
  state = {
    ResortData: []
  }

  componentDidMount() {
    fetch(`https://api.airtable.com/v0/appSlgR2AobiefrRj/Table%201?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(res => {
        
        this.setState({ ResortData: res.records })
      })
    .catch(error => console.log(error))
  }




  render() {
   
    const { ResortData } = this.state

    return (
      <div className="App font-sans bg-gradient-to-b from-green-400 to-blue-500">
        <Nav />
        <Intro />

          <Filters {...{ResortData}} />
     
        <div className="container grid grid-cols-4 gap-4 m-auto">
          { ResortData.map(resort => (
            <Card {...resort.fields} key={resort.id} />
          ))}  
        </div>
      </div>
    );
  }
}

export default App;
