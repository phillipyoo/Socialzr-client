import React from 'react'
import EventPost from './EventPost'
import {useGlobalState} from '../config/store'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/theme.css'
import '../styles/App.css'


const EventPosts = () => {
    const {store} = useGlobalState()
    const {eventPosts} = store
    return (
        <div id="body">
        <Nav />
        <Header />
            {eventPosts.sort((a,b) => b.modified_date - a.modified_date)
                .map((post) => <EventPost key={post._id} post={post} />)}   
        <Footer />     
        </div>
    )
}

export default EventPosts
