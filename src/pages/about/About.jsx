import React from 'react'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import './about.scss'

const About = () => {
  return (
    <div className='about' >
      <Nav/>
      <div className="first__section">
        <div className="glass__container">
          
        </div>
        <p className='about__text' >---- ABOUT US</p>
        <p className='saas__text' >Built for Saas <br />and E-commerce</p>
        <p className='tools__text' >Our tools are easy to setup and use with a user <br/>
        friendly dashboard that enables you to setup,<br/>
        launch, automate and manage multi-affiliate <br/>
        campaign in 5 minutes.
        </p>
      </div>
      <div className="second__section">
        <p className='metriks__text'>Metriks was developed because just like <br/>
        you, we needed a product that could give <br/>us <span>good value.</span> 
        </p>
      </div>
      <Footer/>
    </div>
  )
}

export default About