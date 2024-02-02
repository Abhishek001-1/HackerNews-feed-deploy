import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="text-light p-2"
      style={{
        backgroundColor: "#02060f",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <div className="container mb-3">
        <div className="row text-center">
          <div className="col-sm">
            <Link
              to="https://mail.google.com/mail/u/0/#inbox"
              style={{ textDecoration: "none" }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </div>
          <div className="col-sm">
            <Link to="https://www.linkedin.com/in/abhishek-wani-068392201/">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
          <div className="col-sm">
            <Link to="https://github.com/Abhishek001-1">
              <FontAwesomeIcon className="fa-light fa-lg" icon={faProjectDiagram} />
            </Link>
          </div>
        </div>
      </div>
      <h6 className="text-center">
        All rights reserved &copy; Abhishek Wani
      </h6>
    </div>
  );
};

export default Footer;
