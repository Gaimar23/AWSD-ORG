import React, { useEffect, useState } from "react";
import "./recrutement.scss";
import Navbar from "../../components/navbar/Navbar";
import SwiperHiring from "../../components/swiperHiring/SwiperHiring";
import logo from "../../assets/images/contact/contact01.jpg";
import axios from "axios";

const Recrutement = () => {
  const [jobs, setJobs] = useState([]);

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
              <div className="job">
                <div className="image">
                  <img src={logo} alt="" />
                </div>
                <div className="details">
                  <p className="department">Administration & Finance</p>
                  <p className="position">Comptable</p>
                  <div className="type-and-date">
                    <span className="type">CDI</span>
                    <p className="expiration-date">
                      Expire le {new Date().getDate()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="job">
                <div className="image">
                  <img src={logo} alt="" />
                </div>
                <div className="details">
                  <p className="department">Administration & Finance</p>
                  <p className="position">Comptable</p>
                  <div className="type-and-date">
                    <span className="type">CDI</span>
                    <p className="expiration-date">
                      Expire le {new Date().getDate()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="job">
                <div className="image">
                  <img src={logo} alt="" />
                </div>
                <div className="details">
                  <p className="department">Administration & Finance</p>
                  <p className="position">Comptable</p>
                  <div className="type-and-date">
                    <span className="type">CDI</span>
                    <p className="expiration-date">
                      Expire le {new Date().getDate()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recrutement;
