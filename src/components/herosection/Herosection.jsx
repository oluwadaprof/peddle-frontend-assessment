import React from 'react'
import './herosection.scss'

const Herosection = () => {
    return (
        <div className='hero__section'>
            <h1>SOMETHING AWESOME IS <br /> COMING SOON</h1>
            <p>Your all-in-one affiliate marketing tracking software <strong>track, automate </strong>and<br />
                <strong>optimize</strong> your campaigns.
            </p>
            <div className="counter__container">
                <div className='box' >1 <br/> <p>Hours</p> </div>
                <div className='box' >1 <br /> <p>Hours</p> </div>
                <div className='box' >1 <br /> <p>Hours</p> </div>
                <div className='box' >1 <br /> <p>Hours</p>  </div>
            </div>
            <form action="">
                <input type="text" placeholder='First name.'/>
                <input type="text" placeholder='Last name.' />
            </form>
            <div className="waitlist__container">
                <input type="text" placeholder='Enter your email address...' />
                <button>Join our waitlist</button>
            </div>
        </div>
    )
}

export default Herosection;