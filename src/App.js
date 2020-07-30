import React, { useReducer, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import eventData from './data/post_data'
import Nav from './components/Nav'
import EventPosts from './components/EventPosts'
import EventPost from './components/EventPost'
import EditEventPost from './components/EditEventPost'
import NewEventPost from './components/NewEventPost'
import SignIn from './components/SignIn'
import Register from './components/Register'
import stateReducer from './config/stateReducer'
import {StateContext} from './config/store'
import {getPostFromId, getAllEventPosts, addEventPost} from './services/eventPostServices'
import { userAuthenticated, getLoggedInUser, setLoggedInUser } from './services/authServices'

import './styles/App.css'

const App = () => {


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



const Card = (props) =>{
    return(
        <div className={props.className} >
            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
            </div>
        </div>
    )
}

const ContactContainer = () => {
    return(
        <div className='contact-container bg-grey'>
            <span className="div-title">Contact us</span>
            <div className='contact-form'>
                    
                <div id='contactSection'>
                    <input type="text" placeholder="email address" className="input-field"/>
                    <textarea name="" id="" cols="30" rows="5" placeholder="comment"></textarea>
                    <button className="contact-btn">Send</button>
                </div>
            </div>
        </div>
    );

}
const Footer = () => {
  return (
    <div className='footer'>
      <span className='footer-title'>
        SOCIALZR
            </span>
      <br />
      <span className="footer-text">
        Socialzr Event Management 2020 &copy;
            </span>
    </div>
  );
}



    // initial state for state reducer
  const initialState = {
    eventPosts: [],
    loggedInUser: null
  }
  
  function fetchEventPosts(){
    getAllEventPosts().then((eventData) => {
      dispatch({
        type: "setEventPosts",
        data: eventData
      })
    }).catch((error) => {
      dispatch({
        type: "setError",
        data: false
      })
      console.log("An error occured fetching event posts from the server: ", error);
    })
  }
  
    // Create state reducer store and dispatcher
    const [store, dispatch] = useReducer(stateReducer,initialState)
    const {eventPosts} = store

  useEffect(() => {
    fetchEventPosts();
    userAuthenticated().then(() => {
      dispatch({
        type: "setLoggedInUser",
        data: getLoggedInUser()
      })
    }).catch((error) => {
      console.log("got an error trying to check authenticated user: ", error)
      setLoggedInUser(null)
      dispatch({
        type: "setLoggedInUser",
        data: null
      })
    })
    // A function that specifies anyactions on component unmount
    return () => {}
  },[])

  return (
    <div >
      <StateContext.Provider value={{store,dispatch}}>
      <BrowserRouter>
      <div id='body'>
            <Header/>
            <Card 
                className='section'
                img='./public/alexander-popov-hTv8aaPziOQ-unsplash.jpg'
                title='Not just another event app' 
                description="Whether its small of large, we're here to help you plan your events! Create events and spread the word to those who need to know. "
            />
            <Card 
                className='section'
                img='./Capture1.PNG' 
                title='Type of events' 
                description="We do not discriminate! All events, whether it's a party, festival, or just a gathering is welcome. Post your event using our simple template and never have to worry about inviting people ever again."
            />
            <Card 
                className='section'
                img='./Capture1.PNG' 
                title='Upcoming Events' 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'/>
            <ContactContainer/>
            <Footer />
        </div>
        {/* <Nav />
          <div id="div_spacer">
            <h1 id="main_title">SocialZr</h1>
          </div> */}
        <Switch>
            <Route exact path="/" render={(props) => <EventPosts {...props} eventData={eventPosts} /> } />
            <Route exact path="/events/:id" render={(props) => <EventPost {...props} post={getPostFromId(eventPosts,props.match.params.id)} showControls /> } />
            <Route exact path="/events/edit/:id" component={EditEventPost} /> 
            <Route exact path="/new-event" render={(props) => <NewEventPost {...props} addEventPost={addEventPost} /> } />
          </Switch> 
          <Route exact path="/auth/login" component={SignIn} />
          <Route exact path="/auth/register" component={Register} />
        </BrowserRouter>
      </StateContext.Provider>
    </div>
  )
}

export default App
