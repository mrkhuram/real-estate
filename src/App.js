import React from 'react';
import logo from './logo.svg';

// Components
import Header from './components/Header/header'
import Body from './components/Body/body'
import Footer from './components/Footer/footer'

class App extends React.Component {
  
  render() {

    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }

}

export default App;
