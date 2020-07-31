import React from 'react'
import {useGlobalState} from '../config/store'
// import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/theme.css'
import '../styles/App.css'
import imageHeader from '../img/socialzrLogo.png'
import EventCard from './EventCard'
const EventPosts = () => {
    const {store} = useGlobalState()
    const {eventPosts} = store
    console.log("eventposts", eventPosts)
    return (
        <div id="grid">
        <img id="headerImage" src={imageHeader} alt="Socialzr" />
        <div className="event-section">
            {eventPosts.sort((a,b) => b.modified_date - a.modified_date)
                .map((post) => <EventCard title={post.title} location={post.location} category={post.category} date={post.date} id={post._id}/>)}   
        <Footer />     
        </div>
        </div>
    )
}
export default EventPosts