import React, { useEffect, useState } from "react";
import "./TableProfil.scss";
import { RxCross2 } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import { motion } from "framer-motion";

const TableProfil = ({ setShowTableProfil, info, logOut }) => {
  // const [tableProfil, setTableProfil] = useState("");

  // useEffect(() => {
  //   setTableProfil(document.querySelector(".table-profil"));
  //   console.log(tableProfil);
  // }, []);
  return (
    <div className="table-profil">
      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <div className="head">
          <span className="dec"></span>
          <span
            className="cross-icon"
            onClick={() => setShowTableProfil(false)}
          >
            <RxCross2 className="icon" />
          </span>
        </div>

        <div className="sub-container">
          <div className="image-container">
            <img src="" alt="" />
          </div>
          <h3>{info ? info[1] : ""}</h3>
          <span className="email">{info ? info[3] : ""}</span>
          <span className="phone">{info ? info[2] : ""}</span>
          <span className="admin">Administration</span>
          <button>Modifier mon profil</button>
        </div>
        <div className="logOut" onClick={logOut}>
          <span>Se déconnecter</span>
          <IoIosLogOut className="logout-icon" />
        </div>
      </motion.div>
    </div>
  );
};

export default TableProfil;
