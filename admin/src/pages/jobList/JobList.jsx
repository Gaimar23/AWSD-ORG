import React, { useEffect, useState } from "react";
import "./JobList.scss";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import { toast } from "react-toastify";

const JobList = () => {
  const [jobList, setJobList] = useState([]);

  const list = async () => {
    const response = await axios.get("http://localhost:5000/api/job/get");
    console.log(response);
    if (response.data.success) {
      setJobList(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    list();
  }, []);

  return (
    <div className="job-list">
      {/* <h3 style={{ color: "white" }}>Jobs List</h3> */}
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Position</b>
          <b>Category</b>
          <b>Action</b>
        </div>
        {jobList.map((job, index) => {
          return (
            <div className="list-table-format" key={index}>
              <img src={`http://localhost:5000/images/${job.image}`} alt="" />
              <b style={{ color: "#a9a9a9" }}>{job.poste}</b>
              <b style={{ color: "#a9a9a9" }}>{job.department}</b>
              <b style={{ display: "flex", gap: "30px" }}>
                {" "}
                <MdDeleteOutline
                  className="action-icon"
                  style={{ color: "#a9a9a9" }}
                />
                <CiEdit className="action-icon" style={{ color: "#a9a9a9" }} />
              </b>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobList;
