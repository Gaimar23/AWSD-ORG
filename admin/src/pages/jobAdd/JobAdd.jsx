import React, { useState } from "react";
import "./JobAdd.scss";
import { assets } from "../../assets/assets";

const JobAdd = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    poste: "",
    department: "",
    reference: "",
    contrat: "",
    education: "",
    localisation: "",
    type: "",
    description: "",
  });

  const onchangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onsubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("poste", data.poste);
    formData.append("department", data.department);
    formData.append("reference", data.reference);
    formData.append("contrat", data.contrat);
    formData.append("education", data.education);
    formData.append("localisation", data.localisation);
    formData.append("type", data.type);
    formData.append("description", data.description);
    formData.append("image", image);
  };

  return (
    <div className="job-add">
      <form className="job-form">
        <div className="job-head">
          <div className="upload-image-job">
            {/* <p>Upload image</p> */}
            <label htmlFor="imageJob">
              <img
                className="job-img"
                src={image ? URL.createObjectURL(image) : assets.jobDefault}
                alt=""
              />
            </label>
            <input
              type="file"
              required
              id="imageJob"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="title">
            <input
              type="text"
              placeholder="Poste"
              className="title-input"
              value={data.poste}
            />
            <div className="detail">
              <div className="left">
                <input
                  type="text"
                  placeholder="Département"
                  className="title-input"
                  value={data.department}
                />
                <input
                  type="text"
                  placeholder="Reference"
                  className="title-input"
                  value={data.reference}
                />
                <input
                  type="text"
                  placeholder="Nature Contrat"
                  className="title-input"
                  value={data.contrat}
                />
              </div>
              <div className="right">
                <input
                  type="text"
                  placeholder="Niveau d'étude"
                  className="title-input"
                  value={data.education}
                />
                <input
                  type="text"
                  placeholder="Localisation"
                  className="title-input"
                  value={data.localisation}
                />
                <input
                  type="text"
                  placeholder="Type de contrat"
                  className="title-input"
                  value={data.contrat}
                />
              </div>
            </div>
          </div>
        </div>
        <textarea
          name="description"
          placeholder="job description"
          className="description"
          rows={6}
          value={data.description}
        ></textarea>
        <button type="submit" className="publish-job">
          Publish
        </button>
      </form>
    </div>
  );
};

export default JobAdd;
