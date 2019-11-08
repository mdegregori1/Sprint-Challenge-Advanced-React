import React, { Component } from 'react';
import './App.css';

import axios from "axios";
import Players from "./components/Players"
import Toggle from "./components/Toggle";

class App extends Component {
  state = {
    playerSearch: []
  }

  componentDidMount(){
    axios
    .get(`http://localhost:5000/api/players`)
    .then(response => {
      console.log('api call!', response.data);
      this.setState({
        playerSearch: response.data
      })
    })
    .catch(err => console.log(err));
  }
  render(){
    return (
      <div className="main">
        <h1>Women's World Cup Searches</h1>
        <Toggle/>
        <Players
        playerSearch={this.state.playerSearch}
        />
      </div>
    )
  }
}


export default App;

