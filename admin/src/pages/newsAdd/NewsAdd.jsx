import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./NewsAdd.scss";

const NewsAdd = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    category: "",
    author: "",
    article: "",
  });

  return (
    <div className="news-add">
      <form className="news-form">
        <div className="news-head">
          <div className="upload-image-news">
            {/* <p>Upload image</p> */}
            <label htmlFor="imageNews">
              <img
                className="news-img"
                src={image ? URL.createObjectURL(image) : assets.jobDefault}
                alt=""
              />
            </label>
            <input type="file" required id="imageNews" hidden />
          </div>
          <div className="title">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="title-input"
              value={data.title}
            />
            <input
              type="text"
              name="subtitle"
              placeholder="Subtitle"
              className="title-input"
              value={data.subtitle}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="title-input"
              value={data.category}
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              className="title-input"
              value={data.author}
            />
          </div>
        </div>
        <textarea
          name="article"
          placeholder="Write your article here"
          className="description"
          rows={6}
          value={data.article}
        ></textarea>
        <button type="submit" className="publish-job">
          Publish
        </button>
      </form>
    </div>
  );
};

export default NewsAdd;
