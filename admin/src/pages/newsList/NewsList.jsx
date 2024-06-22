import React from "react";
import "./NewsList.scss";
import { assets } from "../../assets/assets";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const NewsList = () => {
  return (
    <div className="news-list">
      {/* <h3 style={{ color: "white" }}>Article List</h3> */}
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Title</b>
          <b>Subtitle</b>
          <b>Action</b>
        </div>
        <div className="list-table-format">
          <img src={assets.jobDefault} alt="" />
          <b style={{ color: "#a9a9a9" }}>Account and assistant</b>
          <b style={{ color: "#a9a9a9" }}>Finance</b>
          <b style={{ display: "flex", gap: "30px" }}>
            {" "}
            <MdDeleteOutline
              className="action-icon"
              style={{ color: "#a9a9a9" }}
            />
            <CiEdit className="action-icon" style={{ color: "#a9a9a9" }} />
          </b>
        </div>
        <div className="list-table-format">
          <img src={assets.logo} alt="" />
          <b>Sales Director</b>
          <b>Marketing</b>
          <b style={{ display: "flex", gap: "30px" }}>
            {" "}
            <MdDeleteOutline className="action-icon" />
            <CiEdit className="action-icon" />
          </b>
        </div>
        <div className="list-table-format">
          <img src={assets.logo} alt="" />
          <b>Sales Director</b>
          <b>Marketing</b>
          <b style={{ display: "flex", gap: "30px" }}>
            {" "}
            <MdDeleteOutline className="action-icon" />
            <CiEdit className="action-icon" />
          </b>
        </div>
        <div className="list-table-format">
          <img src={assets.logo} alt="" />
          <b>Sales Director</b>
          <b>Marketing</b>
          <b style={{ display: "flex", gap: "30px" }}>
            {" "}
            <MdDeleteOutline className="action-icon" />
            <CiEdit className="action-icon" />
          </b>
        </div>
        <div className="list-table-format">
          <img src={assets.logo} alt="" />
          <b>Sales Director</b>
          <b>Marketing</b>
          <b style={{ display: "flex", gap: "30px" }}>
            {" "}
            <MdDeleteOutline className="action-icon" />
            <CiEdit className="action-icon" />
          </b>
        </div>
        <div className="list-table-format">
          <img src={assets.logo} alt="" />
          <b>Sales Director</b>
          <b>Marketing</b>
          <b style={{ display: "flex", gap: "30px" }}>
            {" "}
            <MdDeleteOutline className="action-icon" />
            <CiEdit className="action-icon" />
          </b>
        </div>
        <div className="list-table-format">
          <img src={assets.logo} alt="" />
          <b>Sales Director</b>
          <b>Marketing</b>
          <b style={{ display: "flex", gap: "30px" }}>
            {" "}
            <MdDeleteOutline className="action-icon" />
            <CiEdit className="action-icon" />
          </b>
        </div>
        <div className="list-table-format">
          <img src={assets.logo} alt="" />
          <b>Sales Director</b>
          <b>Marketing</b>
          <b style={{ display: "flex", gap: "30px" }}>
            {" "}
            <MdDeleteOutline className="action-icon" />
            <CiEdit className="action-icon" />
          </b>
        </div>
        <div className="list-table-format">
          <img src={assets.logo} alt="" />
          <b>Sales Director</b>
          <b>Marketing</b>
          <b style={{ display: "flex", gap: "30px" }}>
            {" "}
            <MdDeleteOutline className="action-icon" />
            <CiEdit className="action-icon" />
          </b>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
