  
import React from 'react';
import Header from '../components/Header'
import ContentsMain from '../components/ContentsMain'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import '../styles/App.css'
import '../styles/theme.css'

function Index() {
    return (
      <React.Fragment>
        <Header />
        <ContentsMain />
        {/* <UpcomingEvents /> */}
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
export default Index
  