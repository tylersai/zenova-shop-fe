import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../../assets/user.svg";

export const ProfileCard = ({ name, email }) => {
  return (
    <div
      className="ProfileCard mb-4"
      style={{ border: "1px solid #ddd", borderRadius: "4px" }}
    >
      <div className="d-flex flex-column align-items-center px-2 py-3">
        <img
          className="img-fluid mb-5"
          src={userIcon}
          alt="Profile"
          width="60%"
        />
        <h3 className="mb-0">{name}</h3>
        <p>{email}</p>
        <div style={{ opacity: "0.7", whiteSpace: "nowrap" }}>
          <Link to="/edit-profile">
            <i className="fas fa-pen"></i> Edit
          </Link>{" "}
          <span className="mx-2">|</span>
          <Link to="/change-password">
            <i className="fas fa-key"></i> Change Password
          </Link>
        </div>
      </div>
    </div>
  );
};
