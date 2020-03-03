import React from 'react';
// import logo from './logo.svg';

// Components
import Header from './Header/header'
import Body from './Body/body'
import Footer from './Footer/footer'
import Page10 from './page10/page10'

class RealState extends React.Component {
  
  render() {

    return (
      <div className="RealState">   
        <Header />
        <Body />
        <Footer />

      </div>
    );
  }

}

export default RealState;
