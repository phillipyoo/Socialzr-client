import React from 'react'
import '../styles/App.css'
import '../styles/theme.css'

const ContentsMain = () => {
    const Card = (props) =>{
        return(
            <div className={props.className} >
                <div className="big-div">
                    <span className='div-title'>
                        {props.title}
                    </span>
                    <p/>
                    <span>
                        {props.description}
                    </span>
                </div>
            </div>
        )
    }

    return (
        <div id="body">
            <Card 
                className='section'
                img='../public/alexander-popov-hTv8aaPziOQ-unsplash.jpg'
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
        </div>
    )
}
export default ContentsMain