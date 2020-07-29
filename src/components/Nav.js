
import React from 'react'
import {Link} from 'react-router-dom'
import {useGlobalState} from '../config/store'
import {logoutUser} from '../services/authServices'
import '../styles/Nav.css'
import '../styles/theme.css'
// import Navbar from 'react-bootstrap/Navbar'

const Nav = () => {

    // Logout user
    function handleLogout() {
        logoutUser().then((response) => {
            console.log("Got back response on logout", response.status)
        }).catch ((error) => {
            console.log("The server may be down - caught an exception on logout:", error)
        })
        // Even if we catch an error, logout the user locally
        dispatch({
            type: "setLoggedInUser",
            data: null
        })
    }
    const {store, dispatch} = useGlobalState()
    const {loggedInUser} = store    
    return (
        <div className="navbar">
        <div className="navStyles">
            {loggedInUser 
            ? (<div>
                <Link className="linkStyles" to="/">{loggedInUser}</Link>
                <Link className="linkStyles" onClick={handleLogout} to="/">Logout</Link>
                </div>)
            : (<div className="authStyles">
                {/* <Link className="linkStyles" to="/">guest</Link> */}
                <Link className="linkStyles" to="/auth/login">Login</Link>
                <Link className="linkStyles" to="/auth/register">Sign Up</Link>
                </div>)
            }
            <div className="navButtons">
                <Link className="linkStyles" to="/">Home</Link>
                <Link className="linkStyles" to="/new-event">Create Event</Link>
            </div>
        </div>
        </div>
    )
}
export default Nav

