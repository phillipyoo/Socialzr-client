import React, {useState, useEffect, Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import {useGlobalState} from '../config/store'
import {getPostFromId, updateEventPost} from '../services/eventPostServices'
import Footer from './Footer'

import '../styles/theme.css'
import '../styles/App.css'

const EditEventPost = ({history, match}) => {

    const {store, dispatch} = useGlobalState()
    const {eventPosts} = store
    const postId = match && match.params ? match.params.id : -1
    const post = getPostFromId(eventPosts, postId)


    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setFormState({
            ...formState,
            [name]: value
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        const updatedPost = {
            _id: post._id,
            title: formState.title,
            category: formState.category || "general",
            organiser: formState.organiser,
            location: formState.location,
            date: formState.date,
            description: formState.description
        }
        updateEventPost(updatedPost).then(() => {
            const otherPosts = eventPosts.filter((post) => post._id !== updatedPost._id)
                dispatch({
                type: "setEventPosts",
                data: [updatedPost, ...otherPosts]
                })
                history.push(`/events/${post._id}`)
            })
    }
    // Set initial form values to what is in the current post
    const initialFormState = {
        title: "",
        category: "",
        organiser: "",
        location: "",
        date: "",
        description: ""
    } 

    const [formState,setFormState] = useState(initialFormState)

    useEffect(() => {
        console.log(post)
        // Set the formState to the fields in the post after mount and when post changes
        post && setFormState({
            title: post.title,
            category: post.category,
            organiser: post.organiser,
            location: post.location,
            date: post.date,
            description: post.description

        })
    },[post])

    return (
        <div id="body">
            <div className='header'>
              <span className='header-title'>
                  EDIT EVENT
              </span>
          </div>
        <div className="eventPost-Container">
        <form className="form" id="editPostForm" onSubmit={handleSubmit}>
            <div className="divStyles">
                <label className="labelStyles">Title</label>
                <input className="inputStyles" required type="text" name="title" value={formState.title} onChange={handleChange}></input>
            </div>


            <div className='divStyles'>
                <label className='labelStyles'>Organiser</label>
                <input className='inputStyles' required type='text' name='organiser' value={formState.organiser} placeholder='Enter Event Organiser' onChange={handleChange} />
            </div>

            <div className='divStyles'>
                <label className='labelStyles'>Category</label>
                    <select className='Category' id='Cat'>
                        <option value='Festival'>Festival</option>
                        <option value='Party'>Party</option>
                        <option value='Event'>Event</option>
                    </select>
            </div>

            <div className='divStyles'>
                <label className='labelStyles'>Date</label>
                <input className='inputStyles' required type='date' name='date' value={formState.date} onChange={handleChange} />
            </div>

            <div className='divStyles'>
                <label className='labelStyles'>Location</label>
                <input className='inputStyles' required type='text' name='location' value={formState.location} placeholder='Enter Event Location' onChange={handleChange} />
            </div>

            <div className="divStyles">
                <label className="labelStyles">Description</label>
                <textarea form="editPostForm" required className="textAreaStyles" name="description" value={formState.description} onChange={handleChange}></textarea>
            </div>
            <input className="buttonStyles" type="submit" value="Update post"></input>
        </form>
        </div>
        <Footer />
        </div>
    ) 
}

export default withRouter(EditEventPost)