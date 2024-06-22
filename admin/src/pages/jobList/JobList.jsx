import React from "react";
import "./JobList.scss";
import { assets } from "../../assets/assets";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const JobList = () => {
  return (
    <div className="job-list">
      <h3>Jobs List</h3>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Position</b>
          <b>Category</b>
          <b>Action</b>
        </div>
        <div className="list-table-format">
          <img src={assets.jobDefault} alt="" />
          <b>Account and assistant</b>
          <b>Finance</b>
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

export default JobList;
