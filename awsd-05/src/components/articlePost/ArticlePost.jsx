import React, { useEffect, useState } from "react";
import "./ArticlePost.scss";

const ArticlePost = () => {
  const [articlePost, setArticlePost] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setArticlePost(document.getElementById("article-post"));
    }, 1000);
  }, []);

  //   const handlePost = () => {
  //     console.log("okay I see");
  //   };
  document.body.onclick = () => {
    if (!articlePost) {
    }
    console.log("okay I see");
  };
  return (
    <div className="article-post">
      <div className="container" id="article-post">
        <div className="sub-container">
          <div className="article">
            <div className="head-image">
              <div className="image">
                <img src="" alt="" />
              </div>
              <div className="image-title">
                <h1 className="title">My Son and ...</h1>
                <p className="subtitle">Family legacy</p>
                <span className="category">Family</span>
                <div className="author">
                  <img src="" alt="" />
                  <span className="name">John</span>
                </div>
              </div>
            </div>
            <div className="article-description">
              Once upon a time , there were some people known and feared by all
              because of their ability to move onOnce upon a time , there were
              some people known and feared by all because of their ability to
              move on Once upon a time , there were some people known and feared
              by all because of their ability to move onOnce upon a time , there
              were some people known and feared by all because of their ability
              to move on Once upon a time , there were some people known and
              feared by all because of their ability to move onOnce upon a time
              , there were some people known and feared by all because of their
              ability to move on
            </div>
          </div>
        </div>
        {/* <Pagination
          totalPots={articles.length}
          postsPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        /> */}
      </div>
    </div>
  );
};

export default ArticlePost;
