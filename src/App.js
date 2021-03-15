// import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Intro from './Intro';
import Card from './data/Card';
import React from 'react';


class App extends React.Component {
  state = {
    ResortData: []
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/appSlgR2AobiefrRj/Table%201?api_key=keyl61uIeQVqWZBC1')

      .then(res => res.json())
      .then(res => {
        console.log(res.records)
        this.setState({ ResortData: res.records })
      })
      .catch(error => console.log(error))
  }

  render() {
    const { ResortData } = this.state

    return (
      <div className="App">
        <Nav />
        <Intro />
        <Card />
        { ResortData.map(resort => (
          <Card {...resort.fields} key={resort.fields.id} />
        ))}
        
      </div>
      
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Intro />
//       <Card />
      
//     </div>
    
//   );
  
// }

export default App;
