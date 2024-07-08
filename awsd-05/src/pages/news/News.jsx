import React from "react";
import "./News.scss";
import Navbar from "../../components/navbar/Navbar";
import article1 from "../../assets/images/recrutement/hiring01.jpg";
import article2 from "../../assets/images/recrutement/hiring02.jpg";
import author from "../../assets/images/team/teammate01.png";
import Footer from "../../components/footer/Footer";

const News = () => {
  return (
    <div className="news">
      <Navbar />
      <div className="global-container">
        <hr className="navbar-bottom" />
        <div className="container">
          <div className="sub-container">
            <div className="article">
              <div className="head-image">
                <div className="image">
                  <img src={article1} alt="" />
                </div>
                <div className="image-title">
                  <h1 className="title">The king is about fly</h1>
                  <p className="subtitle">We've awaited this for so long</p>
                  <span className="category">Histoire</span>
                  <div className="author">
                    <img src={author} alt="" />
                    <span className="name">Dev samy</span>
                  </div>
                </div>
              </div>
              <div className="article-description">
                Notre association a été créée avec l’objectif ambitieux de
                participer à la transformation des attitudes, habitudes et
                aptitudes humaines à l’échelle nationale et internationale, en
                se concentrant sur les objectifs du développement durable.
              </div>
            </div>
            <div className="article">
              <div className="head-image">
                <div className="image">
                  <img src={article2} alt="" />
                </div>
                <div className="image-title">
                  <h1 className="title">The king is about fly</h1>
                  <p className="subtitle">We've awaited this for so long</p>
                  <span className="category">Histoire</span>
                  <div className="author">
                    <img src={author} alt="" />
                    <span className="name">Dev samy</span>
                  </div>
                </div>
              </div>
              <div className="article-description">
                Notre association a été créée avec l’objectif ambitieux de
                participer à la transformation des attitudes, habitudes et
                aptitudes humaines à l’échelle nationale et internationale, en
                se concentrant sur les objectifs du développement durable.
              </div>
            </div>
            <div className="article">
              <div className="head-image">
                <div className="image">
                  <img src={article2} alt="" />
                </div>
                <div className="image-title">
                  <h1 className="title">The king is about fly</h1>
                  <p className="subtitle">We've awaited this for so long</p>
                  <span className="category">Histoire</span>
                  <div className="author">
                    <img src={author} alt="" />
                    <span className="name">Dev samy</span>
                  </div>
                </div>
              </div>
              <div className="article-description">
                Notre association a été créée avec l’objectif ambitieux de
                participer à la transformation des attitudes, habitudes et
                aptitudes humaines à l’échelle nationale et internationale, en
                se concentrant sur les objectifs du développement durable.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
