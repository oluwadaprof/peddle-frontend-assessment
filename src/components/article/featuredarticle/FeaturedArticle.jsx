import React from 'react'
import './featuredarticle.scss'
import articleImage from '../../../assets/istockphoto-1353348897-170667a.jpg'

const FeaturedArticle = () => {
    return (
        <div className='featured__article' >
            <img src={articleImage} alt="article-img" />
            <p>SEPTEMBER 6, 2021 FEATURED ARTICLE, AFFILIATE</p>
            <h1>12 Popup Use Cases <br />
                To Increase Conversions
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur<br />
                adipisicing elit. Aspernatur vero, provident dicta <br />
                illo est enim quas nisi architecto qui animi ullam corrupti at odit <br />
                quia magni suscipit, eaque error, voluptate aliquam odio beatae similique <br />
                 Eius totam molestiae quo aliquam unde. Veritatis consectetur, <br />
                explicabo deleniti, harum nam sint doloribus!</p>
                <p  className='readme__link'>---- READ MORE</p>
        </div>
    )
}

export default FeaturedArticle