import React from 'react'
import '../styles/App.css'
import '../styles/theme.css'

const Header = () => {

    const Header = () =>{
      return(
          <div className='header'>
              <span className='header-title'>
                  SOCIALZR
              </span>
              <br/>
              <span className="header-text">
              For the people, by the party people
              </span>
          </div>
      );
    }

    return (
        <div id="body">
            <Header />
        </div>
    )
}

export default Header
