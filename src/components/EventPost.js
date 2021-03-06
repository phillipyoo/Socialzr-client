import React from 'react'
import {useGlobalState} from '../config/store'
import api from "../config/api"
import imageHeader from '../img/long-truong-Y5PXVs1LpY4-unsplash.jpg'
import Footer from '../components/Footer'

import Moment from "moment"
import TimeAgo from 'react-timeago'

import '../styles/theme.css'
import '../styles/App.css'
import '../styles/Event.css'
const EventPost = ({history, post, showControls}) => {
    const {store, dispatch} = useGlobalState()
    const {eventPosts} = store
    // If we don't have a post, return null
    console.log("got post: ", post)
    
    if (!post) return null
    
    const {title, category, organiser, location, date, description} = post 
    // Handle the delete button
    function handleDelete(event) {
        event.preventDefault()
        api.delete(`/events/${post._id}`).then(response =>{
            const updatedPosts = eventPosts.filter((eventPost) => eventPost._id !== post._id)
            dispatch({
                type: "setEventPosts",
                data: updatedPosts
            })
            history.push("/events")
            console.log(response)
        })
    }
    // Handle the edit button
    function handleEdit(event) {
        event.preventDefault()
        history.push(`/events/edit/${post._id}`)
    }
    // // Handle the attend button
    function handleAttend(event){
        event.preventDefault()
        api.put(`/events/add-user/${post._id}`).then(response => {
            console.log(response)
            history.push("/events")
        })
        console.log(post._id)
    }
    return (
        <div className="body">
        <img id="headerImage" src={imageHeader} alt="event header" />
            <div className="event" >
                <h1>{title}</h1>
                <p>{category}</p>
                <p>{organiser}</p>
                <p>{location}</p>
                <p>{Moment(date).format("Do MMM YY")}</p>
                <TimeAgo date={date}/>
                <p>{description}</p>
                < br/> 
                <h2>Attendees</h2>
                {post.attendees && post.attendees.map((user)=>{
                    return (
                        <p>{user.username}</p>
                    )
                })}
                <br/>
                {showControls && (
                    <div>
                        <button className="btn-linkStyles" onClick={handleAttend}>Going</button>
                        <button className="btn-linkStyles" onClick={handleEdit}>Edit</button>
                        <button className="btn-linkStyles" onClick={handleDelete}>Delete</button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}
export default EventPost