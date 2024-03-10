import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import articlesImage1 from '../assents/imgs/cat-01.jpg';
import articlesImage2 from '../assents/imgs/cat-02.jpg';
import articlesImage3 from '../assents/imgs/cat-03.jpg';
import articlesImage4 from '../assents/imgs/cat-04.jpg';
import articlesImage5 from '../assents/imgs/cat-05.jpg';
import articlesImage6 from '../assents/imgs/cat-06.jpg';
import articlesImage7 from '../assents/imgs/cat-07.jpg';
import articlesImage8 from '../assents/imgs/cat-08.jpg';

const Articles = () => {
    const articlesData = [
        { imgSrc: articlesImage1, title: 'Test Title', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit' },
        { imgSrc: articlesImage2, title: 'Test Title', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit' },
        { imgSrc: articlesImage3, title: 'Test Title', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit' },
        { imgSrc: articlesImage4, title: 'Test Title', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit' },
        { imgSrc: articlesImage5, title: 'Test Title', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit' },
        { imgSrc: articlesImage6, title: 'Test Title', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit' },
        { imgSrc: articlesImage7, title: 'Test Title', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit' },
        { imgSrc: articlesImage8, title: 'Test Title', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit' },

    ];

    const ArticleBox = ({ imgSrc, title, content }) => {
        return (
            <div className="box">
                <div className="content">
                    <img src={imgSrc} alt="" />
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
                <div className="info">
                    <a href="test">Read More</a>
                    <FontAwesomeIcon className="fac" icon={faLongArrowAltRight} />
                </div>
            </div>
        );
    };



    return (
        <div className="articles" id="articles">
            <img src="../assents/imgs/articles.png" alt="" />
            <h2 className="main-title">Articles</h2>
            <div className="container">
                {articlesData.map((article, index) => (
                    <ArticleBox key={index} {...article} />
                ))}
            </div>
        </div>
    );
};

export default Articles;
