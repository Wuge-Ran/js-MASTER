import React, { Component } from 'react';
import { getNewSongs, getRankList} from './server'
class App extends Component {
  componentDidMount() {
    /* getNewSongs().then((data) => {
      console.log(data)
    })
    getRankList().then((data) => {
      console.log(data)
    }) */
  }
  render() {
    return (
      <div className="App">
        hello
      </div>
    );
  }
}

export default App;
