  
import React from 'react';
import Nav from '../components/Nav'
import Header from '../components/Header'
import ContentsMain from '../components/ContentsMain'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import '../styles/App.css'
import '../styles/theme.css'

function Index() {
    return (
      <React.Fragment>
        <Nav />
        <Header />
        <ContentsMain />
        {/* <UpcomingEvents /> */}
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
export default Index
  