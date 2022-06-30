import React from "react";
import "./Footer.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/contact");
  };

  return (
    <div className="footer">
      <span className="name">
        Made with love in Riyadh. Powered by Translate, for any enquiries
        <Button onClick={handleButton}>Contact</Button>
      </span>
    </div>
  );
};

export default Footer;
