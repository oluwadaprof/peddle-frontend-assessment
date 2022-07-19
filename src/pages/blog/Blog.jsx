import React from 'react'
import Nav from '../../components/nav/Nav'
import './blog.scss'
import { BsSearch } from "react-icons/bs";


const Blog = () => {
    return (
        <div className='blog' >
            <Nav />
            <div className="first__section">
                <div className="glass__box">
                    <div className="text__container">
                        <p>----- BLOG</p>
                        <h1>Articles and News</h1>
                    </div>
                </div>
            </div>
            <div className="second__section">
                <div className="header__content">
                    <div className="text__container">
                        <h1>Latest from Blog</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum  <br />doloremque eveniet repudiandae, qui sint architecto?</p>
                    </div>
                </div>
                <div className="input__container">
                    <input type="text" />
                    <BsSearch  className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Blog