import React from 'react'
import '../styles/App.css'
import '../styles/theme.css'

const Header = () => {

    const Footer = () => {
        return (
          <div className='footer'>
            <span className='footer-title'>
              SOCIALZR
                  </span>
            <br />
            <span className="footer-text">
            &copy; Socialzr Event Management 2020 
                  </span>
          </div>
        );
    }

    return (
        <div id="footer">
            <Footer />
        </div>
    )
}

export default Header
