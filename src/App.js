import React from 'react';
import logo from './logo.svg';

// Components
import RealState from './components/realEstate';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Page10 from './components/page10/page10'
import Page11 from './components/page11/page11'

class App extends React.Component {
  
  render() {

    return (
      <Router>
        
      <div className="App">
        <Route path='/' exact component={RealState}/>
        <Route path='/page-10' exact component={Page10}/>
        <Route path='/page-11' exact component={Page11}/>


        {/* <RealState/> */}
      </div>
      </Router>
    );
  }

}

export default App;
