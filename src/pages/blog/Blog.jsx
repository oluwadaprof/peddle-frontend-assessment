import React from 'react'
import Nav from '../../components/nav/Nav'
import './blog.scss'
import { BsSearch } from "react-icons/bs";
import FeaturedArticle from '../../components/article/featuredarticle/FeaturedArticle';
import ArticleCard from '../../components/article/articlecard/ArticleCard';


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

                    <div className="input__container">
                        <input type="text" placeholder='Search here' />
                        <BsSearch className='icon' />
                    </div>
                </div>
                <div className="article__container">
                    <FeaturedArticle />
                    <FeaturedArticle />
                    <FeaturedArticle />
                    <FeaturedArticle />
                    <FeaturedArticle />
                    <FeaturedArticle />
                </div>
            </div>
            <div className="blog__third-section">
                <div className="recent__container-header">
                    <h1>Recent Articles</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Libero natus, quidem sit officia dicta vel a distinctio impedit fugiat corporis!</p>
                </div>
                <div className="article__card-container">
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </div>
                <button className='load__more-btn' >LOAD MORE</button>
            </div>
            <div className="blog__fourth-section">
                <h1>What to know more about metrics?</h1>
                <p>Learn who we are and what drives us.</p>
                <a href="#">Contact Us ----`{'>'}`</a>
            </div>
        </div>
    )
}

export default Blog