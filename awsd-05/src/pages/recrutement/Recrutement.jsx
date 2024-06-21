import React from "react";
import "./recrutement.scss";
import Navbar from "../../components/navbar/Navbar";
import SwiperHiring from "../../components/swiperHiring/SwiperHiring";

const Recrutement = () => {
  return (
    <div className="recrutement">
      <Navbar />
      <SwiperHiring />
    </div>
  );
};

export default Recrutement;
