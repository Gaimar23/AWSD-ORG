import React, { useEffect, useState } from "react";
import "./UserEdit.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { assets } from "../../assets/assets";

const UserEdit = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const { image, setImage } = useState(user[4]);
  const { data, setData } = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const singleUser = async () => {
    const response = await axios.post(
      `http://localhost:5000/api/user/single/${userId}`
    );
    if (response.data.success) {
      setUser(response.data.user);
      console.log(response.data.user);
    }
  };

  useEffect(() => {
    singleUser();
  }, []);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  return (
    <div className="user-edit">
      <form className="user-form">
        <div className="image-container">
          <label htmlFor="img-profile">
            <img
              // src={!image ? assets.logo : URL.createObjectURL(assets.jobDefault)}
              src={assets.jobDefault}
              alt=""
              className="user-image"
            />
          </label>
          <input type="file" required id="img-profile" hidden />
        </div>
        <div className="inputs">
          <input
            type="text"
            name="name"
            placeholder="Fullname"
            value={data.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            value={data.phone}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UserEdit;
