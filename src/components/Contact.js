import React from 'react'
import '../styles/App.css'
import '../styles/theme.css'

const Contact = () => {
    const Contact = () => {
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

    return (
        <div id="body">
            <Contact />
        </div>
    );
}
export default Contact