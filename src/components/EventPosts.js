import React from 'react'
import EventPost from './EventPost'
import {useGlobalState} from '../config/store'
// import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/theme.css'
import '../styles/App.css'
import imageHeader from '../img/socialzrLogo.png'


const EventPosts = () => {
    const {store} = useGlobalState()
    const {eventPosts} = store
    console.log("eventposts", eventPosts)
    return (
        <div id="body">
        <img id="headerImage" src={imageHeader} alt=" " />
            {eventPosts.sort((a,b) => b.modified_date - a.modified_date)
                .map((post) => <EventPost key={post._id} post={post} />)}   
        <Footer />     
        </div>
    )
}

export default EventPosts
