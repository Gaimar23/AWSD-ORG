import React, { useEffect, useState } from "react";
import "./recrutement.scss";
import Navbar from "../../components/navbar/Navbar";
import SwiperHiring from "../../components/swiperHiring/SwiperHiring";
import logo from "../../assets/images/contact/contact01.jpg";
import axios from "axios";
import PaginationJobs from "../../components/paginationJobs/PaginationJobs";

const Recrutement = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);

  const collectJobs = async () => {
    const response = await axios.get(`http://localhost:5000/api/job/get`);
    if (response.data.success) {
      setJobs(response.data.data);
      // console.log(response.data.data);
    }
  };

  useEffect(() => {
    collectJobs();
  }, []);
  let isJobs = jobs.length > 0 ? true : false;
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = jobs.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="recrutement">
      <Navbar />
      <SwiperHiring />
      <div className="global-container">
        <h1>
          Offres disponible chez{" "}
          <span
            style={{
              color: "green",
              borderBottom: "2px solid green",
              paddingBottom: "4px",
            }}
          >
            AWSD
          </span>
        </h1>

        <div className="job-container">
          <div className="sub-container">
            <div className="info-and-field">
              <div className="offers">
                <span className="count">100</span>
                <span className="title">offres disponibles</span>
              </div>
              <div className="type-cdi">
                <span className="count">20</span>
                <span className="title">CDI</span>
              </div>
              <div className="type-cdd">
                <span className="count">10</span>
                <span className="title">CDD</span>
              </div>
              <div className="type-stage">
                <span className="count">31</span>
                <span className="title">Stages</span>
              </div>
            </div>
            <div className="jobs">
              {currentPosts.map((job, index) => {
                return (
                  <div className="job" key={index}>
                    <div className="image">
                      <img
                        src={`http://localhost:5000/images/${job.image}`}
                        alt=""
                      />
                    </div>
                    <div className="details">
                      <p className="department">{job.department}</p>
                      <p className="position">{job.poste}</p>
                      <div className="type-and-date">
                        <span className="type">{job.type}</span>
                        <p className="expiration-date">
                          Expire le {new Date().getDate()}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <PaginationJobs
                totalPots={jobs.length}
                postsPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recrutement;
