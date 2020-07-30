  
import React from 'react';
// import Header from '../components/Header'
import ContentsMain from '../components/ContentsMain'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import '../styles/App.css'
import '../styles/theme.css'
import imageHeader from '../img/socialzr-band.png'

function Index() {
    return (
      <React.Fragment>
        <img id="headerImage" src={imageHeader} alt=" " />
        <ContentsMain />
        {/* <UpcomingEvents /> */}
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
export default Index
  